import debounce from 'lodash.debounce'

import Store from './Store'
import E from './E'

export default class GlobalEvents {

    constructor() {

        E.bindAll(this, ['onRaf'])

        Store.events = {
            RAF: 'GRAF',
            SCROLL: 'GScroll',
            WHEEL: 'GWheel',
            RESIZE: 'GResize',
            TOUCHDETECTED: 'TouchDetected',
        }

        this.mousePos = {
            x: 0,
            y: 0
        }

        this.prevMousePos = {
            x: 0,
            y: 0
        }

        this.onScroll()
        this.onResize()
        this.addMouseEvents()
        this.onFirstTouch()
        requestAnimationFrame(this.onRaf)

    }

    onRaf(time) {
        E.emit(Store.events.RAF, time)
        requestAnimationFrame(this.onRaf)
    }

    onScroll() {
        window.addEventListener('wheel', e => { E.emit(Store.events.WHEEL, { event: e }) }, { passive: false })
        window.addEventListener('scroll', e => { E.emit(Store.events.SCROLL, { event: e }) }, { passive: true })
    }

    onResize() {
        window.addEventListener('resize', debounce( () => {
            Store.windowSize.w = window.innerWidth
            Store.windowSize.h = window.innerHeight
            E.emit(Store.events.RESIZE)
        }, 150))
    }

    onFirstTouch() {
        const _this = this
        window.addEventListener('touchstart', function onFirstTouch() {
            document.body.classList.add('is-touch')
            Store.isTouch = true
            E.emit(Store.events.TOUCHDETECTED)
            // we only need to know once that a human touched the screen, so we can stop listening now
            window.removeEventListener('touchstart', onFirstTouch, false)
            _this.addTouchEvents()
        }, false)
    }

}