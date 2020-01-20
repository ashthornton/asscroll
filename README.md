<p align="center"><img src="https://github.com/ashthornton-gc/asscroll/blob/master/asscroll.png"></p>

<p align="center">ASScroll is a hybrid smooth scroll setup that combines the performance gains of virtual scroll with the reliability of native scroll.</p>

---

Advantages over pure virtual scroll:
- accessibility / keyboard friendly (without manual key detection)
- no special cases to cater for when detecting key detection (i.e. pressing space in a form input)
- doesn't stop working when hovering over an iframe
- handles hardware that doesn't fire the 'wheel' event i.e. Windows trackpads in Edge + IE

## Install
`npm i -D @ashthornton/asscroll` or `yarn add @ashthornton/asscroll`

## Basic Setup

1. Add a class of `.asscroll-container` to the parent element of the content to be smooth scrolled

```HTML
<body>
    <div class="asscroll-container">
        Content
    </div>
</body>
```

2. Import and initialise in Javascript

```Javascript
import ASScroll from '@ashthornton/asscroll'

const smoothScroll = new ASScroll( options = {} )

smoothScroll.enable()
```

## Options
Passed as an object through to the ASScroll constructor. Defaults shown next to option names.

`element: .asscroll-container` - The parent element of the content to be smooth scrolled

`ease: 0.1` - Smooth scroll easing

`customScrollbar: false` - Enable the use of a custom scrollbar

`scrollbarEl: .asscrollbar` - The parent element of the custom scrollbar

`scrollbarHandleEl: .asscrollbar__handle` - The grabbable bar element in the custom scrollbar

`scrollbarStyles: true` - Include the default scrollbar CSS

`disableRaf: false` - Disable internal requestAnimationFrame loop in order to use an external one

`disableResize: false` - Disable internal resize event on the window in order to use an external one

## Methods

`enable( restore = false, reset = false )` - Enable scroll

- `restore` - restores the previous scroll position when `disable()` was last called
- `reset` - force resetting scroll position to 0

`disable()` - Disable scroll

`onRaf()` - Trigger the internal animation frame loop

`onResize()` - Trigger the internal resize event

## Events

`on('scroll', scrollPos => {})` - Fires on page scroll. Provides current scroll position.

`on('raf', ({ scrollPos, smoothScrollPos }) => {})` - Fires on requestAnimationFrame. Continuously provides the target scroll position and the current smoothed scroll position.

## Custom Scrollbar

When `customScrollbar` is enabled in the options, a default set of styles will get added to the page that match the following HTML:

```HTML
<div class="asscrollbar"><div><div class="asscrollbar__handle"></div></div>
```

Add this HTML anywhere outside of the main `.asscroll-container` element - just before the closing `</body>` tag works fine.

You can change the classes that are used by changing the `scrollbarEl` and `scrollbarHandleEl` options.

You can use your own styles by setting the `scrollbarStyles` option to false.

## Usage with external requestAnimationFrame

```Javascript
const smoothScroll = new ASScroll({
    disableRaf: true
})

// Regular RAF setup
requestAnimationFrame(onRaf)
function onRaf() {
    smoothScroll.onRaf()
    requestAnimationFrame(onRaf)
}

// Use with GSAP's internal RAF
gsap.ticker.add(smoothScroll.onRaf)

smoothScroll.enable()
```

## Usage with external window resize

```Javascript
const smoothScroll = new ASScroll({
    disableResize: true
})

window.addEventListener('resize', () => {
    // trigger other resize logic
    smoothScroll.onResize()
})

smoothScroll.enable()
```

## TODO

- Handle tabbing focus
- Handle anchor link scroll