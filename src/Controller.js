import store from './store'
import E from '@unseenco/e'
import Scrollbar from './Scrollbar'
import Events from './Events'

export default class Controller {
	constructor(options = {}) {
		this.options = options
		this.targetPos = this.currentPos = this.prevScrollPos = this.maxScroll = 0
		this.enabled = false
		this.render = false
		this.scrolling = false
		this.wheeling = false
		this.syncScroll = false
		this.horizontalScroll = false
		this.firstResize = true
		this.preventResizeScroll = false
		this.nativeScroll = true
		this.ease = store.isTouch ? this.options.touchEase : this.options.ease
		this.originalScrollbarSetting = this.options.customScrollbar

		this.testFps = true
		this.delta = 1
		this.time = this.startTime = performance.now()

		this.setElements()

		if (store.isTouch) {
			this.options.customScrollbar = false

			if (this.options.touchScrollType === 'transform') {
				this.setupSmoothScroll()
			} else if (this.options.touchScrollType === 'scrollTop') {
				document.documentElement.classList.add('asscroll-touch')
				this.addTouchStyles()
				E.on('scroll', this.containerElement, e => { E.emit(Events.INTERNALSCROLL, { event: e }) }, { passive: true })
			}
		} else {
			this.setupSmoothScroll()
		}

		this.addEvents()
	}

	setElements() {
		this.containerElement = typeof this.options.containerElement === 'string' ? document.querySelector(this.options.containerElement) : this.options.containerElement
		if (this.containerElement === null) {
			console.error('ASScroll: could not find container element')
		}
		this.containerElement.setAttribute('asscroll-container', '')

		this.scrollElements = typeof this.options.scrollElements === 'string' ? document.querySelectorAll(this.options.scrollElements) : this.options.scrollElements
		if (this.scrollElements.length) this.scrollElements = [...this.scrollElements]
		this.scrollElements = this.scrollElements.length ? this.scrollElements : [this.containerElement.firstElementChild]
		this.scrollElementsLength = this.scrollElements.length
		this.scrollElements.forEach(el => el.setAttribute('asscroll', ''))
	}

	setupSmoothScroll() {
		this.nativeScroll = false

		if (store.isTouch && this.options.lockIOSBrowserUI) {
			Object.assign(document.body.style, {
				position: 'fixed',
				width: '100%',
				height: '100%',
				overflowY: 'auto'
			})

			store.html.style.overflow = 'hidden'

			this.scrollElements.forEach(el => { el.style.position = 'fixed' })

			E.on('scroll', document.body, e => { E.emit(Events.INTERNALSCROLL, { event: e }) })
		} else {
			Object.assign(this.containerElement.style, {
				position: 'fixed',
				top: '0px',
				left: '0px',
				width: '100%',
				height: '100%',
				contain: 'content'
			})
		}

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
			this.toggleIframes()
			this.scrolling = true
		}

		const prevTargetPos = this.targetPos

		if (!store.isTouch && event.type === 'wheel') {
			event.preventDefault()

			this.syncScroll = true
			this.wheeling = true
			this.targetPos += event.deltaY * -1
		} else {
			if (this.preventResizeScroll) {
				this.preventResizeScroll = false
				return
			}

			if (this.wheeling) {
				return
			}

			if (store.isTouch && this.options.touchScrollType === 'scrollTop') {
				this.targetPos = this.horizontalScroll ? -this.containerElement.scrollLeft : -this.containerElement.scrollTop
			} else {
				if (store.isTouch && this.options.touchScrollType === 'transform' && this.options.lockIOSBrowserUI) {
					this.targetPos = this.horizontalScroll ? -document.body.scrollLeft : -document.body.scrollTop
				} else {
					this.targetPos = -window.scrollY
				}
			}

			if (store.isTouch && this.options.touchScrollType !== 'transform') {
				this.currentPos = this.targetPos
			}
		}

		this.clamp()

		if (prevTargetPos !== this.targetPos) {
			E.emit(Events.EXTERNALSCROLL, -this.targetPos)

			if (this.options.customScrollbar) {
				this.scrollbar.show()
			}
		}

		this.options.customScrollbar && this.scrollbar.transform()
	}

	onRAF = () => {
		if (this.testFps && this.options.limitLerpRate) {
			this.time = performance.now() * 0.001
			this.delta = Math.min((this.time - this.startTime) * 60, 1)
			this.startTime = this.time
		}

		if (!this.render) return

		if (Math.abs(this.targetPos - this.currentPos) < 0.5) {
			this.currentPos = this.targetPos
			if (this.scrolling && !this.syncScroll) {
				this.scrolling = false
				this.options.customScrollbar && this.scrollbar.hide()
				this.toggleIframes(true)
				E.emit(Events.SCROLLEND, -this.targetPos)
			}
			if (this.syncScroll) {
				window.scrollTo(0, -this.targetPos)
				this.syncScroll = false
				this.wheeling = false
			}
		} else {
			this.currentPos += (this.targetPos - this.currentPos) * this.ease * this.delta
		}

		const x = this.horizontalScroll ? this.currentPos : 0
		const y = this.horizontalScroll ? 0 : this.currentPos
		this.applyTransform(x, y)

		E.emit(Events.EXTERNALRAF, { targetPos: -this.targetPos, currentPos: -this.currentPos })
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
			this.scrollElements.forEach(el => el.setAttribute('asscroll', ''))

			if (store.isTouch && this.options.touchScrollType === 'transform' && this.options.lockIOSBrowserUI) {
				this.scrollElements.forEach(el => { el.style.position = 'fixed' })
			}
		}

		this.iframes = this.containerElement.querySelectorAll('iframe')

		if (store.isTouch && this.options.touchScrollType !== 'transform') {
			if (this.options.touchScrollType === 'scrollTop') {
				this.containerElement.style.removeProperty('overflow')
			}
			this.maxScroll = -this.containerElement.scrollHeight
			if (reset) {
				this.targetPos = this.currentPos = 0
				this.scrollTo(0, false)
			}
		} else {
			this.firstResize = true
			if (reset) {
				this.targetPos = this.currentPos = 0
				this.applyTransform(0, 0)
			}
			this.onResize()
		}

		if (store.isTouch && this.options.touchScrollType === 'transform' && this.options.lockIOSBrowserUI) {
			store.body.style.overflowY = 'auto'
			if (reset) {
				document.body.scrollTo(0, 0)
			}
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
		E.off(Events.INTERNALSCROLL, this.onScroll)

		this.prevScrollPos = this.targetPos

		if (store.isTouch) {
			if (this.options.touchScrollType === 'scrollTop') {
				this.containerElement.style.overflow = 'hidden'
			} else if (this.options.touchScrollType === 'transform' && this.options.lockIOSBrowserUI) {
				store.body.style.overflowY = 'hidden'
			}
		} else {
			store.body.style.height = '0px'
		}
	}

	clamp() {
		this.targetPos = Math.max(Math.min(this.targetPos, 0), this.maxScroll)
	}

	scrollTo(y, emitEvent = true) {
		this.targetPos = y
		if (store.isTouch && this.options.touchScrollType !== 'transform') {
			if (this.options.touchScrollType === 'scrollTop') {
				if (this.horizontalScroll) {
					this.containerElement.scrollTo(-this.targetPos, 0)
				} else {
					this.containerElement.scrollTo(0, -this.targetPos)
				}
			} else {
				window.scrollTo(0, -this.targetPos)
			}
		}
		this.clamp()
		this.syncScroll = true
		if (emitEvent) E.emit(Events.EXTERNALSCROLL, -this.targetPos)
	}

	onResize = () => {
		if (this.scrollElementsLength > 1) {
			const lastTarget = this.scrollElements[this.scrollElementsLength - 1]
			const compStyle = window.getComputedStyle(lastTarget)
			const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom)
			const bcr = lastTarget.getBoundingClientRect()
			const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom
			this.scrollLength = endPosition + marginOffset - this.currentPos
		} else {
			this.scrollLength = this.horizontalScroll ? this.scrollElements[0].scrollWidth : this.scrollElements[0].scrollHeight
		}

		const windowSize = this.horizontalScroll ? store.window.w : store.window.h
		this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0
		this.clamp()
		if (!this.firstResize) {
			this.preventResizeScroll = true
		}
		if (store.isTouch && this.options.lockIOSBrowserUI) {
			this.containerElement.style.height = this.scrollLength + 'px'
		} else {
			store.body.style.height = this.scrollLength + 'px'
		}
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
		const scrollPos = this.currentPos
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
				window.scrollTo(0, -this.targetPos)
			})

			E.on('keydown', window, e => {
				if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
					window.scrollTo(0, -this.targetPos)
				}
				if (e.key === 'Tab') {
					this.toggleFixedContainer()
				}
			})

			E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer)
			E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent)
		}
	}

	addTouchStyles() {
		const styles = `.asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}`

		const css = document.createElement('style')

		if (css.styleSheet) css.styleSheet.cssText = styles
		else css.appendChild(document.createTextNode(styles))
		document.getElementsByTagName("head")[0].appendChild(css)
	}
}