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

/***/ "./node_modules/@unseenco/e/dist/e.min.js":
/*!************************************************!*\
  !*** ./node_modules/@unseenco/e/dist/e.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t){if("function"!=typeof window.WeakSet){var n=Date.now()%1e9;window.WeakSet=window.WeakSet||function(e){this.name="__st"+(1e9*Math.random()>>>0)+n+++"__",e&&e.forEach&&e.forEach(this.add,this)};var r=window.WeakSet.prototype;r.add=function(e){var t=this.name;return e[t]||Object.defineProperty(e,t,{value:!0,writable:!0}),this},r.delete=function(e){return!!e[this.name]&&(e[this.name]=void 0,!0)},r.has=function(e){return!!e[this.name]}}e.exports=window.WeakSet},function(e,t,n){"use strict";n.r(t);n(1);function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var i=window.document.documentElement,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return o.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var s=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(s))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var u,c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},u="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(e,t){var n,r,i,o,a,s,u=(e=e.slice(0).concat(e.default)).length,c=t,l=[];do{if(f.exec(""),(i=f.exec(c))&&(c=i[3],i[2]||!c))for(n=0;n<u;n++)if(a=(s=e[n]).selector(i[1])){for(r=l.length,o=!1;r--;)if(l[r].index===s&&l[r].key===a){o=!0;break}o||l.push({index:s,key:a});break}}while(i);return l}function d(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(i=e[n],t.isPrototypeOf(i))return i}function h(e,t){return e.id-t.id}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,o,a,s,c,f,h=this.activeIndexes,p=this.selectors;if("string"==typeof e){for(n={id:this.uid++,selector:e,data:t},c=l(this.indexes,e),r=0;r<c.length;r++)o=(f=c[r]).key,(a=d(h,i=f.index))||((a=Object.create(i)).map=new u,h.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(s=a.map.get(o))||(s=[],a.map.set(o,s)),s.push(n);this.size++,p.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,i,o,a,s,u,c,f=this.activeIndexes,d={},h=1===arguments.length;for(n=l(this.indexes,e),i=0;i<n.length;i++)for(r=n[i],o=f.length;o--;)if(s=f[o],r.index.isPrototypeOf(s)){if(u=s.map.get(r.key))for(a=u.length;a--;)(c=u[a]).selector!==e||!h&&c.data!==t||(u.splice(a,1),d[c.id]=!0);break}this.size-=Object.keys(d).length}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,i,o,a,s,u,c={},f=[],l=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=l.length;t<r;t++)for(o=l[t],n=0,i=(a=this.matches(o)).length;n<i;n++)c[(u=a[n]).id]?s=c[u.id]:(s={id:u.id,selector:u.selector,data:u.data,elements:[]},c[u.id]=s,f.push(s)),s.elements.push(o);return f.sort(h)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,i,o,a,s,u,c,f,l,d=this.activeIndexes,p={},v=[];for(t=0,i=d.length;t<i;t++)if(u=(s=d[t]).element(e))for(n=0,o=u.length;n<o;n++)if(c=s.map.get(u[n]))for(r=0,a=c.length;r<a;r++)!p[l=(f=c[r]).id]&&this.matchesSelector(e,f.selector)&&(p[l]=!0,v.push(f));return v.sort(h)},n.d(t,"default",(function(){return g}));var g=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E.add(this),O.add(this),S.add(this),k.add(this),x.add(this),w.set(this,{writable:!0,value:{}}),b.set(this,{writable:!0,value:{}}),j.set(this,{writable:!0,value:function(e){var n=m(t,O,W).call(t,y(t,w)[e.type],e.target);if(n.length)for(var r=0;r<n.length;r++)for(var i=0;i<n[r].stack.length;i++)m(t,E,F).call(t,e,n[r].delegatedTarget),n[r].stack[i].data(e)}})}var t,n,i;return t=e,(n=[{key:"bindAll",value:function(e,t){void 0===t&&(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(var n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}},{key:"on",value:function(e,t,n){if("function"==typeof t&&void 0===n)return m(this,S,T).call(this,e),void y(this,b)[e].push(t);if(t.nodeType&&1===t.nodeType)t.addEventListener(e,n);else{t=m(this,k,M).call(this,t);for(var r=0;r<t.length;r++)t[r].addEventListener(e,n)}}},{key:"delegate",value:function(e,t,n){var i=y(this,w)[e];void 0===i&&(i=new r,y(this,w)[e]=i,document.addEventListener(e,y(this,j),!0)),i.add(t,n)}},{key:"off",value:function(e,t,n){var r=y(this,w)[e];if(void 0!==t)if("function"!=typeof t){if(void 0!==r&&(r.remove(t,n),0===r.size))return delete y(this,w)[e],void document.removeEventListener(e,y(this,j));if(void 0===t.removeEventListener){t=m(this,k,M).call(this,t);for(var i=0;i<t.length;i++)t[i].removeEventListener(e,n)}else t.removeEventListener(e,n)}else{m(this,S,T).call(this,e);for(var o=0;o<y(this,b)[e].length;o++)y(this,b)[e][o]===t&&y(this,b)[e].splice(o,1)}else y(this,b)[e]=[]}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];m(this,x,A).call(this,e,n)}}])&&v(t.prototype,n),i&&v(t,i),e}(),w=new WeakMap,b=new WeakMap,x=new WeakSet,k=new WeakSet,S=new WeakSet,j=new WeakMap,O=new WeakSet,E=new WeakSet,A=function(e,t){if(y(this,b)[e])for(var n=0;n<y(this,b)[e].length;n++){var r;(r=y(this,b)[e])[n].apply(r,p(t))}},M=function(e){return"string"==typeof e?document.querySelectorAll(e):e},T=function(e){void 0===y(this,b)[e]&&(y(this,b)[e]=[])},W=function(e,t){var n=[],r=t;do{if(1!==r.nodeType)break;var i=e.matches(r);i.length&&n.push({delegatedTarget:r,stack:i})}while(r=r.parentElement);return n},F=function(e,t){Object.defineProperty(e,"delegatedTarget",{configurable:!0,enumerable:!0,value:t})}}])}));

/***/ }),

/***/ "./src/ASScroll.js":
/*!*************************!*\
  !*** ./src/ASScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ASScroll; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./E */ "./src/E.js");
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scrollbar */ "./src/Scrollbar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ASScroll =
/*#__PURE__*/
function () {
  function ASScroll() {
    var _this = this;

    _classCallCheck(this, ASScroll);

    _E__WEBPACK_IMPORTED_MODULE_1__["default"].bindAll(this, ['onScroll', 'onRAF', 'onResize']);
    this.ease = 0.1;
    this.scrollPos = this.smoothScrollPos = this.prevScrollPos = 0;
    this.maxScroll = 0;
    this.scrollTarget = document.getElementById('scroll-container');
    this.scrolling = false;
    this.syncScroll = false;
    this.ffmultiplier = 1;

    if (navigator.userAgent.indexOf('Firefox') > -1) {
      this.ffmultiplier = 40;
    }

    this.scrollbar = new _Scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RAF, this.onRAF);
    _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RESIZE, this.onResize); // disable smooth scroll if touch is detected

    _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.TOUCHDETECTED, function () {
      document.body.style.removeProperty('height');

      _this.scrollTarget.style.removeProperty('transform');

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RESIZE, _this.onResize);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.RAF, _this.onRAF);
      _this.smoothScrollPos = 0;
    });
  }

  _createClass(ASScroll, [{
    key: "onScroll",
    value: function onScroll(_ref) {
      var event = _ref.event;

      if (!this.scrolling) {
        this.scrollbar.toggle();
        this.scrolling = true;
      }

      if (event.type === 'wheel') {
        event.preventDefault();
        this.scrollPos += event.deltaY * this.ffmultiplier * -1;
        this.clamp();
        this.syncScroll = true;
        return;
      } else {
        this.scrollPos = -window.scrollY;
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
          this.scrollbar.toggle();
          this.scrolling = false;
        }
      } else {
        this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.ease;
      }

      this.scrollTarget.style.transform = "translate3d(0px, ".concat(this.smoothScrollPos, "px, 0px)");
      this.scrollbar.transform();
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.enabled) return;
      this.enabled = false;

      if (!_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
        _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
        _E__WEBPACK_IMPORTED_MODULE_1__["default"].off(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
      }

      this.prevScrollPos = this.scrollPos;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = '0px';
    }
  }, {
    key: "enable",
    value: function enable(restoreScrollPos, resetScrollPos) {
      if (this.enabled) return;
      this.enabled = true;

      if (_Store__WEBPACK_IMPORTED_MODULE_0___default.a.isTouch) {
        _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height.removeProperty('height');
        this.scrollTarget.style.removeProperty('transform');
      } else {
        if (resetScrollPos) {
          this.scrollPos = this.smoothScrollPos = 0;
          this.scrollTarget.style.transform = "translate3d(0px, 0px, 0px)";
        }

        this.onResize();
      }

      if (restoreScrollPos) {
        this.scrollPos = this.prevScrollPos;
        window.scrollTo(0, -this.prevScrollPos);
      }

      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.WHEEL, this.onScroll);
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on(_Store__WEBPACK_IMPORTED_MODULE_0___default.a.events.SCROLL, this.onScroll);
    }
  }, {
    key: "clamp",
    value: function clamp() {
      this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.pageHeight = this.scrollTarget.clientHeight;
      this.maxScroll = this.pageHeight > _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h ? -(this.pageHeight - _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) : 0;
      _Store__WEBPACK_IMPORTED_MODULE_0___default.a.body.style.height = this.pageHeight + 'px';
      this.scrollbar.onResize();
    }
  }]);

  return ASScroll;
}();



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
    this.el = document.getElementById('scrollbar');
    this.bar = document.getElementById('scrollbar__bar');
    this.addEvents();
  }

  _createClass(Scrollbar, [{
    key: "addEvents",
    value: function addEvents() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].on('mousedown', this.bar, this.onMouseDown);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.scale = (-this.smoothScroll.maxScroll + _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h) / _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h;

      if (this.scale <= 1) {
        this.bar.style.height = 0;
        return;
      }

      this.barHeight = _Store__WEBPACK_IMPORTED_MODULE_0___default.a.windowSize.h / this.scale;
      this.barHalfHeight = this.barHeight / 2;
      this.bar.style.height = "".concat(this.barHeight, "px");
    }
  }, {
    key: "transform",
    value: function transform() {
      this.bar.style.transform = "translate3d(0, ".concat(-this.smoothScroll.scrollPos / this.scale, "px, 0)");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.el.classList.toggle('show');
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (!this.mouseDown) return;
      this.smoothScroll.scrollPos = (-e.clientY + this.barHalfHeight) * this.scale;
      this.smoothScroll.clamp();
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
    key: "destroy",
    value: function destroy() {
      _E__WEBPACK_IMPORTED_MODULE_1__["default"].off('mousedown', this.bar, this.onMouseDown);
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
  windowSize: {
    w: window.innerWidth,
    h: window.innerHeight,
    dpr: window.devicePixelRatio
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
/* harmony import */ var _ASScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ASScroll */ "./src/ASScroll.js");

/* harmony default export */ __webpack_exports__["default"] = (_ASScroll__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\asscroll\src\index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=asscroll.js.map