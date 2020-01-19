import GlobalEvents from './GlobalEvents'
import Scroll from './Scroll'

export default class ASScroll {

    constructor( {
        element = '#scroll-container',
        ease = 0.1,
        customScrollbar = false,
        scrollbarEl = '#scrollbar',
        scrollbarBarEl = '#scrollbar__bar',
        disableRaf = false,
        disableResize = false
    } = {} ) {

        this.GlobalEvents = new GlobalEvents({
            disableRaf,
            disableResize
        })

        this.Scroll = new Scroll({
            element,
            ease,
            customScrollbar,
            scrollbarEl,
            scrollbarBarEl
        })

    }

    enable() {
        this.Scroll.enable()
    }

    disable() {
        this.Scroll.disable()
    }

    onRaf() {
        this.GlobalEvents.onRaf()
    }

    onResize() {
        this.GlobalEvents.onResize()
    }

}