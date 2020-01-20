import ASScroll from '../src'

const smoothScroll = new ASScroll({
    element: '.asscroll-container',
    ease: 0.1,
    customScrollbar: true,
    // scrollbarEl: '.asscrollbar',
    // scrollbarHandleEl: '.asscrollbar__handle',
    // scrollbarStyles: false,
    // disableRaf: false
})

smoothScroll.enable()

// smoothScroll.on('scroll', scrollPos => { console.log(scrollPos) })
// smoothScroll.on('raf', ({ scrollPos, smoothScrollPos }) => { console.log(scrollPos, smoothScrollPos) })

// requestAnimationFrame(onRaf)
// function onRaf() {
//     smoothScroll.onRaf()
//     requestAnimationFrame(onRaf)
// }