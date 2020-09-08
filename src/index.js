import Store from './Store'
import Events from './Events'
import Scroll from './Scroll'
import E from './E'

export default class ASScroll {

    constructor( {
        element = '.asscroll-container',
        innerElement = '[data-asscroll]',
        ease = 0.075,
        touchEase = 1,
        customScrollbar = true,
        scrollbarEl = '.asscrollbar',
        scrollbarHandleEl = '.asscrollbar__handle',
        scrollbarStyles = true,
        disableNativeScrollbar = true,
        disableOnTouch = false,
        disableRaf = false,
        disableResize = false
    } = {} ) {

        E.bindAll(this, ['enable', 'disable', 'on', 'scrollTo', 'onRaf', 'onResize'])

        this.Events = new Events({
            disableRaf,
            disableResize
        })

        this.Scroll = new Scroll({
            element,
            innerElement,
            ease,
            touchEase,
            customScrollbar,
            scrollbarEl,
            scrollbarHandleEl,
            scrollbarStyles,
            disableNativeScrollbar,
            disableOnTouch
        })

    }

    enable(...args) {
        this.Scroll.enable(...args)
    }

    disable(...args) {
        this.Scroll.disable(...args)
    }

    onRaf() {
        this.Events.onRaf()
    }

    onResize(...args) {
        this.Events.onResize(...args)
    }

    on( eventName, cb ) {

        if( eventName === 'scroll' ) {
            E.on(Store.events.COMBOSCROLL, cb)
        }

        if( eventName === 'raf' ) {
            E.on(Store.events.EXTERNALRAF, cb)
        }

    }

    off( eventName, cb ) {

        if( eventName === 'scroll' ) {
            E.off(Store.events.COMBOSCROLL, cb)
        }

        if( eventName === 'raf' ) {
            E.off(Store.events.EXTERNALRAF, cb)
        }

    }

    scrollTo( y, emitEvent = true ) {
        this.Scroll.scrollTo(-y, emitEvent)
    }

    get scrollPos() {
        return this.Scroll.scrollPos
    }

    get smoothScrollPos() {
        return this.Scroll.smoothScrollPos
    }

}