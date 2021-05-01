import debounce from './utils/debounce'

import store from './store'
import E from './E'

export default class Events {
    constructor(options = {}) {
        this.options = options

        E.bindAll(this, ['onRaf'])

        store.eventNames = {
            RAF: 1,
            EXTERNALRAF: 2,
            SCROLL: 3,
            WHEEL: 4,
            COMBOSCROLL: 5,
            RESIZE: 6,
            TOUCHMOUSE: 7,
            SCROLLEND: 8
        }

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

    onRaf() {
        E.emit(store.eventNames.RAF)
        if( this.options.disableRaf ) return
        requestAnimationFrame(this.onRaf)
    }

    onScroll() {
        E.on('wheel', window, e => { E.emit(store.eventNames.WHEEL, { event: e }) }, { passive: false })
        E.on('scroll', window, e => { E.emit(store.eventNames.SCROLL, { event: e }) }, { passive: true })
    }

    onResize( windowWidth, windowHeight ) {
        store.windowSize.w = windowWidth || window.innerWidth
        store.windowSize.h = windowHeight || window.innerHeight
        E.emit(store.eventNames.RESIZE)
    }

    detectMouse() {
        window.addEventListener('mousemove', function detectMouse(e) {
            if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
                // mouse has moved on touch screen, not just a tap firing mousemove
                store.isTouch = false
                E.emit(store.events.TOUCHMOUSE)
                window.removeEventListener('mousemove', detectMouse)
            }
        })
    }
}