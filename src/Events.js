import debounce from './utils/debounce'

import store from './store'
import E from '@unseenco/e'

export default class Events {
	static INTERNALRAF = 'raf:internal'
	static EXTERNALRAF = 'raf:external'
	static WHEEL = 'wheel'
	static INTERNALSCROLL = 'scroll:internal'
	static EXTERNALSCROLL = 'scroll:external'
	static RESIZE = 'resize'
	static MOUSEDETECTED = 'mouseDetected'
	static SCROLLEND = 'scrollEnd'

	constructor(options = {}) {
		this.options = options
		this.addEvents()
	}

	addEvents() {
		if (!this.options.disableRaf) {
			requestAnimationFrame(this.onRaf)
		}

		if (!this.options.disableResize) {
			E.on('resize', window, debounce(() => { this.onResize() }, 150))
		}

		this.onScroll()

		if ('ontouchstart' in document.documentElement) {
			store.isTouch = true
			// touch has been detected in the browser, but let's check for a mouse input
			this.detectMouse()
		}
	}

	onRaf = () => {
		E.emit(Events.INTERNALRAF)
		if (this.options.disableRaf) return
		requestAnimationFrame(this.onRaf)
	}

	onScroll() {
		E.on('wheel', window, e => { E.emit(Events.WHEEL, { event: e }) }, { passive: false })
		E.on('scroll', window, e => { E.emit(Events.INTERNALSCROLL, { event: e }) }, { passive: true })
	}

	onResize({ width, height } = {}) {
		store.window.w = width || window.innerWidth
		store.window.h = height || window.innerHeight
		E.emit(Events.RESIZE)
	}

	detectMouse() {
		window.addEventListener('mousemove', function detectMouse(e) {
			if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
				// mouse has moved on touch screen, not just a tap firing mousemove
				store.isTouch = false
				E.emit(Events.MOUSEDETECTED)
				window.removeEventListener('mousemove', detectMouse)
			}
		})
	}
}