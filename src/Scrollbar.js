import Store from './Store'
import E from './E'

export default class Scrollbar {

    constructor( smoothScroll ) {

        E.bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp'])

        this.smoothScroll = smoothScroll
        this.el = document.querySelector( this.smoothScroll.options.scrollbarEl )
        this.handle = document.querySelector( this.smoothScroll.options.scrollbarHandleEl )
        this.addStyles()
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

    addStyles() {
        Store.html.style.scrollbarWidth = 'none'
        Store.body.style['-ms-overflow-style'] = 'none'
        const css = document.createElement('style')
        css.type = 'text/css';

        const styles = `
        html{scrollbar-width:none;}
        body{-ms-overflow-style:none;}
        body::-webkit-scrollbar{width:0;height:0;}
        ${this.smoothScroll.options.scrollbarEl} {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ${this.smoothScroll.options.scrollbarEl} {display: none;}${this.smoothScroll.options.scrollbarEl} > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}${this.smoothScroll.options.scrollbarEl} > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}${this.smoothScroll.options.scrollbarEl} > div > div:hover {opacity: 0.9;}${this.smoothScroll.options.scrollbarEl}:hover > div, ${this.smoothScroll.options.scrollbarEl}.show > div, ${this.smoothScroll.options.scrollbarEl}.active > div {visibility: visible;}${this.smoothScroll.options.scrollbarEl}.active > div > div {opacity: 0.9;}
        `

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