import Store from './Store'
import Events from './Events'
import Scroll from './Scroll'
import E from './E'

/**
 * Ash's Smooth Scroll 🍑
 * @export
 * @class ASScroll
 */
export default class ASScroll {
    /**
     * Creates an ASScroll instance
     * @param {Object} parameters
     * @param {string} [parameters.element='.asscroll-container'] The selector string for the outer container element
     * @param {string} [parameters.innerElement='[data-asscroll'] The selector string for the inner element(s)
     * @param {number} [parameters.ease=0.075] The ease amount for the transform lerp
     * @param {number} [parameters.touchEase=1] The ease amount for the transform lerp on touch devices
     * @param {boolean} [parameters.customScrollbar=true] Toggle the custom scrollbar
     * @param {string} [parameters.scrollbarEl='.asscrollbar'] The selector string for the custom scrollbar element
     * @param {string} [parameters.scrollbarHandleEl='.asscrollbar__handle'] The selector string for the custom scrollbar handle element
     * @param {boolean} [parameters.scrollbarStyles=true] Include the scrollbar CSS via Javascript
     * @param {boolean} [parameters.disableNativeScrollbar=true] Disable the native browser scrollbar
     * @param {boolean} [parameters.disableOnTouch=true] Disable the transform on touch devices
     * @param {boolean} [parameters.disableRaf=false] Disable internal requestAnimationFrame loop in order to use an external one
     * @param {boolean} [parameters.disableResize=false] Disable internal resize event on the window in order to use an external one
     * @param {boolean} [parameters.limitLerpRate=true] Match lerp speed on >60Hz displays to that of a 60Hz display
     * @param {string} [parameters.blockScrollClass='.asscroll-block'] The class to add to elements that should block ASScroll when hovered
     */
    constructor({
        element = '.asscroll-container',
        innerElement = '[data-asscroll]',
        ease = 0.075,
        touchEase = 1,
        customScrollbar = true,
        scrollbarEl = '.asscrollbar',
        scrollbarHandleEl = '.asscrollbar__handle',
        scrollbarStyles = true,
        disableNativeScrollbar = true,
        disableOnTouch = true,
        disableRaf = false,
        disableResize = false,
        limitLerpRate = true,
        blockScrollClass = '.asscroll-block'
    } = {}) {
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
            disableOnTouch,
            limitLerpRate,
            blockScrollClass
        })

    }

    /**
     * Enable ASScroll.
     * @param {Object} parameters
     * @param {boolean} [parameters.restore = false] Restore the scroll position to where it was when disable() was called
     * @param {boolean} [parameters.reset = false] Reset the scroll position to 0
     * @param {boolean|NodeList|HTMLElement} [parameters.newTargets = false] Specify the new element(s) that should be transformed
     * @param {boolean} [parameters.horizontalScroll = false] Toggle horizontal scrolling
     */
    enable(parameters) {
        if (typeof parameters !== 'object') {
            console.warn('Please pass an object with your parameters. Since 1.8')
        }
        this.Scroll.enable(parameters)
    }

    /**
     * Disable ASScroll.
     * @param {Object} parameters
     * @param {boolean} [parameters.inputOnly = false] Only disable the ability to manually scroll (still allow transforms)
     */
    disable(parameters) {
        if (typeof parameters !== 'object') {
            console.warn('Please pass an object with your parameters. Since 1.8')
        }
        this.Scroll.disable(parameters)
    }

    /**
     * Call the internal animation frame request callback.
     */
    onRaf() {
        this.Events.onRaf()
    }

    /**
     * Call the internal resize callback.
     * @param {Object} parameters
     * @param {number} parameters.width Window width
     * @param {number} parameters.height Window height
     */
    onResize(parameters) {
        this.Events.onResize(parameters)
    }

    /**
     * Add an event listener.
     * @param {string} eventName Name of the event you wish to listen for
     * @param {*} cb Callback function that should be executed when the event fires
     */
    on(eventName, cb) {
        if (typeof cb !== 'function') {
            console.error('Function not provided as second parameter')
            return
        }

        if (eventName === 'scroll') {
            E.on(Store.events.COMBOSCROLL, cb)
            return
        }

        if (eventName === 'raf') {
            E.on(Store.events.EXTERNALRAF, cb)
            return
        }

        console.warn(`"${eventName}" is not a valid event`)
    }

    off(eventName, cb) {
        if (typeof cb !== 'function') {
            console.error('Function not provided as second parameter')
            return
        }

        if (eventName === 'scroll') {
            E.off(Store.events.COMBOSCROLL, cb)
            return
        }

        if (eventName === 'raf') {
            E.off(Store.events.EXTERNALRAF, cb)
            return
        }

        console.warn(`"${eventName}" is not a valid event`)
    }

    /**
     * Scroll to a given position on the page
     * @param {number} scrollPos Scroll position
     * @param {boolean} [emitEvent=true] Whether to emit the scroll events or not
     */
    scrollTo(scrollPos, emitEvent = true) {
        this.Scroll.scrollTo(-scrollPos, emitEvent)
    }

    /**
     * Returns the target scroll position
     * @return {number}
     */
    get scrollPos() {
        return this.Scroll.scrollPos
    }

    /**
     * Returns the current scroll position
     * @return {number}
     */
    get smoothScrollPos() {
        return this.Scroll.smoothScrollPos
    }

    /**
     * Sets the scroll position without lerping to it
     * @param {number} scrollPos The desired scroll position
     */
    set scrollPos(scrollPos) {
        this.Scroll.scrollPos = this.Scroll.smoothScrollPos = -scrollPos
    }

    /**
     * Returns the maximum scroll height of the page
     * @return {number}
     */
    get maxScroll() {
        return this.Scroll.maxScroll
    }
}