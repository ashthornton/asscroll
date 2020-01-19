import ASScroll from '../src'

const smoothScroll = new ASScroll({
    element: '#scroll-container',
    ease: 0.1,
    customScrollbar: true,
    scrollbarEl: '#scrollbar',
    scrollbarBarEl: '#scrollbar__bar',
    disableRaf: true
})

smoothScroll.enable()

requestAnimationFrame(onRaf)
function onRaf() {
    smoothScroll.onRaf()
    requestAnimationFrame(onRaf)
}