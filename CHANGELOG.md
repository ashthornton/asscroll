Changelog
===

## 2.0.0 - 03/05/2021
_This release includes some breaking changes - see "Updated" below._

- Removed support for IE11 and updated targeted browser compatibility, resulting in a package size reduction of over 30%
- Added JSDoc to enable auto-completion and type-hinting. This is also used to generate accurate README documentation
- The check to determine screen refresh rate only runs briefly after initialising ASScroll, stopping continuous calls to `performance.now()` thus slightly increasing performance

### New
- The container element and scroll element(s) can now be sent to ASScroll as `HTMLElement` / `NodeList` meaning you can pre-select rather than make ASScroll select them again via `document.querySelector()` ([#47](https://github.com/ashthornton/asscroll/issues/47))
- Exposed `maxScroll`, `containerElement` and `scrollElements`
- Added `scrollEnd` event which fires when the lerped scroll position reaches its target

### Updated
- `ASScroll.scrollPos` and `ASScroll.smoothScrollPos` have been renamed to `ASScroll.targetScrollPos` and `ASScroll.currentScrollPos` respectively. This is to better represent what these values mean
- `ASScroll.targetScrollPos` and `ASScroll.currentScrollPos` now return positive values rather than the negative Y translate value used to transform the scroll element(s). This should make it more intuitive when using these values in your own code
- `ASScroll.onRaf()` and `ASScroll.onResize()` have been renamed to `ASScroll.update()` and `ASScroll.resize()` respectively
- `ASScroll.enable()` and `ASScroll.disable()` now accept an object as their parameter so you can pass only the options you need to
- The `disableOnTouch` option has been renamed to `touchScrollType` - see [docs](https://github.com/ashthornton/asscroll#touch-devices) for more info

### Fixed
- Scrollbar did not match the mouse position when dragging which caused scroll jumps ([#12](https://github.com/ashthornton/asscroll/issues/12))
- Using `<script>` tags to include the library meant having to reference `ASScroll.default` in order to access the class ([#46](https://github.com/ashthornton/asscroll/issues/46))
- Scroll position and max height values were not previously reporting the correct values on touch devices
