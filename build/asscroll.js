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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Store = {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)))

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

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var shared = __webpack_require__(27);
var has = __webpack_require__(3);
var uid = __webpack_require__(31);
var NATIVE_SYMBOL = __webpack_require__(32);
var USE_SYMBOL_AS_UID = __webpack_require__(53);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(11);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(29);
var anObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(14);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(23);
var requireObjectCoercible = __webpack_require__(25);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var createNonEnumerableProperty = __webpack_require__(5);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

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
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(58);
var global = __webpack_require__(1);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27);
var uid = __webpack_require__(31);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var getOwnPropertyDescriptor = __webpack_require__(40).f;
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(42);
var setGlobal = __webpack_require__(13);
var copyConstructorProperties = __webpack_require__(61);
var isForced = __webpack_require__(64);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(25);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(10);
var addToUnscopables = __webpack_require__(52);
var Iterators = __webpack_require__(19);
var InternalStateModule = __webpack_require__(38);
var defineIterator = __webpack_require__(60);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var classof = __webpack_require__(24);

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
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(12);
var store = __webpack_require__(28);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var setGlobal = __webpack_require__(13);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var fails = __webpack_require__(2);
var createElement = __webpack_require__(30);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var isObject = __webpack_require__(6);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var defineProperties = __webpack_require__(54);
var enumBugKeys = __webpack_require__(16);
var hiddenKeys = __webpack_require__(15);
var html = __webpack_require__(57);
var documentCreateElement = __webpack_require__(30);
var sharedKey = __webpack_require__(18);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(16);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIndexedObject = __webpack_require__(10);
var indexOf = __webpack_require__(55).indexOf;
var hiddenKeys = __webpack_require__(15);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(59);
var global = __webpack_require__(1);
var isObject = __webpack_require__(6);
var createNonEnumerableProperty = __webpack_require__(5);
var objectHas = __webpack_require__(3);
var sharedKey = __webpack_require__(18);
var hiddenKeys = __webpack_require__(15);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(41);
var createPropertyDescriptor = __webpack_require__(11);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(14);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(29);

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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var createNonEnumerableProperty = __webpack_require__(5);
var has = __webpack_require__(3);
var setGlobal = __webpack_require__(13);
var inspectSource = __webpack_require__(39);
var InternalStateModule = __webpack_require__(38);

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
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(45);
var createNonEnumerableProperty = __webpack_require__(5);
var has = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(4);
var IS_PURE = __webpack_require__(12);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toObject = __webpack_require__(21);
var sharedKey = __webpack_require__(18);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(66);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;
var has = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(20);
var fails = __webpack_require__(2);
var isArray = __webpack_require__(48);
var isObject = __webpack_require__(6);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(36);
var createProperty = __webpack_require__(71);
var arraySpeciesCreate = __webpack_require__(72);
var arrayMethodHasSpeciesSupport = __webpack_require__(73);
var wellKnownSymbol = __webpack_require__(4);
var V8_VERSION = __webpack_require__(49);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var userAgent = __webpack_require__(74);

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
/* 50 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t){if("function"!=typeof window.WeakSet){var n=Date.now()%1e9;window.WeakSet=window.WeakSet||function(e){this.name="__st"+(1e9*Math.random()>>>0)+n+++"__",e&&e.forEach&&e.forEach(this.add,this)};var r=window.WeakSet.prototype;r.add=function(e){var t=this.name;return e[t]||Object.defineProperty(e,t,{value:!0,writable:!0}),this},r.delete=function(e){return!!e[this.name]&&(e[this.name]=void 0,!0)},r.has=function(e){return!!e[this.name]}}e.exports=window.WeakSet},function(e,t,n){"use strict";n.r(t);n(1);function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var i=window.document.documentElement,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return o.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var s=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(s))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var u,c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},u="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(e,t){var n,r,i,o,a,s,u=(e=e.slice(0).concat(e.default)).length,c=t,l=[];do{if(f.exec(""),(i=f.exec(c))&&(c=i[3],i[2]||!c))for(n=0;n<u;n++)if(a=(s=e[n]).selector(i[1])){for(r=l.length,o=!1;r--;)if(l[r].index===s&&l[r].key===a){o=!0;break}o||l.push({index:s,key:a});break}}while(i);return l}function d(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(i=e[n],t.isPrototypeOf(i))return i}function h(e,t){return e.id-t.id}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,o,a,s,c,f,h=this.activeIndexes,p=this.selectors;if("string"==typeof e){for(n={id:this.uid++,selector:e,data:t},c=l(this.indexes,e),r=0;r<c.length;r++)o=(f=c[r]).key,(a=d(h,i=f.index))||((a=Object.create(i)).map=new u,h.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(s=a.map.get(o))||(s=[],a.map.set(o,s)),s.push(n);this.size++,p.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,i,o,a,s,u,c,f=this.activeIndexes,d={},h=1===arguments.length;for(n=l(this.indexes,e),i=0;i<n.length;i++)for(r=n[i],o=f.length;o--;)if(s=f[o],r.index.isPrototypeOf(s)){if(u=s.map.get(r.key))for(a=u.length;a--;)(c=u[a]).selector!==e||!h&&c.data!==t||(u.splice(a,1),d[c.id]=!0);break}this.size-=Object.keys(d).length}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,i,o,a,s,u,c={},f=[],l=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=l.length;t<r;t++)for(o=l[t],n=0,i=(a=this.matches(o)).length;n<i;n++)c[(u=a[n]).id]?s=c[u.id]:(s={id:u.id,selector:u.selector,data:u.data,elements:[]},c[u.id]=s,f.push(s)),s.elements.push(o);return f.sort(h)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,i,o,a,s,u,c,f,l,d=this.activeIndexes,p={},v=[];for(t=0,i=d.length;t<i;t++)if(u=(s=d[t]).element(e))for(n=0,o=u.length;n<o;n++)if(c=s.map.get(u[n]))for(r=0,a=c.length;r<a;r++)!p[l=(f=c[r]).id]&&this.matchesSelector(e,f.selector)&&(p[l]=!0,v.push(f));return v.sort(h)},n.d(t,"default",(function(){return g}));var g=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E.add(this),O.add(this),S.add(this),k.add(this),x.add(this),w.set(this,{writable:!0,value:{}}),b.set(this,{writable:!0,value:{}}),j.set(this,{writable:!0,value:function(e){var n=m(t,O,W).call(t,y(t,w)[e.type],e.target);if(n.length)for(var r=0;r<n.length;r++)for(var i=0;i<n[r].stack.length;i++)m(t,E,F).call(t,e,n[r].delegatedTarget),n[r].stack[i].data(e)}})}var t,n,i;return t=e,(n=[{key:"bindAll",value:function(e,t){void 0===t&&(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(var n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}},{key:"on",value:function(e,t,n){if("function"==typeof t&&void 0===n)return m(this,S,T).call(this,e),void y(this,b)[e].push(t);if(t.nodeType&&1===t.nodeType)t.addEventListener(e,n);else{t=m(this,k,M).call(this,t);for(var r=0;r<t.length;r++)t[r].addEventListener(e,n)}}},{key:"delegate",value:function(e,t,n){var i=y(this,w)[e];void 0===i&&(i=new r,y(this,w)[e]=i,document.addEventListener(e,y(this,j),!0)),i.add(t,n)}},{key:"off",value:function(e,t,n){var r=y(this,w)[e];if(void 0!==t)if("function"!=typeof t){if(void 0!==r&&(r.remove(t,n),0===r.size))return delete y(this,w)[e],void document.removeEventListener(e,y(this,j));if(void 0===t.removeEventListener){t=m(this,k,M).call(this,t);for(var i=0;i<t.length;i++)t[i].removeEventListener(e,n)}else t.removeEventListener(e,n)}else{m(this,S,T).call(this,e);for(var o=0;o<y(this,b)[e].length;o++)y(this,b)[e][o]===t&&y(this,b)[e].splice(o,1)}else y(this,b)[e]=[]}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];m(this,x,A).call(this,e,n)}}])&&v(t.prototype,n),i&&v(t,i),e}(),w=new WeakMap,b=new WeakMap,x=new WeakSet,k=new WeakSet,S=new WeakSet,j=new WeakMap,O=new WeakSet,E=new WeakSet,A=function(e,t){if(y(this,b)[e])for(var n=0;n<y(this,b)[e].length;n++){var r;(r=y(this,b)[e])[n].apply(r,p(t))}},M=function(e){return"string"==typeof e?document.querySelectorAll(e):e},T=function(e){void 0===y(this,b)[e]&&(y(this,b)[e]=[])},W=function(e,t){var n=[],r=t;do{if(1!==r.nodeType)break;var i=e.matches(r);i.length&&n.push({delegatedTarget:r,stack:i})}while(r=r.parentElement);return n},F=function(e,t){Object.defineProperty(e,"delegatedTarget",{configurable:!0,enumerable:!0,value:t})}}])}));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);
var create = __webpack_require__(33);
var definePropertyModule = __webpack_require__(8);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(32);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var definePropertyModule = __webpack_require__(8);
var anObject = __webpack_require__(9);
var objectKeys = __webpack_require__(34);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(56);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

module.exports = global;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var inspectSource = __webpack_require__(39);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(20);
var createIteratorConstructor = __webpack_require__(65);
var getPrototypeOf = __webpack_require__(45);
var setPrototypeOf = __webpack_require__(67);
var setToStringTag = __webpack_require__(46);
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(42);
var wellKnownSymbol = __webpack_require__(4);
var IS_PURE = __webpack_require__(12);
var Iterators = __webpack_require__(19);
var IteratorsCore = __webpack_require__(44);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var ownKeys = __webpack_require__(62);
var getOwnPropertyDescriptorModule = __webpack_require__(40);
var definePropertyModule = __webpack_require__(8);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);
var getOwnPropertyNamesModule = __webpack_require__(63);
var getOwnPropertySymbolsModule = __webpack_require__(43);
var anObject = __webpack_require__(9);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(16);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(44).IteratorPrototype;
var create = __webpack_require__(33);
var createPropertyDescriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(46);
var Iterators = __webpack_require__(19);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var aPossiblePrototype = __webpack_require__(68);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var DOMIterables = __webpack_require__(70);
var ArrayIteratorMethods = __webpack_require__(22);
var createNonEnumerableProperty = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(4);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(14);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(11);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var isArray = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(4);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(4);
var V8_VERSION = __webpack_require__(49);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(20);
var assign = __webpack_require__(76);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(7);
var fails = __webpack_require__(2);
var objectKeys = __webpack_require__(34);
var getOwnPropertySymbolsModule = __webpack_require__(43);
var propertyIsEnumerableModule = __webpack_require__(41);
var toObject = __webpack_require__(21);
var IndexedObject = __webpack_require__(23);

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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(69);

// EXTERNAL MODULE: ./src/Store.js
var Store = __webpack_require__(0);
var Store_default = /*#__PURE__*/__webpack_require__.n(Store);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(50);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// EXTERNAL MODULE: ./node_modules/@unseenco/e/dist/e.min.js
var e_min = __webpack_require__(51);
var e_min_default = /*#__PURE__*/__webpack_require__.n(e_min);

// CONCATENATED MODULE: ./src/E.js

const E = new e_min_default.a();
/* harmony default export */ var src_E = (E);
// CONCATENATED MODULE: ./src/Events.js



class Events_Events {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = options;
    src_E.bindAll(this, ['onRaf']);
    Store_default.a.events = {
      RAF: 1,
      EXTERNALRAF: 2,
      SCROLL: 3,
      WHEEL: 4,
      COMBOSCROLL: 5,
      RESIZE: 6,
      TOUCHMOUSE: 7
    };
    this.addEvents();
  }

  addEvents() {
    if (!this.options.disableRaf) {
      requestAnimationFrame(this.onRaf);
    }

    if (!this.options.disableResize) {
      window.addEventListener('resize', lodash_debounce_default()(() => {
        this.onResize();
      }, 150));
    }

    this.onScroll();

    if ('ontouchstart' in document.documentElement) {
      Store_default.a.isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

      this.detectMouse();
    }
  }

  onRaf() {
    src_E.emit(Store_default.a.events.RAF);
    if (this.options.disableRaf) return;
    requestAnimationFrame(this.onRaf);
  }

  onScroll() {
    window.addEventListener('wheel', e => {
      src_E.emit(Store_default.a.events.WHEEL, {
        event: e
      });
    }, {
      passive: false
    });
    window.addEventListener('scroll', e => {
      src_E.emit(Store_default.a.events.SCROLL, {
        event: e
      });
    }, {
      passive: true
    });
  }

  onResize(windowWidth, windowHeight) {
    Store_default.a.windowSize.w = windowWidth || window.innerWidth;
    Store_default.a.windowSize.h = windowHeight || window.innerHeight;
    src_E.emit(Store_default.a.events.RESIZE);
  }

  detectMouse() {
    window.addEventListener('mousemove', function detectMouse(e) {
      if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
        // mouse has moved on touch screen, not just a tap firing mousemove
        Store_default.a.isTouch = false;
        src_E.emit(Store_default.a.events.TOUCHMOUSE);
        window.removeEventListener('mousemove', detectMouse);
      }
    });
  }

}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(75);

// CONCATENATED MODULE: ./src/Scrollbar.js



class Scrollbar_Scrollbar {
  constructor(smoothScroll) {
    src_E.bindAll(this, ['onMouseMove', 'onMouseDown', 'onMouseUp']);
    this.smoothScroll = smoothScroll;
    this.addHTML();
    this.el = document.querySelector(this.smoothScroll.options.scrollbarEl);
    this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl);
    this.addStyles();
    this.addEvents();
  }

  addEvents() {
    src_E.on('mousedown', this.handle, this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onResize() {
    this.scale = (-this.smoothScroll.maxScroll + Store_default.a.windowSize.h) / Store_default.a.windowSize.h;

    if (this.scale <= 1) {
      this.handle.style.height = 0;
      return;
    }

    this.trueSize = Math.min(Store_default.a.windowSize.h / -this.smoothScroll.maxScroll, 1) * Store_default.a.windowSize.h;
    this.handleHeight = Math.max(this.trueSize, 40);
    this.handle.style.height = "".concat(this.handleHeight, "px");
  }

  transform() {
    const y = -this.smoothScroll.scrollPos / -this.smoothScroll.maxScroll * (Store_default.a.windowSize.h - this.handleHeight);
    this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
  }

  show() {
    this.el.classList.add('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  onMouseMove(e) {
    if (!this.mouseDown) return;
    const totalHeight = Store_default.a.windowSize.h + (this.trueSize - this.handleHeight);
    this.smoothScroll.scrollPos = e.clientY / totalHeight * this.smoothScroll.maxScroll;
    this.smoothScroll.syncScroll = true;
    src_E.emit(Store_default.a.events.COMBOSCROLL, this.smoothScroll.scrollPos);
  }

  onMouseDown() {
    this.mouseDown = true;
    Store_default.a.body.style.userSelect = 'none';
    Store_default.a.body.style['-ms-user-select'] = 'none';
    this.el.classList.add('active');
  }

  onMouseUp() {
    this.mouseDown = false;
    Store_default.a.body.style.removeProperty('user-select');
    Store_default.a.body.style.removeProperty('-ms-user-select');
    this.el.classList.remove('active');
  }

  addHTML() {
    if (!!document.querySelector(this.smoothScroll.options.scrollbarEl)) return;
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
// CONCATENATED MODULE: ./src/normalizeWheel.js
/* eslint-disable */

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */
// Reasonable defaults

var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

function normalizeWheel(
/*object*/
event)
/*object*/
{
  var sX = 0,
      sY = 0,
      // spinX, spinY
  pX = 0,
      pY = 0; // pixelX, pixelY
  // Legacy

  if ('detail' in event) {
    sY = event.detail;
  }

  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120;
  }

  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120;
  }

  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120;
  } // side scrolling on FF with DOMMouseScroll


  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) {
    pY = event.deltaY;
  }

  if ('deltaX' in event) {
    pX = event.deltaX;
  }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  } // Fall-back if spin cannot be determined


  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }

  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}

/* harmony default export */ var src_normalizeWheel = (normalizeWheel);
// CONCATENATED MODULE: ./src/Scroll.js






class Scroll_Scroll {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = options;
    this.scrollbarCheck = this.options.customScrollbar;
    src_E.bindAll(this, ['onScroll', 'onRAF', 'onResize']);
    this.scrollContainer = document.querySelector(this.options.element);
    const possibleScrollTargets = this.scrollContainer.querySelectorAll(this.options.innerElement);
    this.scrollTargets = possibleScrollTargets.length ? possibleScrollTargets : [this.scrollContainer.firstElementChild];
    this.scrollTargetsLength = this.scrollTargets.length;
    this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0;
    this.scrolling = false;
    this.syncScroll = false;
    this.deltaY = 0;
    this.wheeling = false;
    this.wheel = true;
    this.ease = Store_default.a.isTouch ? this.options.touchEase : this.options.ease;

    if (!Store_default.a.isTouch || !this.options.disableOnTouch) {
      if (Store_default.a.isTouch) this.options.customScrollbar = false;
      this.smoothSetup();
    } else {
      this.options.customScrollbar = false;
    } // enable smooth scroll if mouse is detected


    src_E.on(Store_default.a.events.TOUCHMOUSE, () => {
      if (!this.options.disableOnTouch) return;
      this.options.customScrollbar = this.scrollbarCheck;
      this.smoothSetup();
      this.onResize();
    });
    document.addEventListener('mouseleave', () => {
      window.scrollTo(0, -this.scrollPos);
    });
  }

  smoothSetup() {
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

    src_E.on(Store_default.a.events.RAF, this.onRAF);
    src_E.on(Store_default.a.events.RESIZE, this.onResize);
  }

  onScroll(_ref) {
    let event = _ref.event;

    if (!this.scrolling) {
      this.options.customScrollbar && this.scrollbar.show();
      this.toggleIframes();
      this.scrolling = true;
    }

    if (!Store_default.a.isTouch && event.type === 'wheel') {
      event.preventDefault();
      this.deltaY = src_normalizeWheel(event).pixelY;
      this.wheeling = true;
      this.syncScroll = true;
      this.wheel = true;
      return;
    } else {
      this.scrollPos = -window.scrollY;
      this.wheel = false;

      if (Store_default.a.isTouch && this.options.disableOnTouch) {
        this.smoothScrollPos = this.scrollPos;
      }

      src_E.emit(Store_default.a.events.COMBOSCROLL, this.scrollPos);
    }
  }

  onRAF() {
    if (!this.enabled) return;

    if (this.wheeling) {
      this.scrollPos += this.deltaY * -1;
      this.wheeling = false;
      src_E.emit(Store_default.a.events.COMBOSCROLL, this.scrollPos);
    }

    this.clamp();

    if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
      this.smoothScrollPos = this.scrollPos;

      if (this.syncScroll) {
        window.scrollTo(0, -this.scrollPos);
        this.syncScroll = false;
      }

      if (this.scrolling) {
        this.options.customScrollbar && this.scrollbar.hide();
        this.toggleIframes(true);
        this.scrolling = false;
      }
    } else {
      this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.ease;
    }

    const x = this.horizontalScroll ? this.smoothScrollPos : 0;
    const y = this.horizontalScroll ? 0 : this.smoothScrollPos;
    this.applyTransform(x, y);
    this.options.customScrollbar && this.scrollbar.transform();
    src_E.emit(Store_default.a.events.EXTERNALRAF, {
      scrollPos: this.scrollPos,
      smoothScrollPos: this.smoothScrollPos
    });
  }

  applyTransform(x, y) {
    for (let i = 0; i < this.scrollTargetsLength; i++) {
      this.scrollTargets[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
    }
  }

  enable() {
    let restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let newTargets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let horizontalScroll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (this.enabled) return;
    this.enabled = true;
    this.horizontalScroll = horizontalScroll;

    if (newTargets) {
      this.scrollTargets = newTargets.length ? newTargets : [newTargets];
      this.scrollTargetsLength = this.scrollTargets.length;
    }

    this.iframes = this.scrollContainer.querySelectorAll('iframe');

    if (Store_default.a.isTouch && this.options.disableOnTouch) {
      Store_default.a.body.style.removeProperty('height');

      if (reset) {
        window.scrollTo(0, 0);
      }
    } else {
      if (reset) {
        this.scrollPos = this.smoothScrollPos = 0;
        this.applyTransform(0, 0);
      }

      this.onResize();
    }

    if (restore) {
      this.scrollPos = this.prevScrollPos;
      window.scrollTo(0, -this.prevScrollPos);
    }

    src_E.on(Store_default.a.events.WHEEL, this.onScroll);
    src_E.on(Store_default.a.events.SCROLL, this.onScroll);
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    src_E.off(Store_default.a.events.WHEEL, this.onScroll);
    src_E.off(Store_default.a.events.SCROLL, this.onScroll);
    this.prevScrollPos = this.scrollPos;
    Store_default.a.body.style.height = '0px';
  }

  clamp() {
    this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll);
  }

  scrollTo(y) {
    let emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.scrollPos = y;
    this.clamp();
    this.syncScroll = true;
    if (emitEvent) src_E.emit(Store_default.a.events.COMBOSCROLL, this.scrollPos);
  }

  onResize() {
    if (this.scrollTargetsLength > 1) {
      const lastTarget = this.scrollTargets[this.scrollTargetsLength - 1];
      const compStyle = window.getComputedStyle(lastTarget);
      const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
      const bcr = lastTarget.getBoundingClientRect();
      const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom;
      this.scrollLength = endPosition + marginOffset - this.smoothScrollPos;
    } else {
      const bcr = this.scrollTargets[0].getBoundingClientRect();
      this.scrollLength = this.horizontalScroll ? bcr.width : bcr.height;
    }

    const windowSize = this.horizontalScroll ? Store_default.a.windowSize.w : Store_default.a.windowSize.h;
    this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0;
    Store_default.a.body.style.height = this.scrollLength + 'px';
    this.options.customScrollbar && this.scrollbar.onResize();
  }

  toggleIframes(enable) {
    for (let i = 0; i < this.iframes.length; i++) {
      this.iframes[i].style.pointerEvents = enable ? 'auto' : 'none';
    }
  }

}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_ASScroll; });






class src_ASScroll {
  constructor() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
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
        disableOnTouch = _ref$disableOnTouch === void 0 ? false : _ref$disableOnTouch,
        _ref$disableRaf = _ref.disableRaf,
        disableRaf = _ref$disableRaf === void 0 ? false : _ref$disableRaf,
        _ref$disableResize = _ref.disableResize,
        disableResize = _ref$disableResize === void 0 ? false : _ref$disableResize;

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
      disableOnTouch
    });
  }

  enable() {
    this.Scroll.enable(...arguments);
  }

  disable() {
    this.Scroll.disable();
  }

  onRaf() {
    this.Events.onRaf();
  }

  onResize() {
    this.Events.onResize(...arguments);
  }

  on(eventName, cb) {
    if (eventName === 'scroll') {
      src_E.on(Store_default.a.events.COMBOSCROLL, cb);
    }

    if (eventName === 'raf') {
      src_E.on(Store_default.a.events.EXTERNALRAF, cb);
    }
  }

  off(eventName, cb) {
    if (eventName === 'scroll') {
      src_E.off(Store_default.a.events.COMBOSCROLL, cb);
    }

    if (eventName === 'raf') {
      src_E.off(Store_default.a.events.EXTERNALRAF, cb);
    }
  }

  scrollTo(y) {
    let emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.Scroll.scrollTo(-y, emitEvent);
  }

  get scrollPos() {
    return this.Scroll.scrollPos;
  }

  get smoothScrollPos() {
    return this.Scroll.smoothScrollPos;
  }

}

/***/ })
/******/ ]);
});