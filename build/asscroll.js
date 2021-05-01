(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ASScroll", [], factory);
	else if(typeof exports === 'object')
		exports["ASScroll"] = factory();
	else
		root["ASScroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var definePropertyModule = __webpack_require__(10);
var createPropertyDescriptor = __webpack_require__(7);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(17);
var requireObjectCoercible = __webpack_require__(19);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(20);
var anObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(9);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var createNonEnumerableProperty = __webpack_require__(6);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var shared = __webpack_require__(24);
var has = __webpack_require__(4);
var uid = __webpack_require__(25);
var NATIVE_SYMBOL = __webpack_require__(35);
var USE_SYMBOL_AS_UID = __webpack_require__(54);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(14);
var fails = __webpack_require__(2);
var isArray = __webpack_require__(33);
var isObject = __webpack_require__(3);
var toObject = __webpack_require__(34);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(52);
var arraySpeciesCreate = __webpack_require__(53);
var arrayMethodHasSpeciesSupport = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(12);
var V8_VERSION = __webpack_require__(36);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var getOwnPropertyDescriptor = __webpack_require__(15).f;
var createNonEnumerableProperty = __webpack_require__(6);
var redefine = __webpack_require__(40);
var setGlobal = __webpack_require__(11);
var copyConstructorProperties = __webpack_require__(45);
var isForced = __webpack_require__(51);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var propertyIsEnumerableModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(7);
var toIndexedObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(9);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(20);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var classof = __webpack_require__(18);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(2);
var createElement = __webpack_require__(39);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var setGlobal = __webpack_require__(11);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(44);
var store = __webpack_require__(23);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(47);
var global = __webpack_require__(1);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIndexedObject = __webpack_require__(8);
var indexOf = __webpack_require__(49).indexOf;
var hiddenKeys = __webpack_require__(26);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(18);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(19);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var userAgent = __webpack_require__(56);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function debounce(fn, delay) {
  var timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    var args = arguments;
    var that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
};

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var isObject = __webpack_require__(3);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var createNonEnumerableProperty = __webpack_require__(6);
var has = __webpack_require__(4);
var setGlobal = __webpack_require__(11);
var inspectSource = __webpack_require__(22);
var InternalStateModule = __webpack_require__(41);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(42);
var global = __webpack_require__(1);
var isObject = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(6);
var objectHas = __webpack_require__(4);
var sharedKey = __webpack_require__(43);
var hiddenKeys = __webpack_require__(26);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var inspectSource = __webpack_require__(22);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24);
var uid = __webpack_require__(25);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var ownKeys = __webpack_require__(46);
var getOwnPropertyDescriptorModule = __webpack_require__(15);
var definePropertyModule = __webpack_require__(10);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(27);
var getOwnPropertyNamesModule = __webpack_require__(48);
var getOwnPropertySymbolsModule = __webpack_require__(32);
var anObject = __webpack_require__(21);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

module.exports = global;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(31);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(8);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(50);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(9);
var definePropertyModule = __webpack_require__(10);
var createPropertyDescriptor = __webpack_require__(7);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var isArray = __webpack_require__(33);
var wellKnownSymbol = __webpack_require__(12);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(35);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(12);
var V8_VERSION = __webpack_require__(36);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(27);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(14);
var assign = __webpack_require__(58);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(2);
var objectKeys = __webpack_require__(59);
var getOwnPropertySymbolsModule = __webpack_require__(32);
var propertyIsEnumerableModule = __webpack_require__(16);
var toObject = __webpack_require__(34);
var IndexedObject = __webpack_require__(17);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(31);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/Store.js
var Store = __webpack_require__(0);
var Store_default = /*#__PURE__*/__webpack_require__.n(Store);

// EXTERNAL MODULE: ./src/utils/debounce.js
var debounce = __webpack_require__(37);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./node_modules/selector-set/selector-set.next.js
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

// CONCATENATED MODULE: ./node_modules/@unseenco/e/src/utils.js
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


// CONCATENATED MODULE: ./node_modules/@unseenco/e/src/e.js



/**
 * Public API
 */
class e_E {
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

// CONCATENATED MODULE: ./src/E.js

var E_E = new e_E();
/* harmony default export */ var src_E = (E_E);
// CONCATENATED MODULE: ./src/Events.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Events_Events = /*#__PURE__*/function () {
  function Events() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Events);

    this.options = options;
    src_E.bindAll(this, ['onRaf']);
    Store_default.a.eventNames = {
      RAF: 1,
      EXTERNALRAF: 2,
      SCROLL: 3,
      WHEEL: 4,
      COMBOSCROLL: 5,
      RESIZE: 6,
      TOUCHMOUSE: 7,
      SCROLLEND: 8
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
        src_E.on('resize', window, debounce_default()(function () {
          _this.onResize();
        }, 150));
      }

      this.onScroll();

      if ('ontouchstart' in document.documentElement) {
        Store_default.a.isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

        this.detectMouse();
      }
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      src_E.emit(Store_default.a.eventNames.RAF);
      if (this.options.disableRaf) return;
      requestAnimationFrame(this.onRaf);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      src_E.on('wheel', window, function (e) {
        src_E.emit(Store_default.a.eventNames.WHEEL, {
          event: e
        });
      }, {
        passive: false
      });
      src_E.on('scroll', window, function (e) {
        src_E.emit(Store_default.a.eventNames.SCROLL, {
          event: e
        });
      }, {
        passive: true
      });
    }
  }, {
    key: "onResize",
    value: function onResize(windowWidth, windowHeight) {
      Store_default.a.windowSize.w = windowWidth || window.innerWidth;
      Store_default.a.windowSize.h = windowHeight || window.innerHeight;
      src_E.emit(Store_default.a.eventNames.RESIZE);
    }
  }, {
    key: "detectMouse",
    value: function detectMouse() {
      window.addEventListener('mousemove', function detectMouse(e) {
        if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
          // mouse has moved on touch screen, not just a tap firing mousemove
          Store_default.a.isTouch = false;
          src_E.emit(Store_default.a.events.TOUCHMOUSE);
          window.removeEventListener('mousemove', detectMouse);
        }
      });
    }
  }]);

  return Events;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(57);

// CONCATENATED MODULE: ./src/Scrollbar.js


function Scrollbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Scrollbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Scrollbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Scrollbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Scrollbar_defineProperties(Constructor, staticProps); return Constructor; }




var Scrollbar_Scrollbar = /*#__PURE__*/function () {
  function Scrollbar(smoothScroll) {
    Scrollbar_classCallCheck(this, Scrollbar);

    src_E.bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp']);
    this.smoothScroll = smoothScroll;
    this.addHTML();
    this.el = document.querySelector(this.smoothScroll.options.scrollbarEl);
    this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl);
    this.addStyles();
    this.addEvents();
  }

  Scrollbar_createClass(Scrollbar, [{
    key: "addEvents",
    value: function addEvents() {
      src_E.on('mousedown', this.handle, this.onMouseDown);
      src_E.on('mousemove', window, this.onMouseMove);
      src_E.on('mouseup', window, this.onMouseUp);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.scale = (-this.smoothScroll.maxScroll + Store_default.a.windowSize.h) / Store_default.a.windowSize.h;

      if (this.scale <= 1) {
        this.handle.style.height = 0;
        return;
      }

      this.trueSize = Store_default.a.windowSize.h / this.scale;
      this.handleHeight = Math.max(this.trueSize, 40);
      this.handle.style.height = "".concat(this.handleHeight, "px");
    }
  }, {
    key: "transform",
    value: function transform() {
      var y = -this.smoothScroll.scrollPos / -this.smoothScroll.maxScroll * (Store_default.a.windowSize.h - this.handleHeight);
      this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
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
      var totalHeight = Store_default.a.windowSize.h + (this.trueSize - this.handleHeight);
      this.smoothScroll.scrollPos = e.clientY / totalHeight * this.smoothScroll.maxScroll;
      this.smoothScroll.syncScroll = true;
      src_E.emit(Store_default.a.eventNames.COMBOSCROLL, this.smoothScroll.scrollPos);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {
      this.mouseDown = true;
      Store_default.a.body.style.userSelect = 'none';
      Store_default.a.body.style['-ms-user-select'] = 'none';
      this.el.classList.add('active');
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.mouseDown = false;
      Store_default.a.body.style.removeProperty('user-select');
      Store_default.a.body.style.removeProperty('-ms-user-select');
      this.el.classList.remove('active');
    }
  }, {
    key: "addHTML",
    value: function addHTML() {
      if (!!document.querySelector(this.smoothScroll.options.scrollbarEl)) return;
      var div = document.createElement('div');
      div.classList.add(this.smoothScroll.options.scrollbarEl.substring(1));
      div.innerHTML = "<div class=\"".concat(this.smoothScroll.options.scrollbarHandleEl.substring(1), "\"><div></div></div>");
      document.body.appendChild(div);
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
      src_E.off('mousedown', this.handle, this.onMouseDown);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
    }
  }]);

  return Scrollbar;
}();


// CONCATENATED MODULE: ./src/Scroll.js



function Scroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Scroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Scroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) Scroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) Scroll_defineProperties(Constructor, staticProps); return Constructor; }





var Scroll_Scroll = /*#__PURE__*/function () {
  function Scroll() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Scroll_classCallCheck(this, Scroll);

    this.options = options;
    this.scrollbarCheck = this.options.customScrollbar;
    src_E.bindAll(this, ['onScroll', 'onRAF', 'onResize', 'toggleFixedContainer']);
    this.scrollContainer = document.querySelector(this.options.element);
    var possibleScrollTargets = this.scrollContainer.querySelectorAll(this.options.innerElement);
    this.scrollTargets = possibleScrollTargets.length ? possibleScrollTargets : [this.scrollContainer.firstElementChild];
    this.scrollTargetsLength = this.scrollTargets.length;
    this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0;
    this.enabled = false;
    this.render = false;
    this.scrolling = false;
    this.syncScroll = false;
    this.deltaY = 0;
    this.horizontalScroll = false;
    this.touchScroll = false;
    this.firstResize = true;
    this.preventResizeScroll = false;
    this.ease = Store_default.a.isTouch ? this.options.touchEase : this.options.ease;
    this.delta = 1;
    this.time = this.startTime = performance.now();

    if (!Store_default.a.isTouch || !this.options.disableOnTouch) {
      if (Store_default.a.isTouch) this.options.customScrollbar = false;
      this.smoothSetup();
    } else {
      this.touchScroll = true;
      document.documentElement.classList.add('asscroll-touch');
      this.options.customScrollbar = false;
      src_E.on('scroll', this.scrollContainer, function (e) {
        src_E.emit(Store_default.a.eventNames.SCROLL, {
          event: e
        });
      }, {
        passive: true
      });
    } // enable smooth scroll if mouse is detected


    src_E.on(Store_default.a.eventNames.TOUCHMOUSE, function () {
      if (!_this.options.disableOnTouch) return;
      _this.touchScroll = false;
      _this.options.customScrollbar = _this.scrollbarCheck;

      _this.smoothSetup();

      _this.onResize();
    });
    src_E.on('mouseleave', document, function () {
      window.scrollTo(0, -_this.scrollPos);
    });
    src_E.on('keydown', window, function (e) {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
        window.scrollTo(0, -_this.scrollPos);
      }

      if (e.key === 'Tab') {
        _this.toggleFixedContainer();
      }
    });
    src_E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer);
    src_E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent);
  }

  Scroll_createClass(Scroll, [{
    key: "smoothSetup",
    value: function smoothSetup() {
      Object.assign(this.scrollContainer.style, {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        contain: 'content'
      });

      if (this.options.customScrollbar) {
        this.scrollbar = new Scrollbar_Scrollbar(this);
      }

      src_E.on(Store_default.a.eventNames.RAF, this.onRAF);
      src_E.on(Store_default.a.eventNames.RESIZE, this.onResize);
    }
  }, {
    key: "onScroll",
    value: function onScroll(_ref) {
      var event = _ref.event;

      if (!this.scrolling) {
        this.options.customScrollbar && this.scrollbar.show();
        this.toggleIframes();
        this.scrolling = true;
      }

      if (!Store_default.a.isTouch && event.type === 'wheel') {
        event.preventDefault();
        this.deltaY = event.deltaY;
        this.syncScroll = true;
        this.scrollPos += this.deltaY * -1;
        this.clamp();
        src_E.emit(Store_default.a.eventNames.COMBOSCROLL, this.scrollPos);
        return;
      } else {
        if (this.preventResizeScroll) {
          this.preventResizeScroll = false;
          return;
        }

        if (this.touchScroll) {
          this.scrollPos = this.horizontalScroll ? -this.scrollContainer.scrollLeft : -this.scrollContainer.scrollTop;
        } else {
          this.scrollPos = -window.scrollY;
        }

        if (Store_default.a.isTouch && this.options.disableOnTouch) {
          this.smoothScrollPos = this.scrollPos;
        }

        this.clamp();
        src_E.emit(Store_default.a.eventNames.COMBOSCROLL, this.scrollPos);
      }
    }
  }, {
    key: "onRAF",
    value: function onRAF() {
      if (!this.render) return;

      if (this.options.limitLerpRate) {
        this.time = performance.now() * 0.001;
        this.delta = Math.min((this.time - this.startTime) * 60, 1);
        this.startTime = this.time;
      }

      if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
        this.smoothScrollPos = this.scrollPos;

        if (this.syncScroll) {
          this.syncScroll = false;
          window.scrollTo(0, -this.scrollPos);
          src_E.emit(Store_default.a.eventNames.SCROLLEND, this.scrollPos);
        }

        if (this.scrolling) {
          this.scrolling = false;
          this.options.customScrollbar && this.scrollbar.hide();
          this.toggleIframes(true);
        }
      } else {
        this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.ease * this.delta;
      }

      var x = this.horizontalScroll ? this.smoothScrollPos : 0;
      var y = this.horizontalScroll ? 0 : this.smoothScrollPos;
      this.applyTransform(x, y);
      this.options.customScrollbar && this.scrollbar.transform();
      src_E.emit(Store_default.a.eventNames.EXTERNALRAF, {
        scrollPos: this.scrollPos,
        smoothScrollPos: this.smoothScrollPos
      });
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(x, y) {
      for (var i = 0; i < this.scrollTargetsLength; i++) {
        this.scrollTargets[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      var restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var newTargets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var horizontalScroll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this.enabled) return;
      this.enabled = true;
      this.render = true;
      this.horizontalScroll = horizontalScroll;

      if (newTargets) {
        this.scrollTargets = newTargets.length ? newTargets : [newTargets];
        this.scrollTargetsLength = this.scrollTargets.length;
      }

      this.iframes = this.scrollContainer.querySelectorAll('iframe');

      if (Store_default.a.isTouch && this.options.disableOnTouch) {
        Store_default.a.body.style.removeProperty('height');

        if (reset) {
          this.scrollPos = this.smoothScrollPos = 0;
          this.scrollTo(0, false);
        }
      } else {
        this.firstResize = true;

        if (reset) {
          this.scrollPos = this.smoothScrollPos = 0;
          this.applyTransform(0, 0);
        }

        this.onResize();
      }

      if (restore) {
        this.scrollTo(this.prevScrollPos, false);
      }

      src_E.on(Store_default.a.eventNames.WHEEL, this.onScroll);
      src_E.on(Store_default.a.eventNames.SCROLL, this.onScroll);
    }
  }, {
    key: "disable",
    value: function disable() {
      var inputOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.enabled) return;
      this.enabled = false;

      if (!inputOnly) {
        this.render = false;
      }

      src_E.off(Store_default.a.eventNames.WHEEL, this.onScroll);
      src_E.off(Store_default.a.eventNames.SCROLL, this.onScroll);
      this.prevScrollPos = this.scrollPos;
      Store_default.a.body.style.height = '0px';
    }
  }, {
    key: "clamp",
    value: function clamp() {
      this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.scrollPos = y;

      if (Store_default.a.isTouch && this.options.disableOnTouch) {
        if (this.horizontalScroll) {
          this.scrollContainer.scrollTo(-this.scrollPos, 0);
        } else {
          this.scrollContainer.scrollTo(0, -this.scrollPos);
        }
      }

      this.clamp();
      this.syncScroll = true;
      if (emitEvent) src_E.emit(Store_default.a.eventNames.COMBOSCROLL, this.scrollPos);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (this.scrollTargetsLength > 1) {
        var lastTarget = this.scrollTargets[this.scrollTargetsLength - 1];
        var compStyle = window.getComputedStyle(lastTarget);
        var marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
        var bcr = lastTarget.getBoundingClientRect();
        var endPosition = this.horizontalScroll ? bcr.right : bcr.bottom;
        this.scrollLength = endPosition + marginOffset - this.smoothScrollPos;
      } else {
        this.scrollLength = this.horizontalScroll ? this.scrollTargets[0].scrollWidth : this.scrollTargets[0].scrollHeight;
      }

      var windowSize = this.horizontalScroll ? Store_default.a.windowSize.w : Store_default.a.windowSize.h;
      this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0;

      if (!this.firstResize) {
        this.preventResizeScroll = true;
      }

      Store_default.a.body.style.height = this.scrollLength + 'px';
      this.options.customScrollbar && this.scrollbar.onResize();
      this.firstResize = false;
    }
  }, {
    key: "toggleIframes",
    value: function toggleIframes(enable) {
      for (var i = 0; i < this.iframes.length; i++) {
        this.iframes[i].style.pointerEvents = enable ? 'auto' : 'none';
      }
    }
  }, {
    key: "blockScrollEvent",
    value: function blockScrollEvent(e) {
      e.stopPropagation();
    }
  }, {
    key: "toggleFixedContainer",
    value: function toggleFixedContainer() {
      var _this2 = this;

      this.scrollContainer.style.position = 'static';
      var scrollPos = this.smoothScrollPos;
      this.applyTransform(0, 0);
      requestAnimationFrame(function () {
        _this2.scrollContainer.style.position = 'fixed';
        var x = _this2.horizontalScroll ? scrollPos : 0;
        var y = _this2.horizontalScroll ? 0 : scrollPos;

        _this2.applyTransform(x, y);
      });
    }
  }]);

  return Scroll;
}();


// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_ASScroll; });
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }






var src_ASScroll = /*#__PURE__*/function () {
  function ASScroll() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$element = _ref.element,
        element = _ref$element === void 0 ? '.asscroll-container' : _ref$element,
        _ref$innerElement = _ref.innerElement,
        innerElement = _ref$innerElement === void 0 ? '[data-asscroll]' : _ref$innerElement,
        _ref$ease = _ref.ease,
        ease = _ref$ease === void 0 ? 0.075 : _ref$ease,
        _ref$touchEase = _ref.touchEase,
        touchEase = _ref$touchEase === void 0 ? 1 : _ref$touchEase,
        _ref$customScrollbar = _ref.customScrollbar,
        customScrollbar = _ref$customScrollbar === void 0 ? true : _ref$customScrollbar,
        _ref$scrollbarEl = _ref.scrollbarEl,
        scrollbarEl = _ref$scrollbarEl === void 0 ? '.asscrollbar' : _ref$scrollbarEl,
        _ref$scrollbarHandleE = _ref.scrollbarHandleEl,
        scrollbarHandleEl = _ref$scrollbarHandleE === void 0 ? '.asscrollbar__handle' : _ref$scrollbarHandleE,
        _ref$scrollbarStyles = _ref.scrollbarStyles,
        scrollbarStyles = _ref$scrollbarStyles === void 0 ? true : _ref$scrollbarStyles,
        _ref$disableNativeScr = _ref.disableNativeScrollbar,
        disableNativeScrollbar = _ref$disableNativeScr === void 0 ? true : _ref$disableNativeScr,
        _ref$disableOnTouch = _ref.disableOnTouch,
        disableOnTouch = _ref$disableOnTouch === void 0 ? true : _ref$disableOnTouch,
        _ref$disableRaf = _ref.disableRaf,
        disableRaf = _ref$disableRaf === void 0 ? false : _ref$disableRaf,
        _ref$disableResize = _ref.disableResize,
        disableResize = _ref$disableResize === void 0 ? false : _ref$disableResize,
        _ref$limitLerpRate = _ref.limitLerpRate,
        limitLerpRate = _ref$limitLerpRate === void 0 ? true : _ref$limitLerpRate,
        _ref$blockScrollClass = _ref.blockScrollClass,
        blockScrollClass = _ref$blockScrollClass === void 0 ? '.asscroll-block' : _ref$blockScrollClass;

    src_classCallCheck(this, ASScroll);

    src_E.bindAll(this, ['enable', 'disable', 'on', 'scrollTo', 'onRaf', 'onResize']);
    this.Events = new Events_Events({
      disableRaf,
      disableResize
    });
    this.Scroll = new Scroll_Scroll({
      element,
      innerElement,
      ease,
      touchEase,
      customScrollbar,
      scrollbarEl,
      scrollbarHandleEl,
      scrollbarStyles,
      disableNativeScrollbar,
      disableOnTouch,
      limitLerpRate,
      blockScrollClass
    });
  }

  src_createClass(ASScroll, [{
    key: "enable",
    value: function enable() {
      var _this$Scroll;

      (_this$Scroll = this.Scroll).enable.apply(_this$Scroll, arguments);
    }
  }, {
    key: "disable",
    value: function disable() {
      var _this$Scroll2;

      (_this$Scroll2 = this.Scroll).disable.apply(_this$Scroll2, arguments);
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
        src_E.on(Store_default.a.eventNames.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        src_E.on(Store_default.a.eventNames.EXTERNALRAF, cb);
      }

      if (eventName === 'scrollEnd') {
        src_E.on(Store_default.a.eventNames.SCROLLEND, cb);
      }
    }
  }, {
    key: "off",
    value: function off(eventName, cb) {
      if (eventName === 'scroll') {
        src_E.off(Store_default.a.eventNames.COMBOSCROLL, cb);
      }

      if (eventName === 'raf') {
        src_E.off(Store_default.a.eventNames.EXTERNALRAF, cb);
      }

      if (eventName === 'scrollEnd') {
        src_E.off(Store_default.a.eventNames.SCROLLEND, cb);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.Scroll.scrollTo(-y, emitEvent);
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



/***/ })
/******/ ]);
});