(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ASScroll"] = factory();
	else
		root["ASScroll"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 672:
/***/ ((module) => {

const store = {
  html: document.documentElement,
  body: document.body,
  windowSize: {
    w: window.innerWidth,
    h: window.innerHeight
  }
};
module.exports = store;

/***/ }),

/***/ 336:
/***/ ((module) => {

module.exports = function debounce(fn, delay) {
  let timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    const args = arguments;
    const that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./src/utils/debounce.js
var debounce = __webpack_require__(336);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./src/store.js
var store = __webpack_require__(672);
var store_default = /*#__PURE__*/__webpack_require__.n(store);
;// CONCATENATED MODULE: ./node_modules/selector-set/selector-set.next.js
// Public: Create a new SelectorSet.
function SelectorSet() {
  // Construct new SelectorSet if called as a function.
  if (!(this instanceof SelectorSet)) {
    return new SelectorSet();
  }

  // Public: Number of selectors added to the set
  this.size = 0;

  // Internal: Incrementing ID counter
  this.uid = 0;

  // Internal: Array of String selectors in the set
  this.selectors = [];

  // Internal: Map of selector ids to objects
  this.selectorObjects = {};

  // Internal: All Object index String names mapping to Index objects.
  this.indexes = Object.create(this.indexes);

  // Internal: Used Object index String names mapping to Index objects.
  this.activeIndexes = [];
}

// Detect prefixed Element#matches function.
var docElem = window.document.documentElement;
var matches =
  docElem.matches ||
  docElem.webkitMatchesSelector ||
  docElem.mozMatchesSelector ||
  docElem.oMatchesSelector ||
  docElem.msMatchesSelector;

// Public: Check if element matches selector.
//
// Maybe overridden with custom Element.matches function.
//
// el       - An Element
// selector - String CSS selector
//
// Returns true or false.
SelectorSet.prototype.matchesSelector = function(el, selector) {
  return matches.call(el, selector);
};

// Public: Find all elements in the context that match the selector.
//
// Maybe overridden with custom querySelectorAll function.
//
// selectors - String CSS selectors.
// context   - Element context
//
// Returns non-live list of Elements.
SelectorSet.prototype.querySelectorAll = function(selectors, context) {
  return context.querySelectorAll(selectors);
};

// Public: Array of indexes.
//
// name     - Unique String name
// selector - Function that takes a String selector and returns a String key
//            or undefined if it can't be used by the index.
// element  - Function that takes an Element and returns an Array of String
//            keys that point to indexed values.
//
SelectorSet.prototype.indexes = [];

// Index by element id
var idRe = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
SelectorSet.prototype.indexes.push({
  name: 'ID',
  selector: function matchIdSelector(sel) {
    var m;
    if ((m = sel.match(idRe))) {
      return m[0].slice(1);
    }
  },
  element: function getElementId(el) {
    if (el.id) {
      return [el.id];
    }
  }
});

// Index by all of its class names
var classRe = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
SelectorSet.prototype.indexes.push({
  name: 'CLASS',
  selector: function matchClassSelector(sel) {
    var m;
    if ((m = sel.match(classRe))) {
      return m[0].slice(1);
    }
  },
  element: function getElementClassNames(el) {
    var className = el.className;
    if (className) {
      if (typeof className === 'string') {
        return className.split(/\s/);
      } else if (typeof className === 'object' && 'baseVal' in className) {
        // className is a SVGAnimatedString
        // global SVGAnimatedString is not an exposed global in Opera 12
        return className.baseVal.split(/\s/);
      }
    }
  }
});

// Index by tag/node name: `DIV`, `FORM`, `A`
var tagRe = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
SelectorSet.prototype.indexes.push({
  name: 'TAG',
  selector: function matchTagSelector(sel) {
    var m;
    if ((m = sel.match(tagRe))) {
      return m[0].toUpperCase();
    }
  },
  element: function getElementTagName(el) {
    return [el.nodeName.toUpperCase()];
  }
});

// Default index just contains a single array of elements.
SelectorSet.prototype.indexes['default'] = {
  name: 'UNIVERSAL',
  selector: function() {
    return true;
  },
  element: function() {
    return [true];
  }
};

// Use ES Maps when supported
var Map;
if (typeof window.Map === 'function') {
  Map = window.Map;
} else {
  Map = (function() {
    function Map() {
      this.map = {};
    }
    Map.prototype.get = function(key) {
      return this.map[key + ' '];
    };
    Map.prototype.set = function(key, value) {
      this.map[key + ' '] = value;
    };
    return Map;
  })();
}

// Regexps adopted from Sizzle
//   https://github.com/jquery/sizzle/blob/1.7/sizzle.js
//
var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

// Internal: Get indexes for selector.
//
// selector - String CSS selector
//
// Returns Array of {index, key}.
function parseSelectorIndexes(allIndexes, selector) {
  allIndexes = allIndexes.slice(0).concat(allIndexes['default']);

  var allIndexesLen = allIndexes.length,
    i,
    j,
    m,
    dup,
    rest = selector,
    key,
    index,
    indexes = [];

  do {
    chunker.exec('');
    if ((m = chunker.exec(rest))) {
      rest = m[3];
      if (m[2] || !rest) {
        for (i = 0; i < allIndexesLen; i++) {
          index = allIndexes[i];
          if ((key = index.selector(m[1]))) {
            j = indexes.length;
            dup = false;
            while (j--) {
              if (indexes[j].index === index && indexes[j].key === key) {
                dup = true;
                break;
              }
            }
            if (!dup) {
              indexes.push({ index: index, key: key });
            }
            break;
          }
        }
      }
    }
  } while (m);

  return indexes;
}

// Internal: Find first item in Array that is a prototype of `proto`.
//
// ary   - Array of objects
// proto - Prototype of expected item in `ary`
//
// Returns object from `ary` if found. Otherwise returns undefined.
function findByPrototype(ary, proto) {
  var i, len, item;
  for (i = 0, len = ary.length; i < len; i++) {
    item = ary[i];
    if (proto.isPrototypeOf(item)) {
      return item;
    }
  }
}

// Public: Log when added selector falls under the default index.
//
// This API should not be considered stable. May change between
// minor versions.
//
// obj - {selector, data} Object
//
//   SelectorSet.prototype.logDefaultIndexUsed = function(obj) {
//     console.warn(obj.selector, "could not be indexed");
//   };
//
// Returns nothing.
SelectorSet.prototype.logDefaultIndexUsed = function() {};

// Public: Add selector to set.
//
// selector - String CSS selector
// data     - Optional data Object (default: undefined)
//
// Returns nothing.
SelectorSet.prototype.add = function(selector, data) {
  var obj,
    i,
    indexProto,
    key,
    index,
    objs,
    selectorIndexes,
    selectorIndex,
    indexes = this.activeIndexes,
    selectors = this.selectors,
    selectorObjects = this.selectorObjects;

  if (typeof selector !== 'string') {
    return;
  }

  obj = {
    id: this.uid++,
    selector: selector,
    data: data
  };
  selectorObjects[obj.id] = obj;

  selectorIndexes = parseSelectorIndexes(this.indexes, selector);
  for (i = 0; i < selectorIndexes.length; i++) {
    selectorIndex = selectorIndexes[i];
    key = selectorIndex.key;
    indexProto = selectorIndex.index;

    index = findByPrototype(indexes, indexProto);
    if (!index) {
      index = Object.create(indexProto);
      index.map = new Map();
      indexes.push(index);
    }

    if (indexProto === this.indexes['default']) {
      this.logDefaultIndexUsed(obj);
    }
    objs = index.map.get(key);
    if (!objs) {
      objs = [];
      index.map.set(key, objs);
    }
    objs.push(obj);
  }

  this.size++;
  selectors.push(selector);
};

// Public: Remove selector from set.
//
// selector - String CSS selector
// data     - Optional data Object (default: undefined)
//
// Returns nothing.
SelectorSet.prototype.remove = function(selector, data) {
  if (typeof selector !== 'string') {
    return;
  }

  var selectorIndexes,
    selectorIndex,
    i,
    j,
    k,
    selIndex,
    objs,
    obj,
    indexes = this.activeIndexes,
    selectors = (this.selectors = []),
    selectorObjects = this.selectorObjects,
    removedIds = {},
    removeAll = arguments.length === 1;

  selectorIndexes = parseSelectorIndexes(this.indexes, selector);
  for (i = 0; i < selectorIndexes.length; i++) {
    selectorIndex = selectorIndexes[i];

    j = indexes.length;
    while (j--) {
      selIndex = indexes[j];
      if (selectorIndex.index.isPrototypeOf(selIndex)) {
        objs = selIndex.map.get(selectorIndex.key);
        if (objs) {
          k = objs.length;
          while (k--) {
            obj = objs[k];
            if (obj.selector === selector && (removeAll || obj.data === data)) {
              objs.splice(k, 1);
              removedIds[obj.id] = true;
            }
          }
        }
        break;
      }
    }
  }

  for (i in removedIds) {
    delete selectorObjects[i];
    this.size--;
  }

  for (i in selectorObjects) {
    selectors.push(selectorObjects[i].selector);
  }
};

// Sort by id property handler.
//
// a - Selector obj.
// b - Selector obj.
//
// Returns Number.
function sortById(a, b) {
  return a.id - b.id;
}

// Public: Find all matching decendants of the context element.
//
// context - An Element
//
// Returns Array of {selector, data, elements} matches.
SelectorSet.prototype.queryAll = function(context) {
  if (!this.selectors.length) {
    return [];
  }

  var matches = {},
    results = [];
  var els = this.querySelectorAll(this.selectors.join(', '), context);

  var i, j, len, len2, el, m, match, obj;
  for (i = 0, len = els.length; i < len; i++) {
    el = els[i];
    m = this.matches(el);
    for (j = 0, len2 = m.length; j < len2; j++) {
      obj = m[j];
      if (!matches[obj.id]) {
        match = {
          id: obj.id,
          selector: obj.selector,
          data: obj.data,
          elements: []
        };
        matches[obj.id] = match;
        results.push(match);
      } else {
        match = matches[obj.id];
      }
      match.elements.push(el);
    }
  }

  return results.sort(sortById);
};

// Public: Match element against all selectors in set.
//
// el - An Element
//
// Returns Array of {selector, data} matches.
SelectorSet.prototype.matches = function(el) {
  if (!el) {
    return [];
  }

  var i, j, k, len, len2, len3, index, keys, objs, obj, id;
  var indexes = this.activeIndexes,
    matchedIds = {},
    matches = [];

  for (i = 0, len = indexes.length; i < len; i++) {
    index = indexes[i];
    keys = index.element(el);
    if (keys) {
      for (j = 0, len2 = keys.length; j < len2; j++) {
        if ((objs = index.map.get(keys[j]))) {
          for (k = 0, len3 = objs.length; k < len3; k++) {
            obj = objs[k];
            id = obj.id;
            if (!matchedIds[id] && this.matchesSelector(el, obj.selector)) {
              matchedIds[id] = true;
              matches.push(obj);
            }
          }
        }
      }
    }
  }

  return matches.sort(sortById);
};

;// CONCATENATED MODULE: ./node_modules/@unseenco/e/src/utils.js
/**
 * Holds the SelectorSets for each event type
 * @type {{}}
 */
const eventTypes = {}

/**
 * Holds Bus event stacks
 * @type {{}}
 */
const listeners = {}

/**
 * Events that don't bubble
 * @type {string[]}
 */
const nonBubblers = ['mouseenter', 'mouseleave']

/**
 * Make a bus stack if not already created.
 *
 * @param {string} event
 */
function makeBusStack(event) {
    if (listeners[event] === undefined) {
        listeners[event] = []
    }
}

/**
 * Trigger a bus stack.
 *
 * @param {string} event
 * @param args
 */
function triggerBus(event, args) {
    if (listeners[event]) {
        for (let i = 0; i < listeners[event].length; i++) {
            listeners[event][i](...args)
        }
    }
}

/**
 * Maybe run querySelectorAll if input is a string.
 *
 * @param {HTMLElement|string} el
 * @returns {NodeListOf<Element>}
 */
function maybeRunQuerySelector(el) {
    return typeof el === 'string' ? document.querySelectorAll(el) : el
}

/**
 * Handle delegated events
 *
 * @param {Event} e
 */
function handleDelegation(e) {
    let matches = traverse(eventTypes[e.type], e.target)

    if (matches.length) {
        for (let i = 0; i < matches.length; i++) {
            for (let i2 = 0; i2 < matches[i].stack.length; i2++) {
                if (nonBubblers.indexOf(e.type) !== -1) {
                    addDelegateTarget(e, matches[i].delegatedTarget)
                    if (e.target === matches[i].delegatedTarget) {
                        matches[i].stack[i2].data(e)
                    }
                } else {
                    addDelegateTarget(e, matches[i].delegatedTarget)
                    matches[i].stack[i2].data(e)
                }
            }
        }
    }
}

/**
 * Find a matching selector for delegation
 *
 * @param {SelectorSet} listeners
 * @param {HTMLElement|EventTarget} target
 * @returns {[]}
 */
function traverse(listeners, target) {
    const queue = []
    let node = target

    do {
        if (node.nodeType !== 1) {
            break
        }

        const matches = listeners.matches(node)

        if (matches.length) {
            queue.push({delegatedTarget: node, stack: matches})
        }
    } while ((node = node.parentElement))

    return queue
}

/**
 * Add delegatedTarget attribute to dispatched delegated events
 *
 * @param {Event} event
 * @param {HTMLElement} delegatedTarget
 */
function addDelegateTarget(event, delegatedTarget) {
    Object.defineProperty(event, 'currentTarget', {
        configurable: true,
        enumerable: true,
        value: delegatedTarget
    })
}

/**
 * Creates a deep clone of an object.
 *
 * @param object
 * @returns {object|array}
 */
function clone(object) {
    return JSON.parse(JSON.stringify(object))
}


;// CONCATENATED MODULE: ./node_modules/@unseenco/e/src/e.js



/**
 * Public API
 */
class E {
    /**
     * Binds all provided methods to a provided context.
     *
     * @param {object} context
     * @param {array} [methods] Optional.
     */
    bindAll(context, methods) {
        if (methods === undefined) {
            methods = Object.getOwnPropertyNames(Object.getPrototypeOf(context))
        }

        for (let i = 0; i < methods.length; i++) {
            context[methods[i]] = context[methods[i]].bind(context)
        }
    }

    /**
	 * Bind event to a string, NodeList, or element.
	 *
	 * @param {string} event
	 * @param {string|NodeList|HTMLElement|Window|Document|array} el
	 * @param {*} [callback]
	 * @param {{}|boolean} [options]
	 */
    on(event, el, callback, options) {
        if (typeof el === 'function' && callback === undefined) {
            makeBusStack(event)
            listeners[event].push(el)
            return
        }

        const events =  event.split(' ')

        for (let i = 0; i < events.length; i++) {
            if (el.nodeType && el.nodeType === 1 || el === window || el === document) {
                el.addEventListener(events[i], callback, options)
                continue
            }

            el = maybeRunQuerySelector(el)

            for (let n = 0; n < el.length; n++) {
                el[n].addEventListener(events[i], callback, options)
            }
        }
    }

    /**
     * Add a delegated event.
     *
     * @param {string} event
     * @param {string|NodeList|HTMLElement} delegate
     * @param {*} [callback]
     */
    delegate(event, delegate, callback) {
        const events =  event.split(' ')

        for (let i = 0; i < events.length; i++) {
            let map = eventTypes[events[i]]

            if (map === undefined) {
                map = new SelectorSet()
                eventTypes[events[i]] = map

                if (nonBubblers.indexOf(events[i]) !== -1) {
                    document.addEventListener(events[i], handleDelegation, true)
                } else {
                    document.addEventListener(events[i], handleDelegation)
                }
            }

            map.add(delegate, callback)
        }
    }

    /**
     * Remove a callback from a DOM element, or one or all Bus events.
     *
     * @param {string} event
     * @param {string|NodeList|HTMLElement|Undefined} [el]
     * @param {*} [callback]
     */
    off(event, el, callback) {
        if (el === undefined) {
            listeners[event] = []
            return
        }

        if (typeof el === 'function') {
            makeBusStack(event)

            for (let i = 0; i < listeners[event].length; i++) {
                if (listeners[event][i] === el) {
                    listeners[event].splice(i, 1)
                }
            }
            return
        }

        const events =  event.split(' ')

        for (let i = 0; i < events.length; i++) {
            const map = eventTypes[events[i]]

            if (map !== undefined) {
                map.remove(el, callback)

                if (map.size === 0) {
                    delete eventTypes[events[i]]
                    document.removeEventListener(events[i], handleDelegation)
                    continue
                }
            }

            if (el.removeEventListener !== undefined) {
                el.removeEventListener(events[i], callback)
                continue
            }

            el = maybeRunQuerySelector(el)

            for (let n = 0; n < el.length;n++) {
                el[n].removeEventListener(events[i], callback)
            }
        }
    }

    /**
     * Emit a DOM or Bus event.
     *
     * @param {string} event
     * @param {array} [args]
     */
    emit(event, ...args) {
        triggerBus(event, args)
    }

    /**
     * Return a clone of the delegated event stack for debugging.
     *
     * @returns {{}}
     */
    debugDelegated() {
        return clone(eventTypes)
    }

    /**
     * Return a clone of the bus event stack for debugging.
     *
     * @returns {array}
     */
    debugBus() {
        return clone(listeners)
    }
}

;// CONCATENATED MODULE: ./src/E.js

/* harmony default export */ const src_E = (new E());
;// CONCATENATED MODULE: ./src/Events.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Events {
  constructor(options = {}) {
    _defineProperty(this, "onRaf", () => {
      src_E.emit(Events.INTERNALRAF);
      if (this.options.disableRaf) return;
      requestAnimationFrame(this.onRaf);
    });

    this.options = options;
    this.addEvents();
  }

  addEvents() {
    if (!this.options.disableRaf) {
      requestAnimationFrame(this.onRaf);
    }

    if (!this.options.disableResize) {
      src_E.on('resize', window, debounce_default()(() => {
        this.onResize();
      }, 150));
    }

    this.onScroll();

    if ('ontouchstart' in document.documentElement) {
      (store_default()).isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

      this.detectMouse();
    }
  }

  onScroll() {
    src_E.on('wheel', window, e => {
      src_E.emit(Events.WHEEL, {
        event: e
      });
    }, {
      passive: false
    });
    src_E.on('scroll', window, e => {
      src_E.emit(Events.INTERNALSCROLL, {
        event: e
      });
    }, {
      passive: true
    });
  }

  onResize(windowWidth, windowHeight) {
    (store_default()).windowSize.w = windowWidth || window.innerWidth;
    (store_default()).windowSize.h = windowHeight || window.innerHeight;
    src_E.emit(Events.RESIZE);
  }

  detectMouse() {
    window.addEventListener('mousemove', function detectMouse(e) {
      if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
        // mouse has moved on touch screen, not just a tap firing mousemove
        (store_default()).isTouch = false;
        src_E.emit(Events.MOUSEDETECTED);
        window.removeEventListener('mousemove', detectMouse);
      }
    });
  }

}

_defineProperty(Events, "INTERNALRAF", 'raf:internal');

_defineProperty(Events, "EXTERNALRAF", 'raf:external');

_defineProperty(Events, "WHEEL", 'wheel');

_defineProperty(Events, "INTERNALSCROLL", 'scroll:internal');

_defineProperty(Events, "EXTERNALSCROLL", 'scroll:external');

_defineProperty(Events, "RESIZE", 'resize');

_defineProperty(Events, "MOUSEDETECTED", 'mouseDetected');

_defineProperty(Events, "SCROLLEND", 'scrollEnd');
;// CONCATENATED MODULE: ./src/Scrollbar.js
function Scrollbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Scrollbar {
  constructor(smoothScroll) {
    Scrollbar_defineProperty(this, "onMouseMove", e => {
      if (!this.mouseDown) return;
      const totalHeight = (store_default()).windowSize.h + (this.trueSize - this.handleHeight);
      this.smoothScroll.targetScrollPos = e.clientY / totalHeight * this.smoothScroll.maxScroll;
      this.smoothScroll.syncScroll = true;
      src_E.emit(Events.EXTERNALSCROLL, this.smoothScroll.targetScrollPos);
    });

    Scrollbar_defineProperty(this, "onMouseDown", () => {
      this.mouseDown = true;
      (store_default()).body.style.userSelect = 'none';
      (store_default()).body.style["-ms-user-select"] = 'none';
      this.el.classList.add('active');
    });

    Scrollbar_defineProperty(this, "onMouseUp", () => {
      this.mouseDown = false;
      store_default().body.style.removeProperty('user-select');
      store_default().body.style.removeProperty('-ms-user-select');
      this.el.classList.remove('active');
    });

    this.smoothScroll = smoothScroll;
    this.addHTML();
    this.el = document.querySelector(this.smoothScroll.options.scrollbarEl);
    this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl);
    this.addStyles();
    this.addEvents();
  }

  addEvents() {
    src_E.on('mousedown', this.handle, this.onMouseDown);
    src_E.on('mousemove', window, this.onMouseMove);
    src_E.on('mouseup', window, this.onMouseUp);
  }

  onResize() {
    this.scale = (-this.smoothScroll.maxScroll + (store_default()).windowSize.h) / (store_default()).windowSize.h;

    if (this.scale <= 1) {
      this.handle.style.height = 0;
      return;
    }

    this.trueSize = (store_default()).windowSize.h / this.scale;
    this.handleHeight = Math.max(this.trueSize, 40);
    this.handle.style.height = "".concat(this.handleHeight, "px");
  }

  transform() {
    const y = -this.smoothScroll.targetScrollPos / -this.smoothScroll.maxScroll * ((store_default()).windowSize.h - this.handleHeight);
    this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
  }

  show() {
    this.el.classList.add('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  addHTML() {
    if (document.querySelector(this.smoothScroll.options.scrollbarEl)) return;
    const div = document.createElement('div');
    div.classList.add(this.smoothScroll.options.scrollbarEl.substring(1));
    div.innerHTML = "<div class=\"".concat(this.smoothScroll.options.scrollbarHandleEl.substring(1), "\"><div></div></div>");
    document.body.appendChild(div);
  }

  addStyles() {
    if (!this.smoothScroll.options.disableNativeScrollbar && !this.smoothScroll.options.scrollbarStyles) return;
    let styles = '';

    if (this.smoothScroll.options.disableNativeScrollbar) {
      styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
    }

    if (this.smoothScroll.options.scrollbarStyles) {
      styles += "".concat(this.smoothScroll.options.scrollbarEl, " {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ").concat(this.smoothScroll.options.scrollbarEl, " {display: none;}").concat(this.smoothScroll.options.scrollbarEl, " > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div:hover {opacity: 0.9;}").concat(this.smoothScroll.options.scrollbarEl, ":hover > div, ").concat(this.smoothScroll.options.scrollbarEl, ".show > div, ").concat(this.smoothScroll.options.scrollbarEl, ".active > div {visibility: visible;}").concat(this.smoothScroll.options.scrollbarEl, ".active > div > div {opacity: 0.9;}");
    }

    const css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
  }

  destroy() {
    src_E.off('mousedown', this.handle, this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

}
;// CONCATENATED MODULE: ./src/Scroll.js
function Scroll_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Scroll {
  constructor(options = {}) {
    Scroll_defineProperty(this, "onScroll", ({
      event
    }) => {
      if (!this.scrolling) {
        this.options.customScrollbar && this.scrollbar.show();
        this.toggleIframes();
        this.scrolling = true;
      }

      if (!(store_default()).isTouch && event.type === 'wheel') {
        event.preventDefault();
        this.syncScroll = true;
        this.targetScrollPos += event.deltaY * -1;
      } else {
        if (this.preventResizeScroll) {
          this.preventResizeScroll = false;
          return;
        }

        if ((store_default()).isTouch && this.options.touchScrollType === 'scrollTop') {
          this.targetScrollPos = this.horizontalScroll ? -this.scrollContainer.scrollLeft : -this.scrollContainer.scrollTop;
        } else {
          this.targetScrollPos = -window.scrollY;
        }

        if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
          this.currentScrollPos = this.targetScrollPos;
        }
      }

      this.clamp();
      src_E.emit(Events.EXTERNALSCROLL, -this.targetScrollPos);
    });

    Scroll_defineProperty(this, "onRAF", () => {
      if (this.testFps && this.options.limitLerpRate) {
        this.time = performance.now() * 0.001;
        this.delta = Math.min((this.time - this.startTime) * 60, 1);
        this.startTime = this.time;
      }

      if (!this.render) return;

      if (Math.abs(this.targetScrollPos - this.currentScrollPos) < 0.5) {
        this.currentScrollPos = this.targetScrollPos;

        if (this.syncScroll) {
          this.syncScroll = false;
          window.scrollTo(0, -this.targetScrollPos);
          src_E.emit(Events.SCROLLEND, -this.targetScrollPos);
        }

        if (this.scrolling) {
          this.scrolling = false;
          this.options.customScrollbar && this.scrollbar.hide();
          this.toggleIframes(true);
        }
      } else {
        this.currentScrollPos += (this.targetScrollPos - this.currentScrollPos) * this.ease * this.delta;
      }

      const x = this.horizontalScroll ? this.currentScrollPos : 0;
      const y = this.horizontalScroll ? 0 : this.currentScrollPos;
      this.applyTransform(x, y);
      this.options.customScrollbar && this.scrollbar.transform();
      src_E.emit(Events.EXTERNALRAF, {
        targetScrollPos: -this.targetScrollPos,
        currentScrollPos: -this.currentScrollPos
      });
    });

    Scroll_defineProperty(this, "onResize", () => {
      if (this.scrollTargetsLength > 1) {
        const lastTarget = this.scrollTargets[this.scrollTargetsLength - 1];
        const compStyle = window.getComputedStyle(lastTarget);
        const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
        const bcr = lastTarget.getBoundingClientRect();
        const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom;
        this.scrollLength = endPosition + marginOffset - this.currentScrollPos;
      } else {
        this.scrollLength = this.horizontalScroll ? this.scrollTargets[0].scrollWidth : this.scrollTargets[0].scrollHeight;
      }

      const windowSize = this.horizontalScroll ? (store_default()).windowSize.w : (store_default()).windowSize.h;
      this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0;
      this.clamp();

      if (!this.firstResize) {
        this.preventResizeScroll = true;
      }

      (store_default()).body.style.height = this.scrollLength + 'px';
      this.options.customScrollbar && this.scrollbar.onResize();
      this.firstResize = false;
    });

    Scroll_defineProperty(this, "toggleFixedContainer", () => {
      this.scrollContainer.style.position = 'static';
      const scrollPos = this.currentScrollPos;
      this.applyTransform(0, 0);
      requestAnimationFrame(() => {
        this.scrollContainer.style.position = 'fixed';
        const x = this.horizontalScroll ? scrollPos : 0;
        const y = this.horizontalScroll ? 0 : scrollPos;
        this.applyTransform(x, y);
      });
    });

    this.options = options;
    this.scrollbarCheck = this.options.customScrollbar;
    this.scrollContainer = document.querySelector(this.options.element);
    const possibleScrollTargets = this.scrollContainer.querySelectorAll(this.options.innerElement);
    this.scrollTargets = possibleScrollTargets.length ? possibleScrollTargets : [this.scrollContainer.firstElementChild];
    this.scrollTargetsLength = this.scrollTargets.length;
    this.targetScrollPos = this.currentScrollPos = this.prevScrollPos = this.maxScroll = 0;
    this.enabled = false;
    this.render = false;
    this.scrolling = false;
    this.syncScroll = false;
    this.horizontalScroll = false;
    this.firstResize = true;
    this.preventResizeScroll = false;
    this.ease = (store_default()).isTouch ? this.options.touchEase : this.options.ease;
    this.testFps = true;
    this.delta = 1;
    this.time = this.startTime = performance.now();

    if ((store_default()).isTouch) {
      this.options.customScrollbar = false;

      if (this.options.touchScrollType === 'none') {
        console.log('no touch scroll');
      } else if (this.options.touchScrollType === 'transform') {
        this.setupSmoothScroll();
      } else if (this.options.touchScrollType === 'scrollTop') {
        document.documentElement.classList.add('asscroll-touch');
        src_E.on('scroll', this.scrollContainer, e => {
          src_E.emit(Events.INTERNALSCROLL, {
            event: e
          });
        }, {
          passive: true
        });
      }
    } else {
      this.setupSmoothScroll();
    }

    this.addEvents();
  }

  setupSmoothScroll() {
    Object.assign(this.scrollContainer.style, {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      contain: 'content'
    });

    if (this.options.customScrollbar) {
      this.scrollbar = new Scrollbar(this);
    }

    src_E.on(Events.INTERNALRAF, this.onRAF);
    src_E.on(Events.RESIZE, this.onResize);
    setTimeout(() => {
      this.testFps = false;
      this.delta = Math.round(this.delta * 10) * 0.1;
    }, 2000);
  }

  applyTransform(x, y) {
    for (let i = 0; i < this.scrollTargetsLength; i++) {
      this.scrollTargets[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
    }
  }

  enable({
    scrollTargets = false,
    reset = false,
    restore = false,
    horizontalScroll = false
  } = {}) {
    if (this.enabled) return;
    this.enabled = true;
    this.render = true;
    this.horizontalScroll = horizontalScroll;

    if (scrollTargets) {
      this.scrollTargets = scrollTargets.length ? scrollTargets : [scrollTargets];
      this.scrollTargetsLength = this.scrollTargets.length;
    }

    this.iframes = this.scrollContainer.querySelectorAll('iframe');

    if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
      store_default().body.style.removeProperty('height');
      this.maxScroll = -this.scrollContainer.scrollHeight;

      if (reset) {
        this.targetScrollPos = this.currentScrollPos = 0;
        this.scrollTo(0, false);
      }
    } else {
      this.firstResize = true;

      if (reset) {
        this.targetScrollPos = this.currentScrollPos = 0;
        this.applyTransform(0, 0);
      }

      this.onResize();
    }

    if (restore) {
      this.scrollTo(this.prevScrollPos, false);
    }

    src_E.on(Events.WHEEL, this.onScroll);
    src_E.on(Events.INTERNALSCROLL, this.onScroll);
  }

  disable({
    inputOnly = false
  } = {}) {
    if (!this.enabled) return;
    this.enabled = false;

    if (!inputOnly) {
      this.render = false;
    }

    src_E.off(Events.WHEEL, this.onScroll);
    src_E.off(Events.SCROLL, this.onScroll);
    this.prevScrollPos = this.targetScrollPos;
    (store_default()).body.style.height = '0px';
  }

  clamp() {
    this.targetScrollPos = Math.max(Math.min(this.targetScrollPos, 0), this.maxScroll);
  }

  scrollTo(y, emitEvent = true) {
    this.targetScrollPos = y;

    if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
      if (this.horizontalScroll) {
        this.scrollContainer.scrollTo(-this.targetScrollPos, 0);
      } else {
        this.scrollContainer.scrollTo(0, -this.targetScrollPos);
      }
    }

    this.clamp();
    this.syncScroll = true;
    if (emitEvent) src_E.emit(Events.EXTERNALSCROLL, -this.targetScrollPos);
  }

  toggleIframes(enable) {
    for (let i = 0; i < this.iframes.length; i++) {
      this.iframes[i].style.pointerEvents = enable ? 'auto' : 'none';
    }
  }

  blockScrollEvent(e) {
    e.stopPropagation();
  }

  addEvents() {
    // enable smooth scroll if mouse is detected
    src_E.on(Events.MOUSEDETECTED, () => {
      if (this.options.touchScrollType === 'transform') return;
      this.options.customScrollbar = this.scrollbarCheck;
      this.ease = this.options.ease;
      this.setupSmoothScroll();
      this.onResize();
    });

    if (!(store_default()).isTouch) {
      src_E.on('mouseleave', document, () => {
        window.scrollTo(0, -this.targetScrollPos);
      });
      src_E.on('keydown', window, e => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
          window.scrollTo(0, -this.targetScrollPos);
        }

        if (e.key === 'Tab') {
          this.toggleFixedContainer();
        }
      });
      src_E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer);
      src_E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent);
    }
  }

}
;// CONCATENATED MODULE: ./src/index.js
function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
* Ash's Smooth Scroll 🍑
*/

class ASScroll {
  /**
  * Creates an ASScroll instance
  *
  * @example
  * ```js
  * const asscroll = new ASScroll({
  * 	element: '.page-container',
  * 	innerElement: '.my-page'
  * })
  * ```
  *
  * @typicalname asscroll
  * @param {object} parameters
  * @param {string} [parameters.element=.asscroll-container] The selector string for the outer container element
  * @param {string} [parameters.innerElement=[data-asscroll]] The selector string for the inner element(s)
  * @param {number} [parameters.ease=0.075] The ease amount for the transform lerp
  * @param {number} [parameters.touchEase=1] The ease amount for the transform lerp on touch devices
  * @param {string} [parameters.touchScrollType=none] Set the scrolling method on touch devices. Other options are 'transform' and 'scrollTop'
  * @param {string} [parameters.scrollbarEl=.asscrollbar] The selector string for the custom scrollbar element
  * @param {string} [parameters.scrollbarHandleEl=.asscrollbar__handle] The selector string for the custom scrollbar handle element
  * @param {boolean} [parameters.customScrollbar=true] Toggle the custom scrollbar
  * @param {boolean} [parameters.scrollbarStyles=true] Include the scrollbar CSS via Javascript
  * @param {boolean} [parameters.disableNativeScrollbar=true] Disable the native browser scrollbar
  * @param {boolean} [parameters.disableRaf=false] Disable internal requestAnimationFrame loop in order to use an external one
  * @param {boolean} [parameters.disableResize=false] Disable internal resize event on the window in order to use an external one
  * @param {boolean} [parameters.limitLerpRate=true] Match lerp speed on >60Hz displays to that of a 60Hz display
  * @param {string} [parameters.blockScrollClass=.asscroll-block] The class to add to elements that should block ASScroll when hovered
  */
  constructor({
    element = '.asscroll-container',
    innerElement = '[data-asscroll]',
    ease = 0.075,
    touchEase = 1,
    touchScrollType = 'none',
    scrollbarEl = '.asscrollbar',
    scrollbarHandleEl = '.asscrollbar__handle',
    customScrollbar = true,
    scrollbarStyles = true,
    disableNativeScrollbar = true,
    disableRaf = false,
    disableResize = false,
    limitLerpRate = true,
    blockScrollClass = '.asscroll-block'
  } = {}) {
    src_defineProperty(this, "update", () => {
      this.Events.onRaf();
    });

    src_defineProperty(this, "resize", parameters => {
      this.Events.onResize(parameters);
    });

    this.Events = new Events({
      disableRaf,
      disableResize
    });
    this.Scroll = new Scroll({
      element,
      innerElement,
      ease,
      touchEase,
      customScrollbar,
      scrollbarEl,
      scrollbarHandleEl,
      scrollbarStyles,
      disableNativeScrollbar,
      touchScrollType,
      limitLerpRate,
      blockScrollClass
    });
  }
  /**
  * Enable ASScroll.
  *
  * @example <caption>Enables ASScroll on the '.page' element and resets the scroll position to 0</caption>
  * asscroll.enable({ scrollTargets: document.querySelector('.page'), reset: true })
  *
  * @param {object} parameters
  * @param {boolean|NodeList|HTMLElement} [parameters.scrollTargets = false] Specify the new element(s) that should be transformed
  * @param {boolean} [parameters.reset = false] Reset the scroll position to 0
  * @param {boolean} [parameters.restore = false] Restore the scroll position to where it was when disable() was called
  * @param {boolean} [parameters.horizontalScroll = false] Toggle horizontal scrolling
  */


  enable(parameters) {
    if (parameters !== undefined && typeof parameters !== 'object') {
      console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
    }

    this.Scroll.enable(parameters);
  }
  /**
  * Disable ASScroll.
  *
  * @example <caption>Disables the ability to manually scroll whilst still allowing position updates to be made via asscroll.currentScrollPos, for example</caption>
  * asscroll.disable({ inputOnly: true })
  *
  * @param {object} parameters
  * @param {boolean} [parameters.inputOnly = false] Only disable the ability to manually scroll (still allow transforms)
  */


  disable(parameters) {
    if (parameters !== undefined && typeof parameters !== 'object') {
      console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
    }

    this.Scroll.disable(parameters);
  }
  /**
  * Call the internal animation frame request callback.
  * @function
  */


  /**
  * Add an event listener.
  *
  * @example <caption>Logs out the scroll position when the 'scroll' event is fired</caption>
  * asscroll.on('scroll', scrollPos => console.log(scrollPos))
  *
  * @example <caption>Returns the target scroll position and current scroll position during the internal update loop</caption>
  * asscroll.on('update', ({ targetScrollPos, currentScrollPos }) => console.log(targetScrollPos, currentScrollPos))
  *
  * @example <caption>Fires when the lerped scroll position has reached the target position</caption>
  * asscroll.on('scrollEnd', scrollPos => console.log(scrollPos))
  *
  * @param {string} eventName Name of the event you wish to listen for
  * @param {function} cb Callback function that should be executed when the event fires
  */
  on(eventName, cb) {
    if (typeof cb !== 'function') {
      console.error('ASScroll: Function not provided as second parameter');
      return;
    }

    if (eventName === 'scroll') {
      src_E.on(Events.EXTERNALSCROLL, cb);
      return;
    }

    if (eventName === 'update') {
      src_E.on(Events.EXTERNALRAF, cb);
      return;
    }

    if (eventName === 'scrollEnd') {
      src_E.on(Events.SCROLLEND, cb);
      return;
    }

    console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
  }
  /**
  * Remove an event listener.
  * @param {string} eventName Name of the event
  * @param {function} cb Callback function
  */


  off(eventName, cb) {
    if (typeof cb !== 'function') {
      console.error('ASScroll: Function not provided as second parameter');
      return;
    }

    if (eventName === 'scroll') {
      src_E.off(Events.EXTERNALSCROLL, cb);
      return;
    }

    if (eventName === 'update') {
      src_E.off(Events.EXTERNALRAF, cb);
      return;
    }

    if (eventName === 'scrollEnd') {
      src_E.off(Events.SCROLLEND, cb);
      return;
    }

    console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
  }
  /**
  * Scroll to a given position on the page.
  * @param {number} targetScrollPos Scroll position
  * @param {boolean} [emitEvent=true] Whether to emit the external scroll events or not
  */


  scrollTo(targetScrollPos, emitEvent = true) {
    this.Scroll.scrollTo(-targetScrollPos, emitEvent);
  }
  /**
  * Returns the target scroll position.
  *
  * @example <caption>Returns the target scroll position</caption>
  * console.log(asscroll.targetScrollPos)
  * // 200
  *
  * @return {number} Target scroll position
  */


  get targetScrollPos() {
    return -this.Scroll.targetScrollPos;
  }
  /**
  * Gets or sets the current scroll position.
  *
  * @example <caption>Returns the current scroll position</caption>
  * console.log(asscroll.currentScrollPos)
  * // 157.245
  *
  * @example <caption>Sets the scroll position to 200, bypassing any lerps</caption>
  * asscroll.currentScrollPos = 200
  *
  * @param {number} scrollPos The desired scroll position
  * @return {number} Current scroll position
  */


  get currentScrollPos() {
    return -this.Scroll.currentScrollPos;
  }

  set currentScrollPos(scrollPos) {
    this.Scroll.targetScrollPos = this.Scroll.currentScrollPos = -scrollPos;
  }
  /**
  * Returns the maximum scroll height of the page.
  * @return {number} Maxmium scroll height
  */


  get maxScroll() {
    return -this.Scroll.maxScroll;
  }
  /**
   * Returns the outer element that ASScroll is attached to.
   * @return {HTMLElement} The outer element
   */


  get containerElement() {
    return this.Scroll.scrollContainer;
  }
  /**
   * Returns the the element(s) that ASScroll is scrolling.
   * @return {Array|NodeList} An array or NodeList of elements ASScroll is scrolling
   */


  get scrollTargets() {
    return this.Scroll.scrollTargets;
  }

}

/* harmony default export */ const src = (ASScroll);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});