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
            TOUCHDETECTED: 'TouchDetected',
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
        this.onFirstTouch()

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

    onFirstTouch() {
        window.addEventListener('touchstart', function onFirstTouch() {
            Store.isTouch = true
            E.emit(Store.events.TOUCHDETECTED)
            // we only need to know once that a human touched the screen, so we can stop listening now
            window.removeEventListener('touchstart', onFirstTouch, false)
        }, false)
    }

}