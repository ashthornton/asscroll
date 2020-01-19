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
```
import ASScroll from '@ashthornton/asscroll'

const smoothScroll = new ASScroll()

smoothScroll.enable()
```

## Options
Passed as an object through to the ASScroll constructor

`element` - The parent element of the content to be smooth scrolled

_Default: `#scroll-container`_

`ease` - Smooth scroll easing

_Default: `0.1`_

`customScrollbar` - Enable the use of a custom scrollbar

_Default: `false`_

`scrollbarEl` - The parent element of the custom scrollbar

_Default: `#scrollbar`_

`scrollbarHandleEl` - The grabbable bar element in the custom scrollbar

_Default: `#scrollbar__handle`_

`disableRaf` - Disable internal requestAnimationFrame loop in order to use an external one

_Default: `false`_

`disableResize` - Disable internal resize event on the window in order to use an external one

_Default: `false`_

## Methods

`enable()`

`disable()`

`onRaf()`

`onResize()`


## Custom Scrollbar

