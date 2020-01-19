import Store from './Store'
import E from './E'

export default class Scrollbar {

    constructor( smoothScroll ) {

        E.bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp'])

        this.smoothScroll = smoothScroll
        this.el = document.querySelector( this.smoothScroll.options.scrollbarEl )
        this.handle = document.querySelector( this.smoothScroll.options.scrollbarHandleEl )
        this.addEvents()
    }

    addEvents() {
        E.on('mousedown', this.handle, this.onMouseDown)
        window.addEventListener('mousemove', this.onMouseMove)
        window.addEventListener('mouseup', this.onMouseUp)
    }

    onResize() {
        this.scale = (-this.smoothScroll.maxScroll + Store.windowSize.h) / Store.windowSize.h
        if( this.scale <= 1 ) {
            this.handle.style.height = 0
            return
        }
        this.handleHeight = Store.windowSize.h / this.scale
        this.handleHalfHeight = this.handleHeight / 2
        this.handle.style.height = `${this.handleHeight}px`
    }

    transform() {
        this.handle.style.transform = `translate3d(0, ${ -this.smoothScroll.scrollPos / this.scale }px, 0)`
    }

    toggle() {
        this.el.classList.toggle('show')
    }

    onMouseMove(e) {
        if( !this.mouseDown ) return
        this.smoothScroll.scrollPos = ( -e.clientY + this.handleHalfHeight ) * this.scale
        this.smoothScroll.clamp()
    }

    onMouseDown() {
        this.mouseDown = true
        Store.body.style.userSelect = 'none'
        Store.body.style['-ms-user-select'] = 'none'
        this.el.classList.add('active')
    }

    onMouseUp() {
        this.mouseDown = false
        Store.body.style.removeProperty('user-select')
        Store.body.style.removeProperty('-ms-user-select')
        this.el.classList.remove('active')
    }

    destroy() {
        E.off('mousedown', this.handle, this.onMouseDown)
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('mouseup', this.onMouseUp)
    }

}