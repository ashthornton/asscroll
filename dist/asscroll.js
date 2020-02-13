/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/index.scss":
/*!*************************!*\
  !*** ./demo/index.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/@unseenco/e/dist/e.min.js":
/*!************************************************!*\
  !*** ./node_modules/@unseenco/e/dist/e.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t){if("function"!=typeof window.WeakSet){var n=Date.now()%1e9;window.WeakSet=window.WeakSet||function(e){this.name="__st"+(1e9*Math.random()>>>0)+n+++"__",e&&e.forEach&&e.forEach(this.add,this)};var r=window.WeakSet.prototype;r.add=function(e){var t=this.name;return e[t]||Object.defineProperty(e,t,{value:!0,writable:!0}),this},r.delete=function(e){return!!e[this.name]&&(e[this.name]=void 0,!0)},r.has=function(e){return!!e[this.name]}}e.exports=window.WeakSet},function(e,t,n){"use strict";n.r(t);n(1);function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var i=window.document.documentElement,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return o.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var s=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(s))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var u,c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},u="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(e,t){var n,r,i,o,a,s,u=(e=e.slice(0).concat(e.default)).length,c=t,l=[];do{if(f.exec(""),(i=f.exec(c))&&(c=i[3],i[2]||!c))for(n=0;n<u;n++)if(a=(s=e[n]).selector(i[1])){for(r=l.length,o=!1;r--;)if(l[r].index===s&&l[r].key===a){o=!0;break}o||l.push({index:s,key:a});break}}while(i);return l}function d(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(i=e[n],t.isPrototypeOf(i))return i}function h(e,t){return e.id-t.id}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,o,a,s,c,f,h=this.activeIndexes,p=this.selectors;if("string"==typeof e){for(n={id:this.uid++,selector:e,data:t},c=l(this.indexes,e),r=0;r<c.length;r++)o=(f=c[r]).key,(a=d(h,i=f.index))||((a=Object.create(i)).map=new u,h.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(s=a.map.get(o))||(s=[],a.map.set(o,s)),s.push(n);this.size++,p.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,i,o,a,s,u,c,f=this.activeIndexes,d={},h=1===arguments.length;for(n=l(this.indexes,e),i=0;i<n.length;i++)for(r=n[i],o=f.length;o--;)if(s=f[o],r.index.isPrototypeOf(s)){if(u=s.map.get(r.key))for(a=u.length;a--;)(c=u[a]).selector!==e||!h&&c.data!==t||(u.splice(a,1),d[c.id]=!0);break}this.size-=Object.keys(d).length}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,i,o,a,s,u,c={},f=[],l=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=l.length;t<r;t++)for(o=l[t],n=0,i=(a=this.matches(o)).length;n<i;n++)c[(u=a[n]).id]?s=c[u.id]:(s={id:u.id,selector:u.selector,data:u.data,elements:[]},c[u.id]=s,f.push(s)),s.elements.push(o);return f.sort(h)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,i,o,a,s,u,c,f,l,d=this.activeIndexes,p={},v=[];for(t=0,i=d.length;t<i;t++)if(u=(s=d[t]).element(e))for(n=0,o=u.length;n<o;n++)if(c=s.map.get(u[n]))for(r=0,a=c.length;r<a;r++)!p[l=(f=c[r]).id]&&this.matchesSelector(e,f.selector)&&(p[l]=!0,v.push(f));return v.sort(h)},n.d(t,"default",(function(){return g}));var g=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E.add(this),O.add(this),S.add(this),k.add(this),x.add(this),w.set(this,{writable:!0,value:{}}),b.set(this,{writable:!0,value:{}}),j.set(this,{writable:!0,value:function(e){var n=m(t,O,W).call(t,y(t,w)[e.type],e.target);if(n.length)for(var r=0;r<n.length;r++)for(var i=0;i<n[r].stack.length;i++)m(t,E,F).call(t,e,n[r].delegatedTarget),n[r].stack[i].data(e)}})}var t,n,i;return t=e,(n=[{key:"bindAll",value:function(e,t){void 0===t&&(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(var n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}},{key:"on",value:function(e,t,n){if("function"==typeof t&&void 0===n)return m(this,S,T).call(this,e),void y(this,b)[e].push(t);if(t.nodeType&&1===t.nodeType)t.addEventListener(e,n);else{t=m(this,k,M).call(this,t);for(var r=0;r<t.length;r++)t[r].addEventListener(e,n)}}},{key:"delegate",value:function(e,t,n){var i=y(this,w)[e];void 0===i&&(i=new r,y(this,w)[e]=i,document.addEventListener(e,y(this,j),!0)),i.add(t,n)}},{key:"off",value:function(e,t,n){var r=y(this,w)[e];if(void 0!==t)if("function"!=typeof t){if(void 0!==r&&(r.remove(t,n),0===r.size))return delete y(this,w)[e],void document.removeEventListener(e,y(this,j));if(void 0===t.removeEventListener){t=m(this,k,M).call(this,t);for(var i=0;i<t.length;i++)t[i].removeEventListener(e,n)}else t.removeEventListener(e,n)}else{m(this,S,T).call(this,e);for(var o=0;o<y(this,b)[e].length;o++)y(this,b)[e][o]===t&&y(this,b)[e].splice(o,1)}else y(this,b)[e]=[]}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];m(this,x,A).call(this,e,n)}}])&&v(t.prototype,n),i&&v(t,i),e}(),w=new WeakMap,b=new WeakMap,x=new WeakSet,k=new WeakSet,S=new WeakSet,j=new WeakMap,O=new WeakSet,E=new WeakSet,A=function(e,t){if(y(this,b)[e])for(var n=0;n<y(this,b)[e].length;n++){var r;(r=y(this,b)[e])[n].apply(r,p(t))}},M=function(e){return"string"==typeof e?document.querySelectorAll(e):e},T=function(e){void 0===y(this,b)[e]&&(y(this,b)[e]=[])},W=function(e,t){var n=[],r=t;do{if(1!==r.nodeType)break;var i=e.matches(r);i.length&&n.push({delegatedTarget:r,stack:i})}while(r=r.parentElement);return n},F=function(e,t){Object.defineProperty(e,"delegatedTarget",{configurable:!0,enumerable:!0,value:t})}}])}));

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/E.js":
/*!******************!*\
  !*** ./src/E.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/e */ "./node_modules/@unseenco/e/dist/e.min.js");
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unseenco_e__WEBPACK_IMPORTED_MODULE_0__);

var E = new _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (E);

/***/ }),

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Events =
/*#__PURE__*/
function () {
  function Events() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Events);

    this.options = options;
    _E__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll(this, ['onRaf']);
    _Store__WEBPACK_IMPORTED_MODULE_1___default.a.events = {
      RAF: 'RAF',
      EXTERNALRAF: 'ExternalRAF',
      SCROLL: 'Scroll',
      WHEEL: 'Wheel',
      COMBOSCROLL: 'ComboScroll',
      RESIZE: 'Resize',
      TOUCHMOUSE: 'TouchMouse'
    };
    this.addEvents();
  }

  _createClass(Events, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      if (!this.options.disableRaf) {
        requestAnimationFrame(this.onRaf);
      }

      if (!this.options.disableResize) {
        window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
          return _this.onResize;
        }, 150));
      }

      this.onScroll();

      if ('ontouchstart' in document.documentElement) {
        _Store__WEBPACK_IMPORTED_MODULE_1___default.a.isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

        this.detectMouse();
      }
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.RAF);
      if (this.options.disableRaf) return;
      requestAnimationFrame(this.onRaf);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      window.addEventListener('wheel', function (e) {
        _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.WHEEL, {
          event: e
        });
      }, {
        passive: false
      });
      window.addEventListener('scroll', function (e) {
        _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.SCROLL, {
          event: e
        });
      }, {
        passive: true
      });
    }
  }, {
    key: "onResize",
    value: function onResize(windowWidth, windowHeight) {
      _Store__WEBPACK_IMPORTED_MODULE_1___default.a.windowSize.w = windowWidth || window.innerWidth;
      _Store__WEBPACK_IMPORTED_MODULE_1___default.a.windowSize.h = windowHeight || window.innerHeight;
      _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.RESIZE);
    }
  }, {
    key: "detectMouse",
    value: function detectMouse() {
      window.addEventListener('mousemove', function detectMouse(e) {
        if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
          // mouse has moved on touch screen, not just a tap firing mousemove
          _Store__WEBPACK_IMPORTED_MODULE_1___default.a.isTouch = false;
          console.log('test');
          _E__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_1___default.a.events.TOUCHMOUSE);
          window.removeEventListener('mousemove', detectMouse);
        }
      });
    }
  }]);

  return Events;
}();



/***/ }),

/***/ "./src/Scroll.js":
/*!***********************!*\
  !*** ./src/Scroll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./E */ "./src/E.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Scroll);

    this.options = options;
    this.scrollbarCheck = this.options.customScrollbar;
    _E__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll(this, ['onScroll', 'onRAF', 'onResize']);
    this.scrollTarget = document.querySelector(this.options.element);
    this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0;
    this.scrolling = false;
    this.syncScroll = false;
    this.ffmultiplier = navigator.platform === 'Win32' && navigator.userAgent.indexOf('Firefox') > -1 ? 40 : 1;

    if (!_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
      this.smoothSetup();
    } else {
      this.options.customScrollbar = false;
    } // enable smooth scroll if mouse is detected


    _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.TOUCHMOUSE, function () {
      _this.options.customScrollbar = _this.scrollbarCheck;

      _this.smoothSetup();

      _this.onResize();
    });
  }

  _createClass(Scroll, [{
    key: "smoothSetup",
    value: function smoothSetup() {
      Object.assign(this.scrollTarget.style, {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%'
      });

      if (this.options.customScrollbar) {
        this.scrollbar = new _Scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      }

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RAF, this.onRAF);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RESIZE, this.onResize);
    }
  }, {
    key: "onScroll",
    value: function onScroll(_ref) {
      var event = _ref.event;

      if (!this.scrolling) {
        this.options.customScrollbar && this.scrollbar.show();
        this.scrolling = true;
      }

      if (!_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch && event.type === 'wheel') {
        event.preventDefault();
        this.scrollPos += event.deltaY * this.ffmultiplier * -1;
        this.clamp();
        this.syncScroll = true;
        _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
        return;
      } else {
        this.scrollPos = -window.scrollY;

        if (_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
          this.smoothScrollPos = this.scrollPos;
        }

        _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
      }
    }
  }, {
    key: "onRAF",
    value: function onRAF() {
      if (!this.enabled) return;

      if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
        this.smoothScrollPos = this.scrollPos;

        if (this.syncScroll) {
          window.scrollTo(0, -this.scrollPos);
          this.syncScroll = false;
        }

        if (this.scrolling) {
          this.options.customScrollbar && this.scrollbar.hide();
          this.scrolling = false;
        }
      } else {
        this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.options.ease;
      }

      this.scrollTarget.style.transform = "translate3d(0px, ".concat(this.smoothScrollPos, "px, 0px)");
      this.options.customScrollbar && this.scrollbar.transform();
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, {
        scrollPos: this.scrollPos,
        smoothScrollPos: this.smoothScrollPos
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      var restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.enabled) return;
      this.enabled = true;

      if (_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
        _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('height');

        if (reset) {
          window.scrollTo(0, 0);
        }
      } else {
        if (reset) {
          this.scrollPos = this.smoothScrollPos = 0;
          this.scrollTarget.style.transform = "translate3d(0px, 0px, 0px)";
        }

        this.onResize();
      }

      if (restore) {
        this.scrollPos = this.prevScrollPos;
        window.scrollTo(0, -this.prevScrollPos);
      }

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.enabled) return;
      this.enabled = false;
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
      this.prevScrollPos = this.scrollPos;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = '0px';
    }
  }, {
    key: "clamp",
    value: function clamp() {
      this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      this.scrollPos = y;
      this.clamp();
      this.syncScroll = true;
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.scrollPos);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.pageHeight = this.scrollTarget.clientHeight;
      this.maxScroll = this.pageHeight > _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h ? -(this.pageHeight - _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) : 0;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = this.pageHeight + 'px';
      this.options.customScrollbar && this.scrollbar.onResize();
    }
  }]);

  return Scroll;
}();



/***/ }),

/***/ "./src/Scrollbar.js":
/*!**************************!*\
  !*** ./src/Scrollbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrollbar; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Scrollbar =
/*#__PURE__*/
function () {
  function Scrollbar(smoothScroll) {
    _classCallCheck(this, Scrollbar);

    _E__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp']);
    this.smoothScroll = smoothScroll;
    this.el = document.querySelector(this.smoothScroll.options.scrollbarEl);
    this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl);
    this.addStyles();
    this.addEvents();
  }

  _createClass(Scrollbar, [{
    key: "addEvents",
    value: function addEvents() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on('mousedown', this.handle, this.onMouseDown);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.scale = (-this.smoothScroll.maxScroll + _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) / _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h;

      if (this.scale <= 1) {
        this.handle.style.height = 0;
        return;
      }

      this.handleHeight = _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h / this.scale;
      this.handleHalfHeight = this.handleHeight / 2;
      this.handle.style.height = "".concat(this.handleHeight, "px");
    }
  }, {
    key: "transform",
    value: function transform() {
      this.handle.style.transform = "translate3d(0, ".concat(-this.smoothScroll.scrollPos / this.scale, "px, 0)");
    }
  }, {
    key: "show",
    value: function show() {
      this.el.classList.add('show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.classList.remove('show');
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (!this.mouseDown) return;
      this.smoothScroll.scrollPos = (-e.clientY + this.handleHalfHeight) * this.scale;
      this.smoothScroll.clamp();
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, this.smoothScroll.scrollPos);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {
      this.mouseDown = true;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.userSelect = 'none';
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style['-ms-user-select'] = 'none';
      this.el.classList.add('active');
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.mouseDown = false;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('user-select');
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.removeProperty('-ms-user-select');
      this.el.classList.remove('active');
    }
  }, {
    key: "addStyles",
    value: function addStyles() {
      if (!this.smoothScroll.options.disableNativeScrollbar && !this.smoothScroll.options.scrollbarStyles) return;
      var styles = '';

      if (this.smoothScroll.options.disableNativeScrollbar) {
        styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
      }

      if (this.smoothScroll.options.scrollbarStyles) {
        styles += "".concat(this.smoothScroll.options.scrollbarEl, " {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ").concat(this.smoothScroll.options.scrollbarEl, " {display: none;}").concat(this.smoothScroll.options.scrollbarEl, " > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div:hover {opacity: 0.9;}").concat(this.smoothScroll.options.scrollbarEl, ":hover > div, ").concat(this.smoothScroll.options.scrollbarEl, ".show > div, ").concat(this.smoothScroll.options.scrollbarEl, ".active > div {visibility: visible;}").concat(this.smoothScroll.options.scrollbarEl, ".active > div > div {opacity: 0.9;}");
      }

      var css = document.createElement('style');
      css.type = 'text/css';
      if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
      document.getElementsByTagName("head")[0].appendChild(css);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off('mousedown', this.handle, this.onMouseDown);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
    }
  }]);

  return Scrollbar;
}();



/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var Store = {
  html: document.documentElement,
  body: document.body,
  windowSize: {
    w: window.innerWidth,
    h: window.innerHeight
  }
};
module.exports = Store;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ASScroll; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./src/Events.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scroll */ "./src/Scroll.js");
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./E */ "./src/E.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ASScroll =
/*#__PURE__*/
function () {
  function ASScroll() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$element = _ref.element,
        element = _ref$element === void 0 ? '.asscroll-container' : _ref$element,
        _ref$ease = _ref.ease,
        ease = _ref$ease === void 0 ? 0.075 : _ref$ease,
        _ref$customScrollbar = _ref.customScrollbar,
        customScrollbar = _ref$customScrollbar === void 0 ? false : _ref$customScrollbar,
        _ref$scrollbarEl = _ref.scrollbarEl,
        scrollbarEl = _ref$scrollbarEl === void 0 ? '.asscrollbar' : _ref$scrollbarEl,
        _ref$scrollbarHandleE = _ref.scrollbarHandleEl,
        scrollbarHandleEl = _ref$scrollbarHandleE === void 0 ? '.asscrollbar__handle' : _ref$scrollbarHandleE,
        _ref$scrollbarStyles = _ref.scrollbarStyles,
        scrollbarStyles = _ref$scrollbarStyles === void 0 ? true : _ref$scrollbarStyles,
        _ref$disableNativeScr = _ref.disableNativeScrollbar,
        disableNativeScrollbar = _ref$disableNativeScr === void 0 ? true : _ref$disableNativeScr,
        _ref$disableRaf = _ref.disableRaf,
        disableRaf = _ref$disableRaf === void 0 ? false : _ref$disableRaf,
        _ref$disableResize = _ref.disableResize,
        disableResize = _ref$disableResize === void 0 ? false : _ref$disableResize;

    _classCallCheck(this, ASScroll);

    _E__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll(this, ['enable', 'disable', 'on', 'scrollTo', 'onRaf', 'onResize']);
    this.Events = new _Events__WEBPACK_IMPORTED_MODULE_1__["default"]({
      disableRaf: disableRaf,
      disableResize: disableResize
    });
    this.Scroll = new _Scroll__WEBPACK_IMPORTED_MODULE_2__["default"]({
      element: element,
      ease: ease,
      customScrollbar: customScrollbar,
      scrollbarEl: scrollbarEl,
      scrollbarHandleEl: scrollbarHandleEl,
      scrollbarStyles: scrollbarStyles,
      disableNativeScrollbar: disableNativeScrollbar
    });
  }

  _createClass(ASScroll, [{
    key: "enable",
    value: function enable() {
      var _this$Scroll;

      (_this$Scroll = this.Scroll).enable.apply(_this$Scroll, arguments);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.Scroll.disable();
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      this.Events.onRaf();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _this$Events;

      (_this$Events = this.Events).onResize.apply(_this$Events, arguments);
    }
  }, {
    key: "on",
    value: function on(eventName, cb) {
      if (eventName === 'scroll') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, cb);
      }
    }
  }, {
    key: "off",
    value: function off(eventName, cb) {
      if (eventName === 'scroll') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        _E__WEBPACK_IMPORTED_MODULE_3__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.EXTERNALRAF, cb);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      this.Scroll.scrollTo(-y);
    }
  }, {
    key: "scrollPos",
    get: function get() {
      return this.Scroll.scrollPos;
    }
  }, {
    key: "smoothScrollPos",
    get: function get() {
      return this.Scroll.smoothScrollPos;
    }
  }]);

  return ASScroll;
}();



/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/index.js ./demo/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\asscroll\src\index.js */"./src/index.js");
module.exports = __webpack_require__(/*! C:\laragon\www\asscroll\demo\index.scss */"./demo/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=asscroll.js.map