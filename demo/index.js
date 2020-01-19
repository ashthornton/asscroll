import ASScroll from '../src'

const smoothScroll = new ASScroll({
    element: '#scroll-container',
    ease: 0.1,
    customScrollbar: true,
    scrollbarEl: '#scrollbar',
    scrollbarHandleEl: '#scrollbar__handle',
    disableRaf: false
})

smoothScroll.enable()

// smoothScroll.on('scroll', scrollPos => { console.log(scrollPos) })
// smoothScroll.on('raf', ({ scrollPos, smoothScrollPos }) => { console.log(scrollPos, smoothScrollPos) })

// requestAnimationFrame(onRaf)
// function onRaf() {
//     smoothScroll.onRaf()
//     requestAnimationFrame(onRaf)
// }