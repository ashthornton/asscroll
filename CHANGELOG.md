Changelog
===

## 2.0.0 - 03/05/2021
---

- Removed support for IE11 and updated targeted browser compatibility, resulting in a package size reduction of over 30%
- Updated: `ASScroll.scrollPos` and `ASScroll.smoothScrollPos` have been renamed to `ASScroll.targetScrollPos` and `ASScroll.currentScrollPos` respectively. This is to better represent what these values mean
- Updated: `ASScroll.targetScrollPos` and `ASScroll.currentScrollPos` now return positive values rather than the negative Y translate value used to transform the scroll element(s). This should make it more intuitive when using these values in your own code
- New: The container element and scroll element(s) can now be sent to ASScroll as `HTMLElement` / `NodeList` meaning you can pre-select rather than make ASScroll select them again via `document.querySelector()` (#47)
- Fixed: Scrollbar did not match the mouse position when dragging which caused scroll jumps (#12)
- Fixed: Using `<script>` tags to include the library meant having to reference `ASScroll.default` in order to access the class (#46)