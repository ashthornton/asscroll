<p align="center"><img src="https://raw.githubusercontent.com/ashthornton-gc/asscroll/master/asscroll.png"></p>

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
- [Options Demo](https://codepen.io/ashthornton/pen/YzWXZqL?editors=1010)
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
`npm i @ashthornton/asscroll` or `yarn add @ashthornton/asscroll`

# Zero Config Setup

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

---

<a name="ASScroll"></a>

# ASScroll
Ash's Smooth Scroll 🍑

**Kind**: global class  

* [ASScroll](#ASScroll)
    * [new ASScroll(parameters)](#new_ASScroll_new)
    * [.scrollPos](#ASScroll+scrollPos) ⇒ <code>number</code>
    * [.smoothScrollPos](#ASScroll+smoothScrollPos) ⇒ <code>number</code>
    * [.maxScroll](#ASScroll+maxScroll) ⇒ <code>number</code>
    * [.enable(parameters)](#ASScroll+enable)
    * [.disable(parameters)](#ASScroll+disable)
    * [.onRaf()](#ASScroll+onRaf)
    * [.onResize(parameters)](#ASScroll+onResize)
    * [.on(eventName, cb)](#ASScroll+on)
    * [.off(eventName, cb)](#ASScroll+off)
    * [.scrollTo(scrollPos, [emitEvent])](#ASScroll+scrollTo)

<a name="new_ASScroll_new"></a>

## new ASScroll(parameters)
Creates an ASScroll instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.element] | <code>string</code> | <code>&quot;&#x27;.asscroll-container&#x27;&quot;</code> | The selector string for the outer container element |
| [parameters.innerElement] | <code>string</code> | <code>&quot;&#x27;[data-asscroll&#x27;&quot;</code> | The selector string for the inner element(s) |
| [parameters.ease] | <code>number</code> | <code>0.075</code> | The ease amount for the transform lerp |
| [parameters.touchEase] | <code>number</code> | <code>1</code> | The ease amount for the transform lerp on touch devices |
| [parameters.touchScrollType] | <code>string</code> | <code>&quot;&#x27;none&#x27;&quot;</code> | Disable the transform on touch devices |
| [parameters.scrollbarEl] | <code>string</code> | <code>&quot;&#x27;.asscrollbar&#x27;&quot;</code> | The selector string for the custom scrollbar element |
| [parameters.scrollbarHandleEl] | <code>string</code> | <code>&quot;&#x27;.asscrollbar__handle&#x27;&quot;</code> | The selector string for the custom scrollbar handle element |
| [parameters.customScrollbar] | <code>boolean</code> | <code>true</code> | Toggle the custom scrollbar |
| [parameters.scrollbarStyles] | <code>boolean</code> | <code>true</code> | Include the scrollbar CSS via Javascript |
| [parameters.disableNativeScrollbar] | <code>boolean</code> | <code>true</code> | Disable the native browser scrollbar |
| [parameters.disableRaf] | <code>boolean</code> | <code>false</code> | Disable internal requestAnimationFrame loop in order to use an external one |
| [parameters.disableResize] | <code>boolean</code> | <code>false</code> | Disable internal resize event on the window in order to use an external one |
| [parameters.limitLerpRate] | <code>boolean</code> | <code>true</code> | Match lerp speed on >60Hz displays to that of a 60Hz display |
| [parameters.blockScrollClass] | <code>string</code> | <code>&quot;&#x27;.asscroll-block&#x27;&quot;</code> | The class to add to elements that should block ASScroll when hovered |

<a name="ASScroll+scrollPos"></a>

## asscroll.scrollPos ⇒ <code>number</code>
Gets or sets the scroll position.

**Kind**: instance property of [<code>ASScroll</code>](#ASScroll)  
**Returns**: <code>number</code> - Target scroll position  

| Param | Type | Description |
| --- | --- | --- |
| scrollPos | <code>number</code> | The desired scroll position |

**Example** *(Gets the target scroll position)*  
```js
console.log(asscroll.scrollPos)
// 200
```
**Example** *(Sets the scroll position to 200)*  
```js
asscroll.scrollPos = 200
```
<a name="ASScroll+smoothScrollPos"></a>

## asscroll.smoothScrollPos ⇒ <code>number</code>
Returns the current scroll position.

**Kind**: instance property of [<code>ASScroll</code>](#ASScroll)  
**Returns**: <code>number</code> - Current scroll position  
<a name="ASScroll+maxScroll"></a>

## asscroll.maxScroll ⇒ <code>number</code>
Returns the maximum scroll height of the page.

**Kind**: instance property of [<code>ASScroll</code>](#ASScroll)  
**Returns**: <code>number</code> - Maxmium scroll height  
<a name="ASScroll+enable"></a>

## asscroll.enable(parameters)
Enable ASScroll.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.scrollTargets] | <code>boolean</code> \| <code>NodeList</code> \| <code>HTMLElement</code> | <code>false</code> | Specify the new element(s) that should be transformed |
| [parameters.reset] | <code>boolean</code> | <code>false</code> | Reset the scroll position to 0 |
| [parameters.restore] | <code>boolean</code> | <code>false</code> | Restore the scroll position to where it was when disable() was called |
| [parameters.horizontalScroll] | <code>boolean</code> | <code>false</code> | Toggle horizontal scrolling |

**Example** *(Enables ASScroll on the &#x27;.page&#x27; element and resets the scroll position to 0)*  
```js
asscroll.enable({ scrollTargets: document.querySelector('.page'), reset: true })
```
<a name="ASScroll+disable"></a>

## asscroll.disable(parameters)
Disable ASScroll.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.inputOnly] | <code>boolean</code> | <code>false</code> | Only disable the ability to manually scroll (still allow transforms) |

**Example** *(Disables the ability to manually scroll whilst still allowing position updates to be made via ASScroll.smoothScrollPos, for example)*  
```js
asscroll.disable({ inputOnly: true })
```
<a name="ASScroll+onRaf"></a>

## asscroll.onRaf()
Call the internal animation frame request callback.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  
<a name="ASScroll+onResize"></a>

## asscroll.onResize(parameters)
Call the internal resize callback.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>object</code> |  |
| parameters.width | <code>number</code> | Window width |
| parameters.height | <code>number</code> | Window height |

<a name="ASScroll+on"></a>

## asscroll.on(eventName, cb)
Add an event listener.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event you wish to listen for |
| cb | <code>function</code> | Callback function that should be executed when the event fires |

**Example** *(Logs out the scroll position when the &#x27;scroll&#x27; event is fired)*  
```js
asscroll.on('scroll', scrollPos => console.log(scrollPos))
```
<a name="ASScroll+off"></a>

## asscroll.off(eventName, cb)
Remove an event listener.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event |
| cb | <code>function</code> | Callback function |

<a name="ASScroll+scrollTo"></a>

## asscroll.scrollTo(scrollPos, [emitEvent])
Scroll to a given position on the page.

**Kind**: instance method of [<code>ASScroll</code>](#ASScroll)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| scrollPos | <code>number</code> |  | Scroll position |
| [emitEvent] | <code>boolean</code> | <code>true</code> | Whether to emit the external scroll events or not |

