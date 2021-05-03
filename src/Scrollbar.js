import store from './store'
import E from './E'
import Events from './Events'

export default class Scrollbar {
	constructor(controller) {
		this.controller = controller
		this.addHTML()
		this.el = document.querySelector(this.controller.options.scrollbarEl)
		this.handle = document.querySelector(this.controller.options.scrollbarHandleEl)
		this.addStyles()
		this.addEvents()
	}

	addEvents() {
		E.on('mousedown', this.handle, this.onMouseDown)
		E.on('mousemove', window, this.onMouseMove)
		E.on('mouseup', window, this.onMouseUp)
	}

	onResize() {
		this.scale = (-this.controller.maxScroll + store.windowSize.h) / store.windowSize.h
		if (this.scale <= 1) {
			this.handle.style.height = 0
			return
		}
		this.trueSize = store.windowSize.h / this.scale
		this.handleHeight = Math.max(this.trueSize, 40)
		this.handle.style.height = `${this.handleHeight}px`
	}

	transform() {
		const y = -this.controller.targetScrollPos / -this.controller.maxScroll * (store.windowSize.h - this.handleHeight)
		this.handle.style.transform = `translate3d(0, ${y}px, 0)`
	}

	show() {
		this.el.classList.add('show')
	}

	hide() {
		this.el.classList.remove('show')
	}

	onMouseMove = (e) => {
		if (!this.mouseDown) return
		const totalHeight = store.windowSize.h + (this.trueSize - this.handleHeight)
		this.controller.targetScrollPos = (e.clientY / totalHeight * this.controller.maxScroll)
		this.controller.clamp()
		this.controller.syncScroll = true
		E.emit(Events.EXTERNALSCROLL, this.controller.targetScrollPos)
	}

	onMouseDown = () => {
		this.mouseDown = true
		store.body.style.userSelect = 'none'
		store.body.style['-ms-user-select'] = 'none'
		this.el.classList.add('active')
	}

	onMouseUp = () => {
		this.mouseDown = false
		store.body.style.removeProperty('user-select')
		store.body.style.removeProperty('-ms-user-select')
		this.el.classList.remove('active')
	}

	addHTML() {
		if (document.querySelector(this.controller.options.scrollbarEl)) return
		const div = document.createElement('div')
		div.classList.add(this.controller.options.scrollbarEl.substring(1))
		div.innerHTML = `<div class="${this.controller.options.scrollbarHandleEl.substring(1)}"><div></div></div>`
		document.body.appendChild(div)
	}

	addStyles() {
		if (!this.controller.options.disableNativeScrollbar && !this.controller.options.scrollbarStyles) return

		let styles = ''

		if (this.controller.options.disableNativeScrollbar) {
			styles += `html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}`
		}

		if (this.controller.options.scrollbarStyles) {
			styles += `${this.controller.options.scrollbarEl} {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ${this.controller.options.scrollbarEl} {display: none;}${this.controller.options.scrollbarEl} > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}${this.controller.options.scrollbarEl} > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}${this.controller.options.scrollbarEl} > div > div:hover {opacity: 0.9;}${this.controller.options.scrollbarEl}:hover > div, ${this.controller.options.scrollbarEl}.show > div, ${this.controller.options.scrollbarEl}.active > div {visibility: visible;}${this.controller.options.scrollbarEl}.active > div > div {opacity: 0.9;}`
		}

		const css = document.createElement('style')
		css.type = 'text/css'

		if (css.styleSheet) css.styleSheet.cssText = styles
		else css.appendChild(document.createTextNode(styles))
		document.getElementsByTagName("head")[0].appendChild(css)
	}

	destroy() {
		E.off('mousedown', this.handle, this.onMouseDown)
		window.removeEventListener('mousemove', this.onMouseMove)
		window.removeEventListener('mouseup', this.onMouseUp)
	}
}