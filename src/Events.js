import debounce from 'lodash.debounce'

import Store from './Store'
import E from './E'

export default class Events {

    constructor( options = {} ) {

        this.options = options

        E.bindAll(this, ['onRaf'])

        Store.events = {
            RAF: 'RAF',
            EXTERNALRAF: 'ExternalRAF',
            SCROLL: 'Scroll',
            WHEEL: 'Wheel',
            COMBOSCROLL: 'ComboScroll',
            RESIZE: 'Resize',
            TOUCHMOUSE: 'TouchMouse',
        }
        
        this.addEvents()

    }

    addEvents() {

        if( !this.options.disableRaf ) {
            requestAnimationFrame(this.onRaf)
        }

        if( !this.options.disableResize ) {
            window.addEventListener('resize', debounce( () => this.onResize, 150 ))
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
        window.addEventListener('wheel', e => { E.emit(Store.events.WHEEL, { event: e }) }, { passive: false })
        window.addEventListener('scroll', e => { E.emit(Store.events.SCROLL, { event: e }) }, { passive: true })
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