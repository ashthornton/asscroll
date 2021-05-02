## Classes

<dl>
<dt><a href="#ASScroll">ASScroll</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#scrollPos">scrollPos</a> ⇒ <code>number</code></dt>
<dd><p>Gets or sets the scroll position.</p>
</dd>
<dt><a href="#smoothScrollPos">smoothScrollPos</a> ⇒ <code>number</code></dt>
<dd><p>Returns the current scroll position.</p>
</dd>
<dt><a href="#maxScroll">maxScroll</a> ⇒ <code>number</code></dt>
<dd><p>Returns the maximum scroll height of the page.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#enable">enable(parameters)</a></dt>
<dd><p>Enable ASScroll.</p>
</dd>
<dt><a href="#disable">disable(parameters)</a></dt>
<dd><p>Disable ASScroll.</p>
</dd>
<dt><a href="#onRaf">onRaf()</a></dt>
<dd><p>Call the internal animation frame request callback.</p>
</dd>
<dt><a href="#onResize">onResize(parameters)</a></dt>
<dd><p>Call the internal resize callback.</p>
</dd>
<dt><a href="#on">on(eventName, cb)</a></dt>
<dd><p>Add an event listener.</p>
</dd>
<dt><a href="#off">off(eventName, cb)</a></dt>
<dd><p>Remove an event listener.</p>
</dd>
<dt><a href="#scrollTo">scrollTo(scrollPos, [emitEvent])</a></dt>
<dd><p>Scroll to a given position on the page.</p>
</dd>
</dl>

<a name="ASScroll"></a>

## ASScroll
**Kind**: global class
<a name="new_ASScroll_new"></a>

### new ASScroll()
Ash's Smooth Scroll �

<a name="scrollPos"></a>

## scrollPos ⇒ <code>number</code>
Gets or sets the scroll position.

**Kind**: global variable
**Returns**: <code>number</code> - Target scroll position

| Param | Type | Description |
| --- | --- | --- |
| scrollPos | <code>number</code> | The desired scroll position |

**Example** *(Gets the target scroll position.)*
```js
console.log(asscroll.scrollPos)
// 200
```
**Example** *(Sets the scroll position to 200.)*
```js
asscroll.scrollPos = 200
```
<a name="smoothScrollPos"></a>

## smoothScrollPos ⇒ <code>number</code>
Returns the current scroll position.

**Kind**: global variable
**Returns**: <code>number</code> - Current scroll position
<a name="maxScroll"></a>

## maxScroll ⇒ <code>number</code>
Returns the maximum scroll height of the page.

**Kind**: global variable
**Returns**: <code>number</code> - Maxmium scroll height
<a name="enable"></a>

## enable(parameters)
Enable ASScroll.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.scrollTargets] | <code>boolean</code> \| <code>NodeList</code> \| <code>HTMLElement</code> | <code>false</code> | Specify the new element(s) that should be transformed |
| [parameters.reset] | <code>boolean</code> | <code>false</code> | Reset the scroll position to 0 |
| [parameters.restore] | <code>boolean</code> | <code>false</code> | Restore the scroll position to where it was when disable() was called |
| [parameters.horizontalScroll] | <code>boolean</code> | <code>false</code> | Toggle horizontal scrolling |

**Example** *(Enables ASScroll on the &#x27;.page&#x27; element and resets the scroll position to 0.)*
```js
asscroll.enable({ scrollTargets: document.querySelector('.page'), reset: true })
```
<a name="disable"></a>

## disable(parameters)
Disable ASScroll.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameters | <code>object</code> |  |  |
| [parameters.inputOnly] | <code>boolean</code> | <code>false</code> | Only disable the ability to manually scroll (still allow transforms) |

**Example** *(Disables the ability to manually scroll whilst still allowing position updates to be made via ASScroll.smoothScrollPos, for example.)*
```js
asscroll.disable({ inputOnly: true })
```
<a name="onRaf"></a>

## onRaf()
Call the internal animation frame request callback.

**Kind**: global function
<a name="onResize"></a>

## onResize(parameters)
Call the internal resize callback.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>object</code> |  |
| parameters.width | <code>number</code> | Window width |
| parameters.height | <code>number</code> | Window height |

<a name="on"></a>

## on(eventName, cb)
Add an event listener.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event you wish to listen for |
| cb | <code>function</code> | Callback function that should be executed when the event fires |

**Example** *(Logs out the scroll position when the &#x27;scroll&#x27; event is fired.)*
```js
asscroll.on('scroll', scrollPos => console.log(scrollPos))
```
<a name="off"></a>

## off(eventName, cb)
Remove an event listener.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event |
| cb | <code>function</code> | Callback function |

<a name="scrollTo"></a>

## scrollTo(scrollPos, [emitEvent])
Scroll to a given position on the page.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| scrollPos | <code>number</code> |  | Scroll position |
| [emitEvent] | <code>boolean</code> | <code>true</code> | Whether to emit the external scroll events or not |
