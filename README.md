<p align="center"><img src="https://raw.githubusercontent.com/ashthornton-gc/asscroll/master/asscroll.png"></p>

<p align="center">ASScroll is a hybrid smooth scroll setup that combines the performance gains of virtual scroll with the reliability of native scroll.</p>

---

Advantages over pure virtual scroll:
- accessibility / keyboard friendly (without manual key detection)
- no special cases to cater for when detecting key detection (i.e. pressing space in a form input)
- doesn't stop working when hovering over an iframe
- handles hardware that doesn't fire the 'wheel' event i.e. Windows trackpads in Edge + IE

Table of contents
=================
<!--ts-->
   * [Install](#install)
   * [Basic Setup](#basic-setup)
   * [Options](#options)
   * [Methods](#methods)
   * [Properties](#properties)
   * [Events](#events)
   * [Custom Scrollbar](#custom-scrollbar)
   * [External RAF Usage](#usage-with-external-requestanimationframe)
   * [External Resize Usage](#usage-with-external-window-resize)
<!--te-->


---


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

`disableNativeScrollbar: true` - Disables the browser's scrollbar

`disableRaf: false` - Disable internal requestAnimationFrame loop in order to use an external one

`disableResize: false` - Disable internal resize event on the window in order to use an external one

## Methods

`enable( restore = false, reset = false )` - Enable scroll

- `restore` - restores the previous scroll position when `disable()` was last called
- `reset` - force resetting scroll position to 0

`disable()` - Disable scroll

`onRaf()` - Trigger the internal animation frame loop

`onResize( windowWidth = null, windowHeight = null )` - Trigger the internal resize event

- Pass window size manually to this function if you're already getting it in your own resize handler.

`scrollTo( y )` - Scroll to a y coordinate on the page

`on( event, callback )` - Add a callback to an event

`off( event, callback )` - Remove a callback from an event

## Properties

`scrollPos` - returns the current target scroll position

`smoothScrollPos` - returns the current smoothed scroll position 

## Events

`on('scroll', scrollPos => {})` - Fires on page scroll. Provides current scroll position.

`on('raf', ({ scrollPos, smoothScrollPos }) => {})` - Fires on requestAnimationFrame. Continuously provides the target scroll position and the current smoothed scroll position.

## Custom Scrollbar

When `customScrollbar` is enabled in the options, a default set of styles will get added to the page that match the following HTML:

```HTML
<div class="asscrollbar"><div class="asscrollbar__handle"><div></div></div></div>
```

Add this HTML anywhere outside of the main `.asscroll-container` element - just before the closing `</body>` tag works fine.

You can change the classes that are used by changing the `scrollbarEl` and `scrollbarHandleEl` options.

You can use your own styles by setting the `scrollbarStyles` option to false.

---

⚠ **Note**: These styles are added via JS so will only be applied after JS has loaded. This may cause the native scrollbar to show for a moment before the styles are added resulting in a jump of the page.

You can include the styles necessary to hide the native scrollbar in your CSS by copy and pasting the contents of `/css/index.css` or simply by importing them into your CSS setup. For example:

`@import '~@ashthornton/asscroll/css'`

_This won't be an issue with the custom scrollbar styles as you can't smooth scroll until JS is ready anyway._

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

- Handle tabbing focus scroll
- Handle anchor link scroll
