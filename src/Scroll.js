import store from './store'
import E from './E'
import Scrollbar from './Scrollbar'
import Events from './Events'

export default class Scroll {
	constructor(options = {}) {
		this.options = options
		this.scrollbarCheck = this.options.customScrollbar

		this.scrollContainer = document.querySelector(this.options.element)
		const possibleScrollTargets = this.scrollContainer.querySelectorAll(this.options.innerElement)
		this.scrollTargets = possibleScrollTargets.length ? possibleScrollTargets : [this.scrollContainer.firstElementChild]
		this.scrollTargetsLength = this.scrollTargets.length
		this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0
		this.enabled = false
		this.render = false
		this.scrolling = false
		this.syncScroll = false
		this.horizontalScroll = false
		this.touchScroll = false
		this.firstResize = true
		this.preventResizeScroll = false
		this.ease = store.isTouch ? this.options.touchEase : this.options.ease

		this.testFps = true
		this.delta = 1
		this.time = this.startTime = performance.now()

		if (!store.isTouch || !this.options.disableOnTouch) {
			if (store.isTouch) this.options.customScrollbar = false
			this.smoothSetup()
		} else {
			this.touchScroll = true
			document.documentElement.classList.add('asscroll-touch')
			this.options.customScrollbar = false
			E.on('scroll', this.scrollContainer, e => { E.emit(Events.INTERNALSCROLL, { event: e }) }, { passive: true })
		}

		this.addEvents()
	}

	addEvents() {
		// enable smooth scroll if mouse is detected
		E.on(Events.MOUSEDETECTED, () => {
			if (!this.options.disableOnTouch) return
			this.touchScroll = false
			this.options.customScrollbar = this.scrollbarCheck
			this.smoothSetup()
			this.onResize()
		})

		E.on('mouseleave', document, () => {
			window.scrollTo(0, -this.scrollPos)
		})

		E.on('keydown', window, e => {
			if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
				window.scrollTo(0, -this.scrollPos)
			}
			if (e.key === 'Tab') {
				this.toggleFixedContainer()
			}
		})

		E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer)
		E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent)
	}

	smoothSetup() {
		Object.assign(this.scrollContainer.style, {
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

		setTimeout(() => {
			this.testFps = false
			this.delta = Math.round(this.delta * 10) * 0.1
		}, 2000)
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
			this.scrollPos += event.deltaY * -1
		} else {
			if (this.preventResizeScroll) {
				this.preventResizeScroll = false
				return
			}

			if (this.touchScroll) {
				this.scrollPos = this.horizontalScroll ? -this.scrollContainer.scrollLeft : -this.scrollContainer.scrollTop
			} else {
				this.scrollPos = -window.scrollY
			}

			if (store.isTouch && this.options.disableOnTouch) {
				this.smoothScrollPos = this.scrollPos
			}
		}

		this.clamp()
		E.emit(Events.EXTERNALSCROLL, this.scrollPos)
	}

	onRAF = () => {
		if (this.testFps && this.options.limitLerpRate) {
			this.time = performance.now() * 0.001
			this.delta = Math.min((this.time - this.startTime) * 60, 1)
			this.startTime = this.time
		}

		if (!this.render) return

		if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
			this.smoothScrollPos = this.scrollPos
			if (this.syncScroll) {
				this.syncScroll = false
				window.scrollTo(0, -this.scrollPos)
				E.emit(Events.SCROLLEND, this.scrollPos)
			}
			if (this.scrolling) {
				this.scrolling = false
				this.options.customScrollbar && this.scrollbar.hide()
				this.toggleIframes(true)
			}
		} else {
			this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.ease * this.delta
		}

		const x = this.horizontalScroll ? this.smoothScrollPos : 0
		const y = this.horizontalScroll ? 0 : this.smoothScrollPos
		this.applyTransform(x, y)

		this.options.customScrollbar && this.scrollbar.transform()

		E.emit(Events.EXTERNALRAF, { scrollPos: this.scrollPos, smoothScrollPos: this.smoothScrollPos })
	}

	applyTransform(x, y) {
		for (let i = 0; i < this.scrollTargetsLength; i++) {
			this.scrollTargets[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`
		}
	}

	enable({
		scrollTargets = false,
		reset = false,
		restore = false,
		horizontalScroll = false
	} = {}) {
		if (this.enabled) return
		this.enabled = true

		this.render = true

		this.horizontalScroll = horizontalScroll

		if (scrollTargets) {
			this.scrollTargets = scrollTargets.length ? scrollTargets : [scrollTargets]
			this.scrollTargetsLength = this.scrollTargets.length
		}

		this.iframes = this.scrollContainer.querySelectorAll('iframe')

		if (store.isTouch && this.options.disableOnTouch) {
			store.body.style.removeProperty('height')
			if (reset) {
				this.scrollPos = this.smoothScrollPos = 0
				this.scrollTo(0, false)
			}
		} else {
			this.firstResize = true
			if (reset) {
				this.scrollPos = this.smoothScrollPos = 0
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

		this.prevScrollPos = this.scrollPos
		store.body.style.height = '0px'
	}

	clamp() {
		this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll)
	}

	scrollTo(y, emitEvent = true) {
		this.scrollPos = y
		if (store.isTouch && this.options.disableOnTouch) {
			if (this.horizontalScroll) {
				this.scrollContainer.scrollTo(-this.scrollPos, 0)
			} else {
				this.scrollContainer.scrollTo(0, -this.scrollPos)
			}
		}
		this.clamp()
		this.syncScroll = true
		if (emitEvent) E.emit(Events.EXTERNALSCROLL, this.scrollPos)
	}

	onResize = () => {
		if (this.scrollTargetsLength > 1) {
			const lastTarget = this.scrollTargets[this.scrollTargetsLength - 1]
			const compStyle = window.getComputedStyle(lastTarget)
			const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom)
			const bcr = lastTarget.getBoundingClientRect()
			const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom
			this.scrollLength = endPosition + marginOffset - this.smoothScrollPos
		} else {
			this.scrollLength = this.horizontalScroll ? this.scrollTargets[0].scrollWidth : this.scrollTargets[0].scrollHeight
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
		this.scrollContainer.style.position = 'static'
		const scrollPos = this.smoothScrollPos
		this.applyTransform(0, 0)
		requestAnimationFrame(() => {
			this.scrollContainer.style.position = 'fixed'
			const x = this.horizontalScroll ? scrollPos : 0
			const y = this.horizontalScroll ? 0 : scrollPos
			this.applyTransform(x, y)
		})
	}
}