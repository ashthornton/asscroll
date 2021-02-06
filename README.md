<p align="center"><img src="https://raw.githubusercontent.com/ashthornton-gc/asscroll/master/asscroll.png"></p>

<h3 align="center"><strong>ASScroll is a hybrid smooth scroll setup that combines the<br>performance gains of virtual scroll with the reliability of native scroll.</strong></h3>

<p align="center" style="padding: 0 15%">This setup aims to be a lightweight solution that provides a consistent smooth scrolling experience across all platforms, devices and hardware.</p>

---

#### Advantages over pure virtual scroll:
- Accessibility / keyboard friendly (without overriding the browser's native scroll)
- No special cases to cater for when handling manual key detection (i.e. pressing space in a form input)
- Doesn't stop working when hovering over an iframe
- Handles hardware that doesn't fire the 'wheel' event i.e. Windows trackpads in Edge + IE
- No lag between DOM and WebGL elements on mobile, whilst retaining native interia scroll

#### Other Features:
- Horizontal scroll
- Custom scroll bar
- Use your own external RAF loop and resize events
- Consistent lerp speeds on high refresh rate displays

_No animation features are included as there are other libraries that can be used with ASScroll. GreenSock's [ScrollTrigger](https://greensock.com/scrolltrigger/) is a great example and a demo is included below_

Demos
================
- [Zero Config Demo](https://codepen.io/ashthornton/pen/pobJRQX?editors=1010)
- [Options Demo](https://codepen.io/ashthornton/pen/YzWXZqL?editors=1010)
- [Using GSAP's ScrollTrigger with ASScroll](https://codepen.io/ashthornton/pen/PoZRwPW)

### Sites using ASScroll
- [Shape Studio](https://shapestudio.co.uk/)
- [Wray and Nephew](https://straightfromyard.co.uk/)
- [Havoc](https://www.havoc.co/)
- [FanFan](https://fanfan.fan/)
- [Eder Anaya](https://ederanaya.me/)

Table of contents
=================
<!--ts-->
   * [Install](#install)
   * [Zero Config Setup](#zero-config-setup)
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
`npm i @ashthornton/asscroll` or `yarn add @ashthornton/asscroll`

## Zero Config Setup

1. Add a class of `.asscroll-container` to the parent element of the content to be smooth scrolled. By default, the first child found within will be scrolled. These can both be changed in the options.

```HTML
<body>
    <div class="asscroll-container">
        <div><!-- The Y translation will be applied to this element --></div>
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

| option | type | default | description |
|-|-|-|-|
| `element`                | `String`  | `'.asscroll-container'` | The parent element of the content to be smooth scrolled                                    |
| `innerElement`           | `String`  | `'[data-scroll]'`       | The element that the `transform` translation will be applied to inside the parent element  |
| `ease`                   | `Float`   | `0.075`                 | Smooth scroll easing                                                                       |
| `touchEase`              | `Float`   | `1`                     | Smooth scroll easing on touch devices. A value of `1` will match the native scroll inertia |
| `customScrollbar`        | `Boolean` | `true`                  | Enable the use of a custom scrollbar                                                       |
| `scrollbarEl`            | `String`  | `.asscrollbar`          | The parent element of the custom scrollbar                                                 |
| `scrollbarHandleEl`      | `String`  | `.asscrollbar__handle`  | The grabbable bar element in the custom scrollbar                                          |
| `scrollbarStyles`        | `Boolean` | `true`                  | Include the default scrollbar CSS                                                          |
| `disableNativeScrollbar` | `Boolean` | `true`                  | Disables the browser's scrollbar                                                           |
| `disableOnTouch`         | `Boolean` | `true`                 | Set this to `false` to transform the scroll element on touch devices              |
| `disableRaf`             | `Boolean` | `false`                 | Disable internal requestAnimationFrame loop in order to use an external one                |
| `disableResize`          | `Boolean` | `false`                 | Disable internal resize event on the window in order to use an external one                |
| `limitLerpRate`          | `Boolean` | `true`                 | Match lerp speed on >60Hz displays to that of a 60Hz display              |

## Methods

`enable( restore = false, reset = false, newTarget = false, horizontalScroll = false )` - Enable scroll

- `restore` - restores the previous scroll position when `disable()` was last called
- `reset` - force resetting scroll position to 0
- `newTarget` - pass in a selected DOM node to set a new scroll target i.e. when loading in a new page via PJAX.
- `horizontalScroll` - set to true if you want the content to scroll horizontally

`disable()` - Disable scroll

`onRaf()` - Trigger the internal animation frame loop

`onResize( windowWidth = null, windowHeight = null )` - Trigger the internal resize event

- Pass window size manually to this function if you're already getting it in your own resize handler.

`scrollTo( y, emitEvent = true )` - Scroll to a y coordinate on the page. Choose whether to emit the `'scroll'` event.

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

This HTML will get added to your page automatically if you don't add it yourself.

You can change the classes that are used by changing the `scrollbarEl` and `scrollbarHandleEl` options.

You can use your own styles by setting the `scrollbarStyles` option to false.

---

⚠ **Note**: These styles are added via JS so will only be applied after JS has loaded. This may cause the native scrollbar to show for a moment before the styles are added resulting in a jump of the page.

You can include the styles necessary to hide the native scrollbar in your CSS by copy and pasting the contents of `/css/index.css` or simply by importing them into your CSS setup. For example:

`@import '~@ashthornton/asscroll/css'`

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
    smoothScroll.onResize(window.innerWidth, window.innerHeight)
})

smoothScroll.enable()
```

## TODO

All related:
- ~~Handle tabbing focus scroll~~
- ~~Handle anchor link scroll~~
- Handle Ctrl/Cmd+F
