<p align="center"><img src="https://raw.githubusercontent.com/ashthornton-gc/asscroll/master/docs/asscroll.png"></p>

<p align="center">
    <a href="https://www.npmjs.com/package/@ashthornton/asscroll"><img src="https://img.shields.io/npm/v/@ashthornton/asscroll?color=%23F7894A" alt="NPM Version"></a>
    <a href="https://www.jsdelivr.com/package/npm/@ashthornton/asscroll"><img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hm/@ashthornton/asscroll?color=%23F7894A"></a>
</p>

<h3 align="center"><strong>ASScroll is a hybrid smooth scroll setup that combines the<br>performance gains of virtual scroll with the reliability of native scroll.</strong></h3>

<p align="center" style="padding: 0 15%">This setup aims to be a lightweight solution that provides a consistent smooth scrolling experience across all platforms, devices and hardware.</p>

---

#### Advantages over pure virtual scroll:
- Accessibility / keyboard friendly (without overriding the browser's native scroll)
- No special cases to cater for when handling manual key detection (i.e. pressing space in a form input)
- Doesn't stop working when hovering over an iframe
- Handles hardware that doesn't fire the 'wheel' event i.e. Windows trackpads in Edge + IE
- No lag between DOM and WebGL elements on mobile, whilst retaining native inertia scroll

#### Other Features:
- Horizontal scroll
- Custom scroll bar
- Use your own external RAF loop and resize events
- Consistent lerp speeds on high refresh rate displays

_No animation features are included as there are other libraries that can be used with ASScroll. GreenSock's [ScrollTrigger](https://greensock.com/scrolltrigger/) is a great example and a demo is included below_

Demos
================
- [Zero Config Demo](https://codepen.io/ashthornton/pen/pobJRQX?editors=1010)
- [Using GSAP's ScrollTrigger with ASScroll](https://codepen.io/ashthornton/pen/PoZRwPW)

### Sites using ASScroll
- [Superlist](https://superlist.com/)
- [Lewa House](https://lewahouse.com/)
- [Eder Anaya](https://ederanaya.me/)
- [FanFan](https://fanfan.fan/)
- [Havoc](https://www.havoc.co/)
- [Wray and Nephew](https://straightfromyard.co.uk/)
- [Shape Studio](https://shapestudio.co.uk/)

---


# Install
`npm i --save @ashthornton/asscroll` or `yarn add @ashthornton/asscroll`

Also available via [JSDelivr CDN](https://www.jsdelivr.com/package/npm/@ashthornton/asscroll) which you can then include with a `<script>` tag.

# Zero Config Setup

1. Add a class of `.asscroll-container` to the parent element of the content to be smooth scrolled. By default, the first child found within will be scrolled. These can both be changed in the options.

```html
<body>
    <div class="asscroll-container">
        <div><!-- The Y translation will be applied to this element --></div>
    </div>
</body>
```

2. Import and initialise in Javascript

```js
import ASScroll from '@ashthornton/asscroll'

const asscroll = new ASScroll()

window.addEventListener('load', () => {
    asscroll.enable()
})
```

---

<a name="ASScroll"></a>

# ASScroll
Ash's Smooth Scroll 🍑


* [ASScroll](#ASScroll)
    * [new ASScroll(parameters)](#new_ASScroll_new)
    * [.targetScrollPos](#ASScroll+targetScrollPos) ⇒ <code>number</code>
    * [.currentScrollPos](#ASScroll+currentScrollPos) ⇒ <code>number</code>
    * [.maxScroll](#ASScroll+maxScroll) ⇒ <code>number</code>
    * [.containerElement](#ASScroll+containerElement) ⇒ <code>HTMLElement</code>
    * [.scrollElements](#ASScroll+scrollElements) ⇒ <code>Array</code>
    * [.enable(parameters)](#ASScroll+enable)
    * [.disable(parameters)](#ASScroll+disable)
    * [.update()](#ASScroll+update)
    * [.resize(parameters)](#ASScroll+resize)
    * [.on(eventName, cb)](#ASScroll+on)
    * [.off(eventName, cb)](#ASScroll+off)
    * [.scrollTo(targetScrollPos, [emitEvent])](#ASScroll+scrollTo)

<a name="new_ASScroll_new"></a>

## new ASScroll(parameters)
Creates an ASScroll instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.containerElement] | <code>string</code> \| <code>HTMLElement</code> | <code>&quot;.asscroll-container&quot;</code> | The selector string for the outer container element, or the element itself |
| [parameters.scrollElements] | <code>string</code> \| <code>HTMLElement</code> \| <code>NodeList</code> | <code>&quot;[data-asscroll]&quot;</code> | The selector string for the elements to scroll, or the elements themselves |
| [parameters.ease] | <code>number</code> | <code>0.075</code> | The ease amount for the transform lerp |
| [parameters.touchEase] | <code>number</code> | <code>1</code> | The ease amount for the transform lerp on touch devices |
| [parameters.touchScrollType] | <code>string</code> | <code>&quot;none&quot;</code> | Set the scrolling method on touch devices. Other options are 'transform' and 'scrollTop' |
| [parameters.scrollbarEl] | <code>string</code> | <code>&quot;.asscrollbar&quot;</code> | The selector string for the custom scrollbar element |
| [parameters.scrollbarHandleEl] | <code>string</code> | <code>&quot;.asscrollbar__handle&quot;</code> | The selector string for the custom scrollbar handle element |
| [parameters.customScrollbar] | <code>boolean</code> | <code>true</code> | Toggle the custom scrollbar |
| [parameters.scrollbarStyles] | <code>boolean</code> | <code>true</code> | Include the scrollbar CSS via Javascript |
| [parameters.disableNativeScrollbar] | <code>boolean</code> | <code>true</code> | Disable the native browser scrollbar |
| [parameters.disableRaf] | <code>boolean</code> | <code>false</code> | Disable internal requestAnimationFrame loop in order to use an external one |
| [parameters.disableResize] | <code>boolean</code> | <code>false</code> | Disable internal resize event on the window in order to use an external one |
| [parameters.limitLerpRate] | <code>boolean</code> | <code>true</code> | Match lerp speed on >60Hz displays to that of a 60Hz display |
| [parameters.blockScrollClass] | <code>string</code> | <code>&quot;.asscroll-block&quot;</code> | The class to add to elements that should block ASScroll when hovered |

**Example**  
```jsconst asscroll = new ASScroll({	containerElement: '.page-container',	scrollElements: '.my-page'})```
<a name="ASScroll+targetScrollPos"></a>

## asscroll.targetScrollPos ⇒ <code>number</code>
Returns the target scroll position.

**Returns**: <code>number</code> - Target scroll position  
<a name="ASScroll+currentScrollPos"></a>

## asscroll.currentScrollPos ⇒ <code>number</code>
Gets or sets the current scroll position.

**Returns**: <code>number</code> - Current scroll position  

| Param | Type | Description |
| --- | --- | --- |
| scrollPos | <code>number</code> | The desired scroll position |

**Example** *(Sets the scroll position to 200, bypassing any lerps)*  
```js
asscroll.currentScrollPos = 200
```
<a name="ASScroll+maxScroll"></a>

## asscroll.maxScroll ⇒ <code>number</code>
Returns the maximum scroll height of the page.

**Returns**: <code>number</code> - Maxmium scroll height  
<a name="ASScroll+containerElement"></a>

## asscroll.containerElement ⇒ <code>HTMLElement</code>
Returns the outer element that ASScroll is attached to.

**Returns**: <code>HTMLElement</code> - The outer element  
<a name="ASScroll+scrollElements"></a>

## asscroll.scrollElements ⇒ <code>Array</code>
Returns the the element(s) that ASScroll is scrolling.

**Returns**: <code>Array</code> - An array of elements ASScroll is scrolling  
<a name="ASScroll+enable"></a>

## asscroll.enable(parameters)
Enable ASScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.newScrollElements] | <code>boolean</code> \| <code>NodeList</code> \| <code>HTMLElement</code> | <code>false</code> | Specify the new element(s) that should be scrolled |
| [parameters.reset] | <code>boolean</code> | <code>false</code> | Reset the scroll position to 0 |
| [parameters.restore] | <code>boolean</code> | <code>false</code> | Restore the scroll position to where it was when disable() was called |
| [parameters.horizontalScroll] | <code>boolean</code> | <code>false</code> | Toggle horizontal scrolling |

**Example** *(Enables ASScroll on the &#x27;.page&#x27; element and resets the scroll position to 0)*  
```js
asscroll.enable({ newScrollElements: document.querySelector('.page'), reset: true })
```
<a name="ASScroll+disable"></a>

## asscroll.disable(parameters)
Disable ASScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.inputOnly] | <code>boolean</code> | <code>false</code> | Only disable the ability to manually scroll (still allow transforms) |

**Example** *(Disables the ability to manually scroll whilst still allowing position updates to be made via asscroll.currentScrollPos, for example)*  
```js
asscroll.disable({ inputOnly: true })
```
<a name="ASScroll+update"></a>

## asscroll.update()
Call the internal animation frame request callback.

<a name="ASScroll+resize"></a>

## asscroll.resize(parameters)
Call the internal resize callback.


| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>object</code> |  |
| parameters.width | <code>number</code> | Window width |
| parameters.height | <code>number</code> | Window height |

<a name="ASScroll+on"></a>

## asscroll.on(eventName, cb)
Add an event listener.


| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event you wish to listen for |
| cb | <code>function</code> | Callback function that should be executed when the event fires |

**Example** *(Logs out the scroll position when the &#x27;scroll&#x27; event is fired)*  
```js
asscroll.on('scroll', scrollPos => console.log(scrollPos))
```
**Example** *(Returns the target scroll position and current scroll position during the internal update loop)*  
```js
asscroll.on('update', ({ targetScrollPos, currentScrollPos }) => console.log(targetScrollPos, currentScrollPos))
```
**Example** *(Fires when the lerped scroll position has reached the target position)*  
```js
asscroll.on('scrollEnd', scrollPos => console.log(scrollPos))
```
<a name="ASScroll+off"></a>

## asscroll.off(eventName, cb)
Remove an event listener.


| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event |
| cb | <code>function</code> | Callback function |

<a name="ASScroll+scrollTo"></a>

## asscroll.scrollTo(targetScrollPos, [emitEvent])
Scroll to a given position on the page.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| targetScrollPos | <code>number</code> |  | Scroll position |
| [emitEvent] | <code>boolean</code> | <code>true</code> | Whether to emit the external scroll events or not |


---

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

```css
@import '~@ashthornton/asscroll/css'
```

## Usage with external requestAnimationFrame

```Javascript
const asscroll = new ASScroll({
    disableRaf: true
})

// Regular RAF setup
requestAnimationFrame(onRaf)
function onRaf() {
    asscroll.update()
    requestAnimationFrame(onRaf)
}

// Use with GSAP's internal RAF
gsap.ticker.add(asscroll.update)

asscroll.enable()
```

## Usage with external window resize

```Javascript
const asscroll = new ASScroll({
    disableResize: true
})

window.addEventListener('resize', () => {
    // trigger other resize logic
    asscroll.resize({ width: window.innerWidth, height: window.innerHeight })
})

asscroll.enable()
```