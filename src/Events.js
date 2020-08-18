import debounce from 'lodash.debounce'

import Store from './Store'
import E from './E'

export default class Events {

    constructor( options = {} ) {

        this.options = options

        E.bindAll(this, ['onRaf'])

        Store.events = {
            RAF: 1,
            EXTERNALRAF: 2,
            SCROLL: 3,
            WHEEL: 4,
            COMBOSCROLL: 5,
            RESIZE: 6,
            TOUCHMOUSE: 7,
        }
        
        this.addEvents()

    }

    addEvents() {

        if( !this.options.disableRaf ) {
            requestAnimationFrame(this.onRaf)
        }

        if( !this.options.disableResize ) {
            E.on('resize', window, debounce( () => { this.onResize() }, 150 ))
        }

        this.onScroll()

        if( 'ontouchstart' in document.documentElement ) {
            Store.isTouch = true
            // touch has been detected in the browser, but let's check for a mouse input
            this.detectMouse()
        }

    }

    onRaf() {
        E.emit(Store.events.RAF)
        if( this.options.disableRaf ) return
        requestAnimationFrame(this.onRaf)
    }

    onScroll() {
        E.on('wheel', window, e => { E.emit(Store.events.WHEEL, { event: e }) }, { passive: false })
        E.on('scroll', window, e => { E.emit(Store.events.SCROLL, { event: e }) }, { passive: true })
    }

    onResize( windowWidth, windowHeight ) {
        Store.windowSize.w = windowWidth || window.innerWidth
        Store.windowSize.h = windowHeight || window.innerHeight
        E.emit(Store.events.RESIZE)
    }

    detectMouse() {
        window.addEventListener('mousemove', function detectMouse(e) {
            if( Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0 ) {
                // mouse has moved on touch screen, not just a tap firing mousemove
                Store.isTouch = false
                E.emit(Store.events.TOUCHMOUSE)
                window.removeEventListener('mousemove', detectMouse)
            }
        })
    }

}