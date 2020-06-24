import Store from './Store'
import E from './E'
import Scrollbar from './Scrollbar'
import normalizeWheel from './normalizeWheel'

export default class Scroll {

    constructor( options = {} ) {

        this.options = options
        this.scrollbarCheck = this.options.customScrollbar

        E.bindAll(this, ['onScroll', 'onRAF', 'onResize'])

        this.scrollContainer = document.querySelector( this.options.element )
        this.scrollTargets = this.scrollContainer.querySelectorAll( this.options.innerElement ) || [this.scrollContainer.firstElementChild]
        this.scrollTargetsLength = this.scrollTargets.length
        this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0
        this.scrolling = false
        this.syncScroll = false
        this.deltaY = 0
        this.wheeling = false
        this.ease = Store.isTouch ? this.options.touchEase : this.options.ease

        if( !Store.isTouch || !this.options.disableOnTouch ) {
            if( Store.isTouch ) this.options.customScrollbar = false
            this.smoothSetup()
        } else {
            this.options.customScrollbar = false
        }

        // enable smooth scroll if mouse is detected
        E.on(Store.events.TOUCHMOUSE, () => {
            if (!this.options.disableOnTouch) return
            this.options.customScrollbar = this.scrollbarCheck
            this.smoothSetup()
            this.onResize()
        })

    }

    smoothSetup() {

        Object.assign(this.scrollContainer.style, {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            contain: 'content'
        })

        if( this.options.customScrollbar ) {
            this.scrollbar = new Scrollbar(this)
        }

        E.on(Store.events.RAF, this.onRAF)
        E.on(Store.events.RESIZE, this.onResize)

    }

    onScroll({ event }) {

        if( !this.scrolling ) {
            this.options.customScrollbar && this.scrollbar.show()
            this.scrolling = true
        }

        if( !Store.isTouch && event.type === 'wheel' ) {

            event.preventDefault()

            this.deltaY = normalizeWheel(event).pixelY
            this.wheeling = true
            this.syncScroll = true
            
            return

        } else {
            this.scrollPos = -window.scrollY
            if( Store.isTouch && this.options.disableOnTouch ) {
                this.smoothScrollPos = this.scrollPos
            }
            E.emit(Store.events.COMBOSCROLL, this.scrollPos)
        }

    }

    onRAF() {

        if( !this.enabled ) return

        if( this.wheeling ) {
            this.scrollPos += this.deltaY * -1
            this.wheeling = false
            E.emit(Store.events.COMBOSCROLL, this.scrollPos)
        }
        
        this.clamp()

        if( Math.abs( this.scrollPos - this.smoothScrollPos ) < 0.5 ) {
            this.smoothScrollPos = this.scrollPos
            if( this.syncScroll ) {
                window.scrollTo(0, -this.scrollPos)
                this.syncScroll = false
            }
            if( this.scrolling ) {
                this.options.customScrollbar && this.scrollbar.hide()
                this.scrolling = false
            }
        } else {
            this.smoothScrollPos += ( this.scrollPos - this.smoothScrollPos ) * this.ease
        }

        const x = this.horizontalScroll ? this.smoothScrollPos : 0
        const y = this.horizontalScroll ? 0 : this.smoothScrollPos
        this.applyTransform(x, y)

        this.options.customScrollbar && this.scrollbar.transform()

        E.emit(Store.events.EXTERNALRAF, { scrollPos: this.scrollPos, smoothScrollPos: this.smoothScrollPos })

    }

    applyTransform(x, y) {
        for (let i = 0; i < this.scrollTargetsLength; i++) {
            this.scrollTargets[i].style.transform = `translate3d(${ x }px, ${ y }px, 0px)`
        }
    }

    enable( restore = false, reset = false, newTargets = false, horizontalScroll = false ) {

        if( this.enabled ) return
        this.enabled = true

        this.horizontalScroll = horizontalScroll

        this.scrollTargets = newTargets.length ? newTargets : [newTargets]
        this.scrollTargetsLength = this.scrollTargets.length

        if( Store.isTouch && this.options.disableOnTouch ) {
            Store.body.style.removeProperty('height')
            if( reset ) {
                window.scrollTo(0, 0)
            }
        } else {
            if( reset ) {
                this.scrollPos = this.smoothScrollPos = 0
                this.applyTransform(0, 0)
            }
            this.onResize()
        }

        if( restore ) {
            this.scrollPos = this.prevScrollPos
            window.scrollTo( 0, -this.prevScrollPos )
        }
        
        E.on(Store.events.WHEEL, this.onScroll)
        E.on(Store.events.SCROLL, this.onScroll)

    }

    disable() {

        if( !this.enabled ) return
        this.enabled = false

        E.off(Store.events.WHEEL, this.onScroll)
        E.off(Store.events.SCROLL, this.onScroll)

        this.prevScrollPos = this.scrollPos
        Store.body.style.height = '0px'

    }

    clamp() {
        this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll)
    }

    scrollTo( y, emitEvent = true ) {
        this.scrollPos = y
        this.clamp()
        this.syncScroll = true
        if (emitEvent) E.emit(Store.events.COMBOSCROLL, this.scrollPos)
    }

    onResize() {
        if (this.scrollTargetsLength > 1) {
            const lastTarget = this.scrollTargets[this.scrollTargetsLength - 1]
            const compStyle = window.getComputedStyle(lastTarget)
            const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom)
            const bcr = lastTarget.getBoundingClientRect()
            const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom
            this.scrollLength = endPosition + marginOffset - this.smoothScrollPos
        } else {
            const bcr = this.scrollTargets[0].getBoundingClientRect()
            this.scrollLength = this.horizontalScroll ? bcr.width : bcr.height
        }
        
        const windowSize = this.horizontalScroll ? Store.windowSize.w : Store.windowSize.h
        this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0
        Store.body.style.height = this.scrollLength + 'px'
        this.options.customScrollbar && this.scrollbar.onResize()
    }

}