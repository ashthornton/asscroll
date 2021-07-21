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

/***/ 4672:
/***/ ((module) => {

const store = {
  html: document.documentElement,
  body: document.body,
  window: {
    w: window.innerWidth,
    h: window.innerHeight
  }
};
module.exports = store;

/***/ }),

/***/ 5336:
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

/***/ }),

/***/ 6077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(111);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
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

/***/ 9670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(111);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 1318:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(5656);
var toLength = __webpack_require__(7466);
var toAbsoluteIndex = __webpack_require__(1400);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4326:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 9920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(6656);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

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

/***/ 8544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 4994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = __webpack_require__(3383).IteratorPrototype;
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var setToStringTag = __webpack_require__(8003);
var Iterators = __webpack_require__(7497);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 8880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(2109);
var createIteratorConstructor = __webpack_require__(4994);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var setToStringTag = __webpack_require__(8003);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);
var Iterators = __webpack_require__(7497);
var IteratorsCore = __webpack_require__(3383);

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

/***/ 9781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8324:
/***/ ((module) => {

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

/***/ 5268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(4326);
var global = __webpack_require__(7854);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 8113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

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

/***/ 748:
/***/ ((module) => {

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

/***/ 2109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

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

/***/ 7293:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(857);
var global = __webpack_require__(7854);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 7854:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(7908);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 2788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5465);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var objectHas = __webpack_require__(6656);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
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
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
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
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
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

/***/ 4705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7293);

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

/***/ 111:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 3383:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(7293);
var getPrototypeOf = __webpack_require__(9518);
var createNonEnumerableProperty = __webpack_require__(8880);
var has = __webpack_require__(6656);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 7497:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_NODE = __webpack_require__(5268);
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ 8536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 30:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(9670);
var defineProperties = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

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
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
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

/***/ 6048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
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

/***/ 3070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var anObject = __webpack_require__(9670);
var toPrimitive = __webpack_require__(7593);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9781);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPrimitive = __webpack_require__(7593);
var has = __webpack_require__(6656);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(6656);
var toObject = __webpack_require__(7908);
var sharedKey = __webpack_require__(6200);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 6324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(6656);
var toIndexedObject = __webpack_require__(5656);
var indexOf = __webpack_require__(1318).indexOf;
var hiddenKeys = __webpack_require__(3501);

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

/***/ 1956:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
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

/***/ 3887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5005);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);
var has = __webpack_require__(6656);
var setGlobal = __webpack_require__(3505);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
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

/***/ 4488:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 8003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(3070).f;
var has = __webpack_require__(6656);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 6200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.11.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 1400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(9958);

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

/***/ 5656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9958:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 7466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(9958);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(111);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
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

/***/ 9711:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 3307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 5112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var has = __webpack_require__(6656);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6992:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(5656);
var addToUnscopables = __webpack_require__(1223);
var Iterators = __webpack_require__(7497);
var InternalStateModule = __webpack_require__(9909);
var defineIterator = __webpack_require__(654);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
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
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7854);
var DOMIterables = __webpack_require__(8324);
var ArrayIteratorMethods = __webpack_require__(6992);
var createNonEnumerableProperty = __webpack_require__(8880);
var wellKnownSymbol = __webpack_require__(5112);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var debounce = __webpack_require__(5336);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./src/store.js
var store = __webpack_require__(4672);
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
		get: () => delegatedTarget
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
	 * @param {string|NodeList|HTMLElement|Window|Document|array|function} el
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
     * @param {string|NodeList|HTMLElement|window|Undefined} [el]
     * @param {*} [callback]
	 * @param {{}|boolean} [options]
     */
    off(event, el, callback, options) {
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
                el.removeEventListener(events[i], callback, options)
                continue
            }

            el = maybeRunQuerySelector(el)

            for (let n = 0; n < el.length;n++) {
                el[n].removeEventListener(events[i], callback, options)
            }
        }
    }

    /**
     * Emit a DOM or Bus event.
     *
     * @param {string} event
     * @param {...*} [args]
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

  onResize({
    width,
    height
  } = {}) {
    (store_default()).window.w = width || window.innerWidth;
    (store_default()).window.h = height || window.innerHeight;
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
;// CONCATENATED MODULE: ./src/Scrollbar.js
function Scrollbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Scrollbar {
  constructor(controller) {
    Scrollbar_defineProperty(this, "onMouseMove", e => {
      if (!this.mouseDown) return;
      this.mousePos = e.clientY;
      this.position -= this.prevMousePos - this.mousePos;
      this.position = Math.min(Math.max(this.position, 0), this.maxY);
      this.prevMousePos = this.mousePos;
      this.controller.targetPos = this.position / this.maxY * this.controller.maxScroll;
      this.controller.clamp();
      this.controller.syncScroll = true;
      this.transform();
      src_E.emit(Events.EXTERNALSCROLL, -this.controller.targetPos);
    });

    Scrollbar_defineProperty(this, "onMouseDown", e => {
      this.mousePos = this.prevMousePos = e.clientY;
      this.mouseDown = true;
      (store_default()).body.style.userSelect = 'none';
      this.el.classList.add('active');
    });

    Scrollbar_defineProperty(this, "onMouseUp", () => {
      this.mouseDown = false;
      store_default().body.style.removeProperty('user-select');
      this.el.classList.remove('active');
    });

    this.controller = controller;
    this.addHTML();
    this.el = document.querySelector(this.controller.options.scrollbarEl);
    this.handle = document.querySelector(this.controller.options.scrollbarHandleEl);
    this.position = 0;
    this.mousePos = 0;
    this.prevMousePos = 0;
    this.addStyles();
    this.addEvents();
  }

  transform() {
    let y;

    if (this.mouseDown) {
      y = this.position;
    } else {
      y = -this.controller.targetPos / -this.controller.maxScroll * ((store_default()).window.h - this.handleHeight);
      this.position = y;
    }

    this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
  }

  show() {
    this.el.classList.add('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  addEvents() {
    src_E.on('mousedown', this.handle, this.onMouseDown);
    src_E.on('mousemove', window, this.onMouseMove);
    src_E.on('mouseup', window, this.onMouseUp);
  }

  onResize() {
    this.scale = (-this.controller.maxScroll + (store_default()).window.h) / (store_default()).window.h;

    if (this.scale <= 1) {
      this.handle.style.height = 0;
      return;
    }

    this.trueSize = (store_default()).window.h / this.scale;
    this.handleHeight = Math.max(this.trueSize, 40);
    this.handle.style.height = "".concat(this.handleHeight, "px");
    this.maxY = (store_default()).window.h - this.handleHeight;
  }

  addHTML() {
    if (document.querySelector(this.controller.options.scrollbarEl)) return;
    const div = document.createElement('div');
    div.classList.add(this.controller.options.scrollbarEl.substring(1));
    div.innerHTML = "<div class=\"".concat(this.controller.options.scrollbarHandleEl.substring(1), "\"><div></div></div>");
    document.body.appendChild(div);
  }

  addStyles() {
    if (!this.controller.options.disableNativeScrollbar && !this.controller.options.scrollbarStyles) return;
    let styles = '';

    if (this.controller.options.disableNativeScrollbar) {
      styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
    }

    if (this.controller.options.scrollbarStyles) {
      styles += "".concat(this.controller.options.scrollbarEl, " {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ").concat(this.controller.options.scrollbarEl, " {display:none;}").concat(this.controller.options.scrollbarEl, " > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}").concat(this.controller.options.scrollbarEl, " > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}").concat(this.controller.options.scrollbarEl, " > div > div:hover {opacity:0.9;}").concat(this.controller.options.scrollbarEl, ":hover > div, ").concat(this.controller.options.scrollbarEl, ".show > div, ").concat(this.controller.options.scrollbarEl, ".active > div {visibility:visible;}").concat(this.controller.options.scrollbarEl, ".active > div > div {opacity:0.9;}");
    }

    const css = document.createElement('style');
    if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
  }

  destroy() {
    src_E.off('mousedown', this.handle, this.onMouseDown);
    src_E.off('mousemove', window, this.onMouseMove);
    src_E.off('mouseup', window, this.onMouseUp);
  }

}
;// CONCATENATED MODULE: ./src/Controller.js


function Controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Controller {
  constructor(options = {}) {
    Controller_defineProperty(this, "onScroll", ({
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
        this.targetPos += event.deltaY * -1;
      } else {
        if (this.preventResizeScroll) {
          this.preventResizeScroll = false;
          return;
        }

        if ((store_default()).isTouch && this.options.touchScrollType === 'scrollTop') {
          this.targetPos = this.horizontalScroll ? -this.containerElement.scrollLeft : -this.containerElement.scrollTop;
        } else {
          this.targetPos = -window.scrollY;
        }

        if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
          this.currentPos = this.targetPos;
        }
      }

      this.clamp();
      this.options.customScrollbar && this.scrollbar.transform();
      src_E.emit(Events.EXTERNALSCROLL, -this.targetPos);
    });

    Controller_defineProperty(this, "onRAF", () => {
      if (this.testFps && this.options.limitLerpRate) {
        this.time = performance.now() * 0.001;
        this.delta = Math.min((this.time - this.startTime) * 60, 1);
        this.startTime = this.time;
      }

      if (!this.render) return;

      if (Math.abs(this.targetPos - this.currentPos) < 0.5) {
        this.currentPos = this.targetPos;

        if (this.scrolling && !this.syncScroll) {
          this.scrolling = false;
          this.options.customScrollbar && this.scrollbar.hide();
          this.toggleIframes(true);
          src_E.emit(Events.SCROLLEND, -this.targetPos);
        }

        if (this.syncScroll) {
          window.scrollTo(0, -this.targetPos);
          this.syncScroll = false;
        }
      } else {
        this.currentPos += (this.targetPos - this.currentPos) * this.ease * this.delta;
      }

      const x = this.horizontalScroll ? this.currentPos : 0;
      const y = this.horizontalScroll ? 0 : this.currentPos;
      this.applyTransform(x, y);
      src_E.emit(Events.EXTERNALRAF, {
        targetPos: -this.targetPos,
        currentPos: -this.currentPos
      });
    });

    Controller_defineProperty(this, "onResize", () => {
      if (this.scrollElementsLength > 1) {
        const lastTarget = this.scrollElements[this.scrollElementsLength - 1];
        const compStyle = window.getComputedStyle(lastTarget);
        const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
        const bcr = lastTarget.getBoundingClientRect();
        const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom;
        this.scrollLength = endPosition + marginOffset - this.currentPos;
      } else {
        this.scrollLength = this.horizontalScroll ? this.scrollElements[0].scrollWidth : this.scrollElements[0].scrollHeight;
      }

      const windowSize = this.horizontalScroll ? (store_default()).window.w : (store_default()).window.h;
      this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0;
      this.clamp();

      if (!this.firstResize) {
        this.preventResizeScroll = true;
      }

      (store_default()).body.style.height = this.scrollLength + 'px';
      this.options.customScrollbar && this.scrollbar.onResize();
      this.firstResize = false;
    });

    Controller_defineProperty(this, "toggleFixedContainer", () => {
      this.containerElement.style.position = 'static';
      const scrollPos = this.currentPos;
      this.applyTransform(0, 0);
      requestAnimationFrame(() => {
        this.containerElement.style.position = 'fixed';
        const x = this.horizontalScroll ? scrollPos : 0;
        const y = this.horizontalScroll ? 0 : scrollPos;
        this.applyTransform(x, y);
      });
    });

    this.options = options;
    this.targetPos = this.currentPos = this.prevScrollPos = this.maxScroll = 0;
    this.enabled = false;
    this.render = false;
    this.scrolling = false;
    this.syncScroll = false;
    this.horizontalScroll = false;
    this.firstResize = true;
    this.preventResizeScroll = false;
    this.ease = (store_default()).isTouch ? this.options.touchEase : this.options.ease;
    this.originalScrollbarSetting = this.options.customScrollbar;
    this.testFps = true;
    this.delta = 1;
    this.time = this.startTime = performance.now();
    this.setElements();

    if ((store_default()).isTouch) {
      this.options.customScrollbar = false;

      if (this.options.touchScrollType === 'transform') {
        this.setupSmoothScroll();
      } else if (this.options.touchScrollType === 'scrollTop') {
        document.documentElement.classList.add('asscroll-touch');
        this.addTouchStyles();
        src_E.on('scroll', this.containerElement, e => {
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

  setElements() {
    this.containerElement = typeof this.options.containerElement === 'string' ? document.querySelector(this.options.containerElement) : this.options.containerElement;

    if (this.containerElement === null) {
      console.error('ASScroll: could not find container element');
    }

    this.containerElement.setAttribute('asscroll-container', '');
    this.scrollElements = typeof this.options.scrollElements === 'string' ? document.querySelectorAll(this.options.scrollElements) : this.options.scrollElements;
    if (this.scrollElements.length) this.scrollElements = [...this.scrollElements];
    this.scrollElements = this.scrollElements.length ? this.scrollElements : [this.containerElement.firstElementChild];
    this.scrollElementsLength = this.scrollElements.length;
    this.scrollElements.forEach(el => el.setAttribute('asscroll', ''));
  }

  setupSmoothScroll() {
    Object.assign(this.containerElement.style, {
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

    if (this.options.limitLerpRate) {
      setTimeout(() => {
        this.testFps = false;
        this.delta = Math.round(this.delta * 10) * 0.1;
      }, 2000);
    }
  }

  applyTransform(x, y) {
    for (let i = 0; i < this.scrollElementsLength; i++) {
      this.scrollElements[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
    }
  }

  enable({
    newScrollElements = false,
    reset = false,
    restore = false,
    horizontalScroll = false
  } = {}) {
    if (this.enabled) return;
    this.enabled = true;
    this.render = true;
    this.horizontalScroll = horizontalScroll;

    if (newScrollElements) {
      this.scrollElements = newScrollElements.length ? [...newScrollElements] : [newScrollElements];
      this.scrollElementsLength = this.scrollElements.length;
      this.scrollElements.forEach(el => el.setAttribute('asscroll', ''));
    }

    this.iframes = this.containerElement.querySelectorAll('iframe');

    if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
      store_default().body.style.removeProperty('height');
      this.maxScroll = -this.containerElement.scrollHeight;

      if (reset) {
        this.targetPos = this.currentPos = 0;
        this.scrollTo(0, false);
      }
    } else {
      this.firstResize = true;

      if (reset) {
        this.targetPos = this.currentPos = 0;
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
    src_E.off(Events.INTERNALSCROLL, this.onScroll);
    this.prevScrollPos = this.targetPos;
    (store_default()).body.style.height = '0px';
  }

  clamp() {
    this.targetPos = Math.max(Math.min(this.targetPos, 0), this.maxScroll);
  }

  scrollTo(y, emitEvent = true) {
    this.targetPos = y;

    if ((store_default()).isTouch && this.options.touchScrollType !== 'transform') {
      if (this.horizontalScroll) {
        this.containerElement.scrollTo(-this.targetPos, 0);
      } else {
        this.containerElement.scrollTo(0, -this.targetPos);
      }
    }

    this.clamp();
    this.syncScroll = true;
    if (emitEvent) src_E.emit(Events.EXTERNALSCROLL, -this.targetPos);
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
      this.options.customScrollbar = this.originalScrollbarSetting;
      this.ease = this.options.ease;
      this.setupSmoothScroll();
      this.onResize();
    });

    if (!(store_default()).isTouch) {
      src_E.on('mouseleave', document, () => {
        window.scrollTo(0, -this.targetPos);
      });
      src_E.on('keydown', window, e => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
          window.scrollTo(0, -this.targetPos);
        }

        if (e.key === 'Tab') {
          this.toggleFixedContainer();
        }
      });
      src_E.delegate('click', 'a[href^="#"]', this.toggleFixedContainer);
      src_E.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent);
    }
  }

  addTouchStyles() {
    const styles = ".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}";
    const css = document.createElement('style');
    if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
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
  * @typicalname asscroll
  * @param {object} [parameters]
  * @param {string|HTMLElement} [parameters.containerElement=[asscroll-container]] The selector string for the outer container element, or the element itself
  * @param {string|HTMLElement|NodeList} [parameters.scrollElements=[asscroll]] The selector string for the elements to scroll, or the elements themselves
  * @param {number} [parameters.ease=0.075] The ease amount for the transform lerp
  * @param {number} [parameters.touchEase=1] The ease amount for the transform lerp on touch devices
  * @param {string} [parameters.touchScrollType=none] Set the scrolling method on touch devices. Other options are 'transform' and 'scrollTop'. See the [Touch Devices](#touch-devices) section for more info
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
  constructor(_parameters = {}) {
    src_defineProperty(this, "update", () => {
      this.events.onRaf();
    });

    src_defineProperty(this, "resize", parameters => {
      this.events.onResize(parameters);
    });

    const {
      containerElement = '[asscroll-container]',
      scrollElements = '[asscroll]',
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
    } = _parameters;
    this.events = new Events({
      disableRaf,
      disableResize
    });
    this.controller = new Controller({
      containerElement,
      scrollElements,
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
  * asscroll.enable({ newScrollElements: document.querySelector('.page'), reset: true })
  *
  * @example <caption>Enables ASScroll and restores to the previous position before ASScroll.disable() was called</caption>
  * asscroll.enable({ restore: true })
  *
  * @param {object} [parameters]
  * @param {boolean|NodeList|HTMLElement} [parameters.newScrollElements=false] Specify the new element(s) that should be scrolled
  * @param {boolean} [parameters.reset=false] Reset the scroll position to 0
  * @param {boolean} [parameters.restore=false] Restore the scroll position to where it was when disable() was called
  * @param {boolean} [parameters.horizontalScroll=false] Toggle horizontal scrolling
  */


  enable(parameters) {
    if (parameters !== undefined && typeof parameters !== 'object') {
      console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
    }

    this.controller.enable(parameters);
  }
  /**
  * Disable ASScroll.
  *
  * @example <caption>Disables the ability to manually scroll whilst still allowing position updates to be made via asscroll.currentPos, for example</caption>
  * asscroll.disable({ inputOnly: true })
  *
  * @param {object} [parameters]
  * @param {boolean} [parameters.inputOnly=false] Only disable the ability to manually scroll (still allow transforms)
  */


  disable(parameters) {
    if (parameters !== undefined && typeof parameters !== 'object') {
      console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
    }

    this.controller.disable(parameters);
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
  * asscroll.on('update', ({ targetPos, currentPos }) => console.log(targetPos, currentPos))
  *
  * @example <caption>Fires when the lerped scroll position has reached the target position</caption>
  * asscroll.on('scrollEnd', scrollPos => console.log(scrollPos))
  *
  * @param {string} eventName Name of the event you wish to listen for
  * @param {function} callback Callback function that should be executed when the event fires
  */
  on(eventName, callback) {
    if (typeof callback !== 'function') {
      console.error('ASScroll: Function not provided as second parameter');
      return;
    }

    if (eventName === 'scroll') {
      src_E.on(Events.EXTERNALSCROLL, callback);
      return;
    }

    if (eventName === 'update') {
      src_E.on(Events.EXTERNALRAF, callback);
      return;
    }

    if (eventName === 'scrollEnd') {
      src_E.on(Events.SCROLLEND, callback);
      return;
    }

    console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
  }
  /**
  * Remove an event listener.
  * @param {string} eventName Name of the event
  * @param {function} callback Callback function
  */


  off(eventName, callback) {
    if (typeof callback !== 'function') {
      console.error('ASScroll: Function not provided as second parameter');
      return;
    }

    if (eventName === 'scroll') {
      src_E.off(Events.EXTERNALSCROLL, callback);
      return;
    }

    if (eventName === 'update') {
      src_E.off(Events.EXTERNALRAF, callback);
      return;
    }

    if (eventName === 'scrollEnd') {
      src_E.off(Events.SCROLLEND, callback);
      return;
    }

    console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
  }
  /**
  * Scroll to a given position on the page.
  * @param {number} targetPos Target scroll position
  * @param {boolean} [emitEvent=true] Whether to emit the external scroll events or not
  */


  scrollTo(targetPos, emitEvent = true) {
    this.controller.scrollTo(-targetPos, emitEvent);
  }
  /**
  * Returns the target scroll position.
  *
  * @return {number} Target scroll position
  */


  get targetPos() {
    return -this.controller.targetPos;
  }
  /**
  * Gets or sets the current scroll position.
  *
  * @example <caption>Sets the scroll position to 200, bypassing any lerps</caption>
  * asscroll.currentPos = 200
  *
  * @param {number} scrollPos The desired scroll position
  * @return {number} Current scroll position
  */


  get currentPos() {
    return -this.controller.currentPos;
  }

  set currentPos(scrollPos) {
    this.controller.targetPos = this.controller.currentPos = -scrollPos;
  }
  /**
  * Returns the maximum scroll height of the page.
  * @return {number} Maxmium scroll height
  */


  get maxScroll() {
    return -this.controller.maxScroll;
  }
  /**
   * Returns the outer element that ASScroll is attached to.
   * @return {HTMLElement} The outer element
   */


  get containerElement() {
    return this.controller.containerElement;
  }
  /**
   * Returns the the element(s) that ASScroll is scrolling.
   * @return {Array} An array of elements ASScroll is scrolling
   */


  get scrollElements() {
    return this.controller.scrollElements;
  }
  /**
   * Returns whether or not ASScroll is in horizontal scroll mode
   * @return {boolean} The status of horizontal scroll
   */


  get isHorizontal() {
    return this.controller.horizontalScroll;
  }
  /**
   * @deprecated since 2.0.0 - use targetPos instead
   * @see {@link ASScroll#targetPos}
   */


  get scrollPos() {}
  /**
   * @deprecated since 2.0.0 - use currentPos instead
   * @see {@link ASScroll#currentPos}
   */


  get smoothScrollPos() {}
  /**
   * @deprecated since 2.0.0 - use update() instead
   * @see {@link ASScroll#update}
   */


  onRaf() {}
  /**
   * @deprecated since 2.0.0 - use resize() instead
   * @see {@link ASScroll#resize}
   */


  onResize() {}

}

/* harmony default export */ const src = (ASScroll);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});