import Store from './Store'
import Events from './Events'
import Scroll from './Scroll'
import E from './E'

export default class ASScroll {

    constructor( {
        element = '#scroll-container',
        ease = 0.1,
        customScrollbar = false,
        scrollbarEl = '#scrollbar',
        scrollbarHandleEl = '#scrollbar__handle',
        disableRaf = false,
        disableResize = false
    } = {} ) {

        this.Events = new Events({
            disableRaf,
            disableResize
        })

        this.Scroll = new Scroll({
            element,
            ease,
            customScrollbar,
            scrollbarEl,
            scrollbarHandleEl
        })

    }

    enable() {
        this.Scroll.enable()
    }

    disable() {
        this.Scroll.disable()
    }

    onRaf() {
        this.Events.onRaf()
    }

    onResize() {
        this.Events.onResize()
    }

    on( eventName, cb ) {

        if( eventName === 'scroll' ) {
            E.on(Store.events.COMBOSCROLL, cb)
        }

        if( eventName === 'raf' ) {
            E.on(Store.events.EXTERNALRAF, cb)
        }

    }

}