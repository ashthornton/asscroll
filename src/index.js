import Store from './Store'
import Events from './Events'
import Scroll from './Scroll'
import E from './E'

export default class ASScroll {

    constructor( {
        element = '.asscroll-container',
        innerElement = '[data-scroll]',
        ease = 0.075,
        customScrollbar = false,
        scrollbarEl = '.asscrollbar',
        scrollbarHandleEl = '.asscrollbar__handle',
        scrollbarStyles = true,
        disableNativeScrollbar = true,
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
            customScrollbar,
            scrollbarEl,
            scrollbarHandleEl,
            scrollbarStyles,
            disableNativeScrollbar
        })

    }

    enable(...args) {
        this.Scroll.enable(...args)
    }

    disable() {
        this.Scroll.disable()
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

    scrollTo( y ) {
        this.Scroll.scrollTo(-y)
    }

    get scrollPos() {
        return this.Scroll.scrollPos
    }

    get smoothScrollPos() {
        return this.Scroll.smoothScrollPos
    }

}