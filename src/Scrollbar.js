import store from './store'
import E from '@unseenco/e'
import Events from './Events'

export default class Scrollbar {
	constructor(controller) {
		this.controller = controller
		this.addHTML()
		this.el = document.querySelector(this.controller.options.scrollbarEl)
		this.handle = document.querySelector(this.controller.options.scrollbarHandleEl)
		this.position = 0
		this.mousePos = 0
		this.prevMousePos = 0
		this.addStyles()
		this.addEvents()
	}

	transform() {
		let y
		if (this.mouseDown) {
			y = this.position
		} else {
			y = -this.controller.targetPos / -this.controller.maxScroll * (store.window.h - this.handleHeight)
			this.position = y
		}
		this.handle.style.transform = `translate3d(0, ${y}px, 0)`
	}

	show() {
		this.el.classList.add('show')
	}

	hide() {
		this.el.classList.remove('show')
	}

	addEvents() {
		E.on('mousedown', this.handle, this.onMouseDown)
		E.on('mousemove', window, this.onMouseMove)
		E.on('mouseup', window, this.onMouseUp)
	}

	onResize() {
		this.scale = (-this.controller.maxScroll + store.window.h) / store.window.h
		if (this.scale <= 1) {
			this.handle.style.height = 0
			return
		}
		this.trueSize = store.window.h / this.scale
		this.handleHeight = Math.max(this.trueSize, 40)
		this.handle.style.height = `${this.handleHeight}px`
		this.maxY = store.window.h - this.handleHeight
	}

	onMouseMove = (e) => {
		if (!this.mouseDown) return

		this.mousePos = e.clientY
		this.position -= this.prevMousePos - this.mousePos
		this.position = Math.min(Math.max(this.position, 0), this.maxY)
		this.prevMousePos = this.mousePos

		this.controller.targetPos = (this.position / this.maxY * this.controller.maxScroll)
		this.controller.clamp()
		this.controller.syncScroll = true
		this.transform()
		E.emit(Events.EXTERNALSCROLL, -this.controller.targetPos)
	}

	onMouseDown = (e) => {
		this.mousePos = this.prevMousePos = e.clientY
		this.mouseDown = true
		store.body.style.userSelect = 'none'
		this.el.classList.add('active')
	}

	onMouseUp = () => {
		this.mouseDown = false
		store.body.style.removeProperty('user-select')
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
			styles += `${this.controller.options.scrollbarEl} {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ${this.controller.options.scrollbarEl} {display:none;}${this.controller.options.scrollbarEl} > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}${this.controller.options.scrollbarEl} > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}${this.controller.options.scrollbarEl} > div > div:hover {opacity:0.9;}${this.controller.options.scrollbarEl}:hover > div, ${this.controller.options.scrollbarEl}.show > div, ${this.controller.options.scrollbarEl}.active > div {visibility:visible;}${this.controller.options.scrollbarEl}.active > div > div {opacity:0.9;}`
		}

		const css = document.createElement('style')

		if (css.styleSheet) css.styleSheet.cssText = styles
		else css.appendChild(document.createTextNode(styles))
		document.getElementsByTagName("head")[0].appendChild(css)
	}

	destroy() {
		E.off('mousedown', this.handle, this.onMouseDown)
		E.off('mousemove', window, this.onMouseMove)
		E.off('mouseup', window, this.onMouseUp)
	}
}