import Store from './Store'
import E from './E'
import Scrollbar from './Scrollbar'

export default class Scroll {

    constructor( options = {} ) {

        this.options = options

        E.bindAll(this, ['onScroll', 'onRAF', 'onResize'])

        this.scrollTarget = document.querySelector( this.options.element )
        this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0
        this.scrolling = false
        this.syncScroll = false
        this.ffmultiplier = 1
        if( navigator.userAgent.indexOf('Firefox') > -1 ) {
            this.ffmultiplier = 40
        }

        Object.assign(this.scrollTarget.style, {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%'
        })

        if( this.options.customScrollbar ) {
            this.scrollbar = new Scrollbar(this)
        }

        E.on(Store.events.RAF, this.onRAF)
        E.on(Store.events.RESIZE, this.onResize)

        // disable smooth scroll if touch is detected
        E.on(Store.events.TOUCHDETECTED, () => {
            document.body.style.removeProperty('height')
            this.scrollTarget.style.removeProperty('transform')
            E.off(Store.events.RESIZE, this.onResize)
            E.off(Store.events.RAF, this.onRAF)
            this.smoothScrollPos = 0
        })
    }

    onScroll({ event }) {

        if( !this.scrolling ) {
            this.options.customScrollbar && this.scrollbar.toggle()
            this.scrolling = true
        }

        if(event.type === 'wheel' ) {

            event.preventDefault()

            this.scrollPos += event.deltaY * this.ffmultiplier * -1
            this.clamp()
            this.syncScroll = true
            E.emit('ComboScroll', this.scrollPos)

            return

        } else {
            this.scrollPos = -window.scrollY
            E.emit('ComboScroll', this.scrollPos)
        }  

    }

    onRAF() {

        if( !this.enabled ) return

        if( Math.abs( this.scrollPos - this.smoothScrollPos ) < 0.5 ) {
            this.smoothScrollPos = this.scrollPos
            if( this.syncScroll ) {
                window.scrollTo(0, -this.scrollPos)
                this.syncScroll = false
            }
            if( this.scrolling ) {
                this.options.customScrollbar && this.scrollbar.toggle()
                this.scrolling = false
            }
        } else {
            this.smoothScrollPos += ( this.scrollPos - this.smoothScrollPos ) * this.options.ease
        }

        this.scrollTarget.style.transform = `translate3d(0px, ${ this.smoothScrollPos }px, 0px)`

        this.options.customScrollbar && this.scrollbar.transform()

        E.emit(Store.events.EXTERNALRAF, { scrollPos: this.scrollPos, smoothScrollPos: this.smoothScrollPos })

    }

    disable() {

        if( !this.enabled ) return
        this.enabled = false

        if( !Store.isTouch ) {
            E.off(Store.events.WHEEL, this.onScroll)
            E.off(Store.events.SCROLL, this.onScroll)
        }

        this.prevScrollPos = this.scrollPos
        Store.body.style.height = '0px'
    }

    enable( restoreScrollPos, resetScrollPos ) {

        if( this.enabled ) return
        this.enabled = true

        if( Store.isTouch ) {
            Store.body.style.height.removeProperty('height')
            this.scrollTarget.style.removeProperty('transform')
        } else {
            if( resetScrollPos ) {
                this.scrollPos = this.smoothScrollPos = 0
                this.scrollTarget.style.transform = `translate3d(0px, 0px, 0px)`
            }
            this.onResize()
        }

        if( restoreScrollPos ) {
            this.scrollPos = this.prevScrollPos
            window.scrollTo( 0, -this.prevScrollPos )
        }
        
        E.on(Store.events.WHEEL, this.onScroll)
        E.on(Store.events.SCROLL, this.onScroll)
    }

    clamp() {
        this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll)
    }

    onResize() {
        this.pageHeight = this.scrollTarget.clientHeight
        this.maxScroll = this.pageHeight > Store.windowSize.h ? -(this.pageHeight - Store.windowSize.h) : 0
        Store.body.style.height = this.pageHeight + 'px'
        this.customScrollbar && this.scrollbar.onResize()
    }

}