import store from './store'
import E from './E'
import Scrollbar from './Scrollbar'
import Events from './Events'

export default class Scroll {
	constructor(options = {}) {
		this.options = options

		this.containerElement = typeof this.options.containerElement === 'string' ? document.querySelector(this.options.containerElement) : this.options.containerElement
		if (this.containerElement === null) {
			console.error('ASScroll: could not find container element')
		}

		this.scrollElements = typeof this.options.scrollElements === 'string' ? document.querySelectorAll(this.options.scrollElements) : this.options.scrollElements
		if (this.scrollElements.length) this.scrollElements = [...this.scrollElements]
		this.scrollElements = this.scrollElements.length ? this.scrollElements : [this.containerElement.firstElementChild]
		this.scrollElementsLength = this.scrollElements.length

		this.targetScrollPos = this.currentScrollPos = this.prevScrollPos = this.maxScroll = 0
		this.enabled = false
		this.render = false
		this.scrolling = false
		this.syncScroll = false
		this.horizontalScroll = false
		this.firstResize = true
		this.preventResizeScroll = false
		this.ease = store.isTouch ? this.options.touchEase : this.options.ease
		this.originalScrollbarSetting = this.options.customScrollbar

		this.testFps = true
		this.delta = 1
		this.time = this.startTime = performance.now()

		if (store.isTouch) {
			this.options.customScrollbar = false

			if (this.options.touchScrollType === 'none') {
				console.log('no touch scroll')
			} else if (this.options.touchScrollType === 'transform') {
				this.setupSmoothScroll()
			} else if (this.options.touchScrollType === 'scrollTop') {
				document.documentElement.classList.add('asscroll-touch')
				E.on('scroll', this.containerElement, e => { E.emit(Events.INTERNALSCROLL, { event: e }) }, { passive: true })
			}
		} else {
			this.setupSmoothScroll()
		}

		this.addEvents()
	}

	setupSmoothScroll() {
		Object.assign(this.containerElement.style, {
			position: 'fixed',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			contain: 'content'
		})

		if (this.options.customScrollbar) {
			this.scrollbar = new Scrollbar(this)
		}

		E.on(Events.INTERNALRAF, this.onRAF)
		E.on(Events.RESIZE, this.onResize)

		if (this.options.limitLerpRate) {
			setTimeout(() => {
				this.testFps = false
				this.delta = Math.round(this.delta * 10) * 0.1
			}, 2000)
		}
	}

	onScroll = ({ event }) => {
		if (!this.scrolling) {
			this.options.customScrollbar && this.scrollbar.show()
			this.toggleIframes()
			this.scrolling = true
		}

		if (!store.isTouch && event.type === 'wheel') {
			event.preventDefault()

			this.syncScroll = true
			this.targetScrollPos += event.deltaY * -1
		} else {
			if (this.preventResizeScroll) {
				this.preventResizeScroll = false
				return
			}

			if (store.isTouch && this.options.touchScrollType === 'scrollTop') {
				this.targetScrollPos = this.horizontalScroll ? -this.containerElement.scrollLeft : -this.containerElement.scrollTop
			} else {
				this.targetScrollPos = -window.scrollY
			}

			if (store.isTouch && this.options.touchScrollType !== 'transform') {
				this.currentScrollPos = this.targetScrollPos
			}
		}

		this.clamp()
		E.emit(Events.EXTERNALSCROLL, -this.targetScrollPos)
	}

	onRAF = () => {
		if (this.testFps && this.options.limitLerpRate) {
			this.time = performance.now() * 0.001
			this.delta = Math.min((this.time - this.startTime) * 60, 1)
			this.startTime = this.time
		}

		if (!this.render) return

		if (Math.abs(this.targetScrollPos - this.currentScrollPos) < 0.5) {
			this.currentScrollPos = this.targetScrollPos
			if (this.syncScroll) {
				this.syncScroll = false
				window.scrollTo(0, -this.targetScrollPos)
				E.emit(Events.SCROLLEND, -this.targetScrollPos)
			}
			if (this.scrolling) {
				this.scrolling = false
				this.options.customScrollbar && this.scrollbar.hide()
				this.toggleIframes(true)
			}
		} else {
			this.currentScrollPos += (this.targetScrollPos - this.currentScrollPos) * this.ease * this.delta
		}

		const x = this.horizontalScroll ? this.currentScrollPos : 0
		const y = this.horizontalScroll ? 0 : this.currentScrollPos
		this.applyTransform(x, y)

		this.options.customScrollbar && this.scrollbar.transform()

		E.emit(Events.EXTERNALRAF, { targetScrollPos: -this.targetScrollPos, currentScrollPos: -this.currentScrollPos })
	}

	applyTransform(x, y) {
		for (let i = 0; i < this.scrollElementsLength; i++) {
			this.scrollElements[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`
		}
	}

	enable({
		newScrollElements = false,
		reset = false,
		restore = false,
		horizontalScroll = false
	} = {}) {
		if (this.enabled) return
		this.enabled = true

		this.render = true

		this.horizontalScroll = horizontalScroll

		if (newScrollElements) {
			this.scrollElements = newScrollElements.length ? [...newScrollElements] : [newScrollElements]
			this.scrollElementsLength = this.scrollElements.length
		}

		this.iframes = this.containerElement.querySelectorAll('iframe')

		if (store.isTouch && this.options.touchScrollType !== 'transform') {
			store.body.style.removeProperty('height')
			this.maxScroll = -this.containerElement.scrollHeight
			if (reset) {
				this.targetScrollPos = this.currentScrollPos = 0
				this.scrollTo(0, false)
			}
		} else {
			this.firstResize = true
			if (reset) {
				this.targetScrollPos = this.currentScrollPos = 0
				this.applyTransform(0, 0)
			}
			this.onResize()
		}

		if (restore) {
			this.scrollTo(this.prevScrollPos, false)
		}

		E.on(Events.WHEEL, this.onScroll)
		E.on(Events.INTERNALSCROLL, this.onScroll)
	}

	disable({ inputOnly = false } = {}) {
		if (!this.enabled) return
		this.enabled = false

		if (!inputOnly) {
			this.render = false
		}

		E.off(Events.WHEEL, this.onScroll)
		E.off(Events.SCROLL, this.onScroll)

		this.prevScrollPos = this.targetScrollPos
		store.body.style.height = '0px'
	}

	clamp() {
		this.targetScrollPos = Math.max(Math.min(this.targetScrollPos, 0), this.maxScroll)
	}

	scrollTo(y, emitEvent = true) {
		this.targetScrollPos = y
		if (store.isTouch && this.options.touchScrollType !== 'transform') {
			if (this.horizontalScroll) {
				this.containerElement.scrollTo(-this.targetScrollPos, 0)
			} else {
				this.containerElement.scrollTo(0, -this.targetScrollPos)
			}
		}
		this.clamp()
		this.syncScroll = true
		if (emitEvent) E.emit(Events.EXTERNALSCROLL, -this.targetScrollPos)
	}

	onResize = () => {
		if (this.scrollElementsLength > 1) {
			const lastTarget = this.scrollElements[this.scrollElementsLength - 1]
			const compStyle = window.getComputedStyle(lastTarget)
			const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom)
			const bcr = lastTarget.getBoundingClientRect()
			const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom
			this.scrollLength = endPosition + marginOffset - this.currentScrollPos
		} else {
			this.scrollLength = this.horizontalScroll ? this.scrollElements[0].scrollWidth : this.scrollElements[0].scrollHeight
		}

		const windowSize = this.horizontalScroll ? store.windowSize.w : store.windowSize.h
		this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0
		this.clamp()
		if (!this.firstResize) {
			this.preventResizeScroll = true
		}
		store.body.style.height = this.scrollLength + 'px'
		this.options.customScrollbar && this.scrollbar.onResize()
		this.firstResize = false
	}

	toggleIframes(enable) {
		for (let i = 0; i < this.iframes.length; i++) {
			this.iframes[i].style.pointerEvents = enable ? 'auto' : 'none'
		}
	}

	blockScrollEvent(e) {
		e.stopPropagation()
	}

	toggleFixedContainer = () => {
		this.containerElement.style.position = 'static'
		const scrollPos = this.currentScrollPos
		this.applyTransform(0, 0)
		requestAnimationFrame(() => {
			this.containerElement.style.position = 'fixed'
			const x = this.horizontalScroll ? scrollPos : 0
			const y = this.horizontalScroll ? 0 : scrollPos
			this.applyTransform(x, y)
		})
	}

	addEvents() {
		// enable smooth scroll if mouse is detected
		E.on(Events.MOUSEDETECTED, () => {
			if (this.options.touchScrollType === 'transform') return
			this.options.customScrollbar = this.originalScrollbarSetting
			this.ease = this.options.ease
			this.setupSmoothScroll()
			this.onResize()
		})

		if (!store.isTouch) {
			E.on('mouseleave', document, () => {
				window.scrollTo(0, -this.targetScrollPos)
			})

			E.on('keydown', window, e => {
				if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
					window.scrollTo(0, -this.targetScrollPos)
				}
				if (e.key === 'Tab') {
					this.toggleFixedContainer()
				}
			})

			E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer)
			E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent)
		}
	}
}