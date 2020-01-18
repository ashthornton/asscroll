import bindAll from './bindAll'

export default class Scrollbar {

    constructor( smoothScroll ) {

        bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp'])

        this.smoothScroll = smoothScroll
        this.el = document.getElementById('scrollbar')
        this.bar = document.getElementById('scrollbar__bar')
        this.addEvents()
    }

    addEvents() {
        E.on('mousedown', this.bar, this.onMouseDown)
        window.addEventListener('mousemove', this.onMouseMove)
        window.addEventListener('mouseup', this.onMouseUp)
    }

    onResize() {
        this.scale = (-this.smoothScroll.maxScroll + Store.windowSize.h) / Store.windowSize.h
        if( this.scale <= 1 ) {
            this.bar.style.height = 0
            return
        }
        this.barHeight = Store.windowSize.h / this.scale
        this.barHalfHeight = this.barHeight / 2
        this.bar.style.height = `${this.barHeight}px`
    }

    transform() {
        this.bar.style.transform = `translate3d(0, ${ -this.smoothScroll.scrollPos / this.scale }px, 0)`
    }

    toggle() {
        this.el.classList.toggle('show')
    }

    onMouseMove(e) {
        if( !this.mouseDown ) return
        this.smoothScroll.scrollPos = ( -e.clientY + this.barHalfHeight ) * this.scale
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
        E.off('mousedown', this.bar, this.onMouseDown)
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('mouseup', this.onMouseUp)
    }

}