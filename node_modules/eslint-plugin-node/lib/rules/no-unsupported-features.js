/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const semver = require("semver")
const { getInnermostScope, getPropertyName } = require("eslint-utils")
const getPackageJson = require("../util/get-package-json")

const VERSION_MAP = new Map([
    [0.1, "0.10.0"],
    [0.12, "0.12.0"],
    [4, "4.0.0"],
    [5, "5.0.0"],
    [6, "6.0.0"],
    [6.5, "6.5.0"],
    [7, "7.0.0"],
    [7.6, "7.6.0"],
    [8, "8.0.0"],
    [8.3, "8.3.0"],
    [9, "9.0.0"],
    [10, "10.0.0"],
])
const VERSION_SCHEMA = {
    anyOf: [
        { enum: Array.from(VERSION_MAP.keys()) },
        {
            type: "string",
            pattern: "^(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)$",
        },
    ],
}
const DEFAULT_VERSION = "4.0.0"
const FUNC_TYPE = /^(?:Arrow)?Function(?:Declaration|Expression)$/u
const CLASS_TYPE = /^Class(?:Declaration|Expression)$/u
const DESTRUCTURING_PARENT_TYPE = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression|AssignmentExpression|VariableDeclarator)$/u
const TOPLEVEL_SCOPE_TYPE = /^(?:global|function|module)$/u
const BINARY_NUMBER = /^0[bB]/u
const OCTAL_NUMBER = /^0[oO]/u
const UNICODE_ESC = /(\\+)u\{[0-9a-fA-F]+?\}/gu
const GET_OR_SET = /^(?:g|s)et$/u
const NEW_BUILTIN_TYPES = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "DataView",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Proxy",
    "Reflect",
    "Promise",
    "Symbol",
    "SharedArrayBuffer",
    "Atomics",
]
const SUBCLASSING_TEST_TARGETS = [
    "Array",
    "RegExp",
    "Function",
    "Promise",
    "Boolean",
    "Number",
    "String",
    "Map",
    "Set",
]
const PROPERTY_TEST_TARGETS = {
    Object: [
        "assign",
        "is",
        "getOwnPropertySymbols",
        "setPrototypeOf",
        "values",
        "entries",
        "getOwnPropertyDescriptors",
    ],
    String: ["raw", "fromCodePoint"],
    Array: ["from", "of"],
    Number: [
        "isFinite",
        "isInteger",
        "isSafeInteger",
        "isNaN",
        "EPSILON",
        "MIN_SAFE_INTEGER",
        "MAX_SAFE_INTEGER",
    ],
    Math: [
        "clz32",
        "imul",
        "sign",
        "log10",
        "log2",
        "log1p",
        "expm1",
        "cosh",
        "sinh",
        "tanh",
        "acosh",
        "asinh",
        "atanh",
        "trunc",
        "fround",
        "cbrt",
        "hypot",
    ],
    Symbol: [
        "hasInstance",
        "isConcatSpreadablec",
        "iterator",
        "species",
        "replace",
        "search",
        "split",
        "match",
        "toPrimitive",
        "toStringTag",
        "unscopables",
    ],
    Atomics: [
        "add",
        "and",
        "compareExchange",
        "exchange",
        "wait",
        "wake",
        "isLockFree",
        "load",
        "or",
        "store",
        "sub",
        "xor",
    ],
}
const REGEXP_NAMED_GROUP = /(\\*)\(\?<[_$\w]/u
const REGEXP_LOOKBEHIND = /(\\*)\(\?<[=!]/u
const REGEXP_UNICODE_PROPERTY = /(\\*)\\[pP]\{.+?\}/u
const FEATURES = {
    defaultParameters: {
        alias: ["syntax"],
        name: "Default parameters",
        node: "6.0.0",
    },
    restParameters: {
        alias: ["syntax"],
        name: "Rest parameters",
        node: "6.0.0",
    },
    spreadOperators: {
        alias: ["syntax"],
        name: "Spread operators",
        node: "5.0.0",
    },
    objectLiteralExtensions: {
        alias: ["syntax"],
        name: "Object literal extensions",
        node: "4.0.0",
    },
    objectPropertyShorthandOfGetSet: {
        alias: ["syntax", "objectLiteralExtensions"],
        name: "Property shorthand of 'get' and 'set'",
        node: "6.0.0",
    },
    forOf: {
        alias: ["syntax"],
        name: "'for..of' loops",
        node: "0.12.0",
    },
    binaryNumberLiterals: {
        alias: ["syntax"],
        name: "Binary number literals",
        node: "4.0.0",
    },
    octalNumberLiterals: {
        alias: ["syntax"],
        name: "Octal number literals",
        node: "4.0.0",
    },
    templateStrings: {
        alias: ["syntax"],
        name: "Template strings",
        node: "4.0.0",
    },
    regexpY: {
        alias: ["syntax"],
        name: "RegExp 'y' flags",
        node: "6.0.0",
    },
    regexpU: {
        alias: ["syntax"],
        name: "RegExp 'u' flags",
        node: "6.0.0",
    },
    destructuring: {
        alias: ["syntax"],
        name: "Destructuring",
        node: "6.0.0",
    },
    unicodeCodePointEscapes: {
        alias: ["syntax"],
        name: "Unicode code point escapes",
        node: "4.0.0",
    },
    "new.target": {
        alias: ["syntax"],
        name: "'new.target'",
        node: "5.0.0",
    },
    const: {
        alias: ["syntax"],
        name: "'const' declarations",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    let: {
        alias: ["syntax"],
        name: "'let' declarations",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    blockScopedFunctions: {
        alias: ["syntax"],
        name: "Block-scoped functions",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    arrowFunctions: {
        alias: ["syntax"],
        name: "Arrow functions",
        node: "4.0.0",
    },
    generatorFunctions: {
        alias: ["syntax"],
        name: "Generator functions",
        node: "4.0.0",
    },
    classes: {
        alias: ["syntax"],
        name: "Classes",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    modules: {
        alias: ["syntax"],
        name: "Import and export declarations",
        node: null,
    },
    exponentialOperators: {
        alias: ["syntax"],
        name: "Exponential operators (**)",
        node: "7.0.0",
    },
    asyncAwait: {
        alias: ["syntax"],
        name: "Async functions",
        node: "7.6.0",
    },
    trailingCommasInFunctions: {
        alias: ["syntax"],
        name: "Trailing commas in functions",
        node: "8.0.0",
    },
    //------------------------------------------
    templateLiteralRevision: {
        alias: ["syntax"],
        name: "Illegal escape sequences in taggled templates",
        node: "9.0.0",
    },
    regexpS: {
        alias: ["syntax"],
        name: "RegExp 's' flags",
        node: "9.0.0",
    },
    regexpNamedCaptureGroups: {
        alias: ["syntax"],
        name: "RegExp named capture groups",
        node: "10.0.0",
    },
    regexpLookbehind: {
        alias: ["syntax"],
        name: "RegExp lookbehind assertions",
        node: "9.0.0",
    },
    regexpUnicodeProperties: {
        alias: ["syntax"],
        name: "RegExp Unicode property escapes",
        node: "10.0.0",
    },
    restProperties: {
        alias: ["syntax"],
        name: "Rest properties",
        node: "8.3.0",
    },
    spreadProperties: {
        alias: ["syntax"],
        name: "Spread properties",
        node: "8.3.0",
    },
    asyncGenerators: {
        alias: ["syntax"],
        name: "Async generators",
        node: "10.0.0",
    },
    forAwaitOf: {
        alias: ["syntax"],
        name: "for-await-of loops",
        node: "10.0.0",
    },

    Int8Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int8Array'",
        singular: true,
        node: "0.12.0",
    },
    Uint8Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8Array'",
        singular: true,
        node: "0.12.0",
    },
    Uint8ClampedArray: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8ClampedArray'",
        singular: true,
        node: "0.12.0",
    },
    Int16Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int16Array'",
        singular: true,
        node: "0.12.0",
    },
    Uint16Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint16Array'",
        singular: true,
        node: "0.12.0",
    },
    Int32Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int32Array'",
        singular: true,
        node: "0.12.0",
    },
    Uint32Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint32Array'",
        singular: true,
        node: "0.12.0",
    },
    Float32Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float32Array'",
        singular: true,
        node: "0.12.0",
    },
    Float64Array: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float64Array'",
        singular: true,
        node: "0.12.0",
    },
    DataView: {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'DataView'",
        singular: true,
        node: "0.12.0",
    },
    Map: {
        alias: ["runtime", "globalObjects"],
        name: "'Map'",
        singular: true,
        node: "0.12.0",
    },
    Set: {
        alias: ["runtime", "globalObjects"],
        name: "'Set'",
        singular: true,
        node: "0.12.0",
    },
    WeakMap: {
        alias: ["runtime", "globalObjects"],
        name: "'WeakMap'",
        singular: true,
        node: "0.12.0",
    },
    WeakSet: {
        alias: ["runtime", "globalObjects"],
        name: "'WeakSet'",
        singular: true,
        node: "0.12.0",
    },
    Proxy: {
        alias: ["runtime", "globalObjects"],
        name: "'Proxy'",
        singular: true,
        node: "6.0.0",
    },
    Reflect: {
        alias: ["runtime", "globalObjects"],
        name: "'Reflect'",
        singular: true,
        node: "6.0.0",
    },
    Promise: {
        alias: ["runtime", "globalObjects"],
        name: "'Promise'",
        singular: true,
        node: "0.12.0",
    },
    Symbol: {
        alias: ["runtime", "globalObjects"],
        name: "'Symbol'",
        singular: true,
        node: "0.12.0",
    },
    SharedArrayBuffer: {
        alias: ["runtime", "globalObjects"],
        name: "'SharedArrayBuffer'",
        singular: true,
        node: "9.0.0",
    },
    Atomics: {
        alias: ["runtime", "globalObjects"],
        name: "'Atomics'",
        singular: true,
        node: "9.0.0",
    },

    "Object.assign": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.assign'",
        singular: true,
        node: "4.0.0",
    },
    "Object.is": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.is'",
        singular: true,
        node: "0.12.0",
    },
    "Object.getOwnPropertySymbols": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertySymbols'",
        singular: true,
        node: "0.12.0",
    },
    "Object.setPrototypeOf": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.setPrototypeOf'",
        singular: true,
        node: "0.12.0",
    },
    "Object.values": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.values'",
        singular: true,
        node: "7.0.0",
    },
    "Object.entries": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.entries'",
        singular: true,
        node: "7.0.0",
    },
    "Object.getOwnPropertyDescriptors": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertyDescriptors'",
        singular: true,
        node: "7.0.0",
    },

    "String.raw": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.raw'",
        singular: true,
        node: "4.0.0",
    },
    "String.fromCodePoint": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.fromCodePoint'",
        singular: true,
        node: "4.0.0",
    },

    "Array.from": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.from'",
        singular: true,
        node: "4.0.0",
    },
    "Array.of": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.of'",
        singular: true,
        node: "4.0.0",
    },

    "Number.isFinite": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isFinite'",
        singular: true,
        node: "0.10.0",
    },
    "Number.isInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isInteger'",
        singular: true,
        node: "0.12.0",
    },
    "Number.isSafeInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isSafeInteger'",
        singular: true,
        node: "0.12.0",
    },
    "Number.isNaN": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isNaN'",
        singular: true,
        node: "0.10.0",
    },
    "Number.EPSILON": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.EPSILON'",
        singular: true,
        node: "0.12.0",
    },
    "Number.MIN_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MIN_SAFE_INTEGER'",
        singular: true,
        node: "0.12.0",
    },
    "Number.MAX_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MAX_SAFE_INTEGER'",
        singular: true,
        node: "0.12.0",
    },

    "Math.clz32": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.clz32'",
        singular: true,
        node: "0.12.0",
    },
    "Math.imul": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.imul'",
        singular: true,
        node: "0.12.0",
    },
    "Math.sign": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sign'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log10": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log10'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log2": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log2'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log1p": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log1p'",
        singular: true,
        node: "0.12.0",
    },
    "Math.expm1": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.expm1'",
        singular: true,
        node: "0.12.0",
    },
    "Math.cosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cosh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.sinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sinh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.tanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.tanh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.acosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.acosh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.asinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.asinh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.atanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.atanh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.trunc": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.trunc'",
        singular: true,
        node: "0.12.0",
    },
    "Math.fround": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.fround'",
        singular: true,
        node: "0.12.0",
    },
    "Math.cbrt": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cbrt'",
        singular: true,
        node: "0.12.0",
    },
    "Math.hypot": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.hypot'",
        singular: true,
        node: "0.12.0",
    },

    "Symbol.hasInstance": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.hasInstance'",
        singular: true,
        node: "6.5.0",
    },
    "Symbol.isConcatSpreadablec": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.isConcatSpreadablec'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.iterator": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.iterator'",
        singular: true,
        node: "0.12.0",
    },
    "Symbol.species": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.species'",
        singular: true,
        node: "6.5.0",
    },
    "Symbol.replace": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.replace'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.search": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.search'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.split": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.split'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.match": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.match'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.toPrimitive": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toPrimitive'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.toStringTag": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toStringTag'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.unscopables": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.unscopables'",
        singular: true,
        node: "4.0.0",
    },

    "Atomics.add": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.add'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.and": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.and'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.compareExchange": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.compareExchange'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.exchange": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.exchange'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.wait": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.wait'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.wake": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.wake'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.isLockFree": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.isLockFree'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.load": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.load'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.or": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.or'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.store": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.store'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.sub": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.sub'",
        singular: true,
        node: "9.0.0",
    },
    "Atomics.xor": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.xor'",
        singular: true,
        node: "9.0.0",
    },

    extendsArray: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Array'",
        singular: true,
        node: "6.0.0",
    },
    extendsRegExp: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'RegExp'",
        singular: true,
        node: "5.0.0",
    },
    extendsFunction: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Function'",
        singular: true,
        node: "6.0.0",
    },
    extendsPromise: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Promise'",
        singular: true,
        node: "5.0.0",
    },
    extendsBoolean: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Boolean'",
        singular: true,
        node: "4.0.0",
    },
    extendsNumber: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Number'",
        singular: true,
        node: "4.0.0",
    },
    extendsString: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'String'",
        singular: true,
        node: "4.0.0",
    },
    extendsMap: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Map'",
        singular: true,
        node: "4.0.0",
    },
    extendsSet: {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Set'",
        singular: true,
        node: "4.0.0",
    },
    extendsNull: {
        alias: ["runtime", "extends"],
        name: "'extends null'",
        singular: true,
        node: null,
    },
}
const OPTIONS = Object.keys(FEATURES)

/**
 * Gets default version configuration of this rule.
 *
 * This finds and reads 'package.json' file, then parses 'engines.node' field.
 * If it's nothing, this returns null.
 *
 * @param {string} filename - The file name of the current linting file.
 * @returns {string} The default version configuration.
 */
function getDefaultVersion(filename) {
    const info = getPackageJson(filename)
    const nodeVersion = info && info.engines && info.engines.node

    return semver.validRange(nodeVersion) || DEFAULT_VERSION
}

/**
 * Gets values of the `ignores` option.
 *
 * @returns {string[]} Values of the `ignores` option.
 */
function getIgnoresEnum() {
    return Object.keys(
        OPTIONS.reduce((retv, key) => {
            for (const alias of FEATURES[key].alias) {
                retv[alias] = true
            }
            retv[key] = true
            return retv
        }, Object.create(null))
    )
}

/**
 * Checks whether a given key should be ignored or not.
 *
 * @param {string} key - A key to check.
 * @param {string[]} ignores - An array of keys and aliases to be ignored.
 * @returns {boolean} `true` if the key should be ignored.
 */
function isIgnored(key, ignores) {
    return (
        ignores.indexOf(key) !== -1 ||
        FEATURES[key].alias.some(alias => ignores.indexOf(alias) !== -1)
    )
}

/**
 * Parses the options.
 *
 * @param {number|string|object|undefined} options - An option object to parse.
 * @param {number} defaultVersion - The default version to use if the version option was omitted.
 * @returns {object} Parsed value.
 */
function parseOptions(options, defaultVersion) {
    let version = null
    let range = null
    let ignores = []

    if (typeof options === "number") {
        version = VERSION_MAP.get(options)
    } else if (typeof options === "string") {
        version = options
    } else if (typeof options === "object") {
        version =
            typeof options.version === "number"
                ? VERSION_MAP.get(options.version)
                : options.version

        ignores = options.ignores || []
    }

    range = semver.validRange(version ? `>=${version}` : defaultVersion)
    if (!version) {
        version = defaultVersion
    }

    return Object.freeze({
        version,
        features: Object.freeze(
            OPTIONS.reduce((retv, key) => {
                const feature = FEATURES[key]

                if (isIgnored(key, ignores)) {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported: true,
                        supportedInStrict: true,
                    })
                } else if (typeof feature.node === "string") {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported: !semver.intersects(
                            range,
                            `<${feature.node}`
                        ),
                        supportedInStrict: !semver.intersects(
                            range,
                            `<${feature.node}`
                        ),
                    })
                } else {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported:
                            feature.node != null &&
                            feature.node.sloppy != null &&
                            !semver.intersects(
                                range,
                                `<${feature.node.sloppy}`
                            ),
                        supportedInStrict:
                            feature.node != null &&
                            feature.node.strict != null &&
                            !semver.intersects(
                                range,
                                `<${feature.node.strict}`
                            ),
                    })
                }

                return retv
            }, Object.create(null))
        ),
    })
}

/**
 * Find the scope that a given node belongs to.
 * @param {Scope} initialScope The initial scope to find.
 * @param {Node} node The AST node.
 * @returns {Scope} The scope that the node belongs to.
 */
function normalizeScope(initialScope, node) {
    let scope = getInnermostScope(initialScope, node)

    while (scope && scope.block === node) {
        scope = scope.upper
    }

    return scope
}

/**
 * Checks whether the given string has `\u{90ABCDEF}`-like escapes.
 *
 * @param {string} raw - The string to check.
 * @returns {boolean} `true` if the string has Unicode code point escapes.
 */
function hasUnicodeCodePointEscape(raw) {
    let match = null

    UNICODE_ESC.lastIndex = 0
    while ((match = UNICODE_ESC.exec(raw)) != null) {
        if (match[1].length % 2 === 1) {
            return true
        }
    }

    return false
}

/**
 * Check a given string has a given pattern.
 * @param {string} s A string to check.
 * @param {RegExp} pattern A RegExp object to check.
 * @returns {boolean} `true` if the string has the pattern.
 */
function hasPattern(s, pattern) {
    const m = pattern.exec(s)
    return m != null && (m[1] || "").length % 2 === 0
}

module.exports = {
    meta: {
        docs: {
            description:
                "disallow unsupported ECMAScript features on the specified version",
            category: "Possible Errors",
            recommended: false,
            replacedBy: [
                "node/no-unsupported-features/es-syntax",
                "node/no-unsupported-features/es-builtins",
            ],
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/no-unsupported-features.md",
        },
        type: "problem",
        deprecated: true,
        fixable: null,
        schema: [
            {
                anyOf: [
                    VERSION_SCHEMA.anyOf[0],
                    VERSION_SCHEMA.anyOf[1],
                    {
                        type: "object",
                        properties: {
                            version: VERSION_SCHEMA,
                            ignores: {
                                type: "array",
                                items: { enum: getIgnoresEnum() },
                                uniqueItems: true,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
    create(context) {
        const sourceCode = context.getSourceCode()
        const supportInfo = parseOptions(
            context.options[0],
            getDefaultVersion(context.getFilename())
        )

        /**
         * Gets the references of the specified global variables.
         *
         * @param {string[]} names - Variable names to get.
         * @returns {void}
         */
        function* getReferences(names) {
            const globalScope = context.getScope()

            for (const name of names) {
                const variable = globalScope.set.get(name)

                if (variable && variable.defs.length === 0) {
                    yield* variable.references
                }
            }
        }

        /**
         * Checks whether the given function has trailing commas or not.
         *
         * @param {ASTNode} node - The function node to check.
         * @returns {boolean} `true` if the function has trailing commas.
         */
        function hasTrailingCommaForFunction(node) {
            const length = node.params.length

            return (
                length >= 1 &&
                sourceCode.getTokenAfter(node.params[length - 1]).value === ","
            )
        }

        /**
         * Checks whether the given call expression has trailing commas or not.
         *
         * @param {ASTNode} node - The call expression node to check.
         * @returns {boolean} `true` if the call expression has trailing commas.
         */
        function hasTrailingCommaForCall(node) {
            return (
                node.arguments.length >= 1 &&
                sourceCode.getLastToken(node, 1).value === ","
            )
        }

        /**
         * Checks whether the given class extends from null or not.
         *
         * @param {ASTNode} node - The class node to check.
         * @returns {boolean} `true` if the class extends from null.
         */
        function extendsNull(node) {
            return (
                node.superClass != null &&
                node.superClass.type === "Literal" &&
                node.superClass.value === null
            )
        }

        /**
         * Reports a given node if the specified feature is not supported.
         *
         * @param {ASTNode} node - A node to be reported.
         * @param {string} key - A feature name to report.
         * @returns {void}
         */
        function report(node, key) {
            const version = supportInfo.version
            const feature = supportInfo.features[key]
            if (feature.supported) {
                return
            }

            if (!feature.supportedInStrict) {
                context.report({
                    node,
                    message:
                        "{{feature}} {{be}} not supported yet on Node {{version}}.",
                    data: {
                        feature: feature.name,
                        be: feature.singular ? "is" : "are",
                        version,
                    },
                })
            } else if (!normalizeScope(context.getScope(), node).isStrict) {
                context.report({
                    node,
                    message:
                        "{{feature}} {{be}} not supported yet on Node {{version}}.",
                    data: {
                        feature: `${feature.name} in non-strict mode`,
                        be: feature.singular ? "is" : "are",
                        version,
                    },
                })
            }
        }

        /**
         * Validate RegExp syntax.
         * @param {string} pattern A RegExp pattern to check.
         * @param {string} flags A RegExp flags to check.
         * @param {ASTNode} node A node to report.
         * @returns {void}
         */
        function validateRegExp(pattern, flags, node) {
            if (typeof pattern === "string") {
                if (hasPattern(pattern, REGEXP_NAMED_GROUP)) {
                    report(node, "regexpNamedCaptureGroups")
                }
                if (hasPattern(pattern, REGEXP_LOOKBEHIND)) {
                    report(node, "regexpLookbehind")
                }
                if (hasPattern(pattern, REGEXP_UNICODE_PROPERTY)) {
                    report(node, "regexpUnicodeProperties")
                }
            }
            if (typeof flags === "string") {
                if (flags.indexOf("y") !== -1) {
                    report(node, "regexpY")
                }
                if (flags.indexOf("u") !== -1) {
                    report(node, "regexpU")
                }
                if (flags.indexOf("s") !== -1) {
                    report(node, "regexpS")
                }
            }
        }

        /**
         * Validate RegExp syntax in a RegExp literal.
         * @param {ASTNode} node A Literal node to check.
         * @returns {void}
         */
        function validateRegExpLiteral(node) {
            validateRegExp(node.regex.pattern, node.regex.flags, node)
        }

        /**
         * Validate RegExp syntax in the first argument of `new RegExp()`.
         * @param {ASTNode} node A NewExpression node to check.
         * @returns {void}
         */
        function validateRegExpString(node) {
            const patternNode = node.arguments[0]
            const flagsNode = node.arguments[1]
            const pattern =
                patternNode &&
                patternNode.type === "Literal" &&
                typeof patternNode.value === "string"
                    ? patternNode.value
                    : null
            const flags =
                flagsNode &&
                flagsNode.type === "Literal" &&
                typeof flagsNode.value === "string"
                    ? flagsNode.value
                    : null
            validateRegExp(pattern, flags, node)
        }

        return {
            "Program:exit"() {
                // Check new global variables.
                for (const name of NEW_BUILTIN_TYPES) {
                    for (const reference of getReferences([name])) {
                        // Ignore if it's using new static methods.
                        const node = reference.identifier
                        const parentNode = node.parent
                        const properties = PROPERTY_TEST_TARGETS[name]
                        if (
                            properties &&
                            parentNode.type === "MemberExpression"
                        ) {
                            const propertyName = getPropertyName(parentNode)
                            if (properties.indexOf(propertyName) !== -1) {
                                continue
                            }
                        }

                        report(reference.identifier, name)
                    }
                }

                // Check static methods.
                for (const reference of getReferences(
                    Object.keys(PROPERTY_TEST_TARGETS)
                )) {
                    const node = reference.identifier
                    const parentNode = node.parent
                    if (
                        parentNode.type !== "MemberExpression" ||
                        parentNode.object !== node
                    ) {
                        continue
                    }

                    const objectName = node.name
                    const properties = PROPERTY_TEST_TARGETS[objectName]
                    const propertyName = getPropertyName(parentNode)
                    if (
                        propertyName &&
                        properties.indexOf(propertyName) !== -1
                    ) {
                        report(parentNode, `${objectName}.${propertyName}`)
                    }
                }

                // Check subclassing
                for (const reference of getReferences(
                    SUBCLASSING_TEST_TARGETS
                )) {
                    const node = reference.identifier
                    const parentNode = node.parent
                    if (
                        CLASS_TYPE.test(parentNode.type) &&
                        parentNode.superClass === node
                    ) {
                        report(node, `extends${node.name}`)
                    }
                }
            },

            ArrowFunctionExpression(node) {
                report(node, "arrowFunctions")
                if (node.async) {
                    report(node, "asyncAwait")
                }
                if (hasTrailingCommaForFunction(node)) {
                    report(node, "trailingCommasInFunctions")
                }
            },

            AssignmentPattern(node) {
                if (FUNC_TYPE.test(node.parent.type)) {
                    report(node, "defaultParameters")
                }
            },

            FunctionDeclaration(node) {
                const scope = context.getScope().upper
                if (!TOPLEVEL_SCOPE_TYPE.test(scope.type)) {
                    report(node, "blockScopedFunctions")
                }
                if (node.generator) {
                    report(node, "generatorFunctions")
                }
                if (node.async) {
                    report(node, "asyncAwait")
                }
                if (hasTrailingCommaForFunction(node)) {
                    report(node, "trailingCommasInFunctions")
                }
                if (node.async && node.generator) {
                    report(node, "asyncGenerators")
                }
            },

            FunctionExpression(node) {
                if (node.generator) {
                    report(node, "generatorFunctions")
                }
                if (node.async) {
                    report(node, "asyncAwait")
                }
                if (hasTrailingCommaForFunction(node)) {
                    report(node, "trailingCommasInFunctions")
                }
                if (node.async && node.generator) {
                    report(node, "asyncGenerators")
                }
            },

            MetaProperty(node) {
                const meta = node.meta.name || node.meta
                const property = node.property.name || node.property
                if (meta === "new" && property === "target") {
                    report(node, "new.target")
                }
            },

            ClassDeclaration(node) {
                report(node, "classes")

                if (extendsNull(node)) {
                    report(node, "extendsNull")
                }
            },

            ClassExpression(node) {
                report(node, "classes")

                if (extendsNull(node)) {
                    report(node, "extendsNull")
                }
            },

            ForOfStatement(node) {
                report(node, "forOf")
                if (node.await) {
                    report(node, "forAwaitOf")
                }
            },

            VariableDeclaration(node) {
                if (node.kind === "const") {
                    report(node, "const")
                } else if (node.kind === "let") {
                    report(node, "let")
                }
            },

            ArrayPattern(node) {
                if (DESTRUCTURING_PARENT_TYPE.test(node.parent.type)) {
                    report(node, "destructuring")
                }
            },

            AssignmentExpression(node) {
                if (node.operator === "**=") {
                    report(node, "exponentialOperators")
                }
            },

            AwaitExpression(node) {
                report(node, "asyncAwait")
            },

            BinaryExpression(node) {
                if (node.operator === "**") {
                    report(node, "exponentialOperators")
                }
            },

            CallExpression(node) {
                if (hasTrailingCommaForCall(node)) {
                    report(node, "trailingCommasInFunctions")
                }
            },

            Identifier(node) {
                const raw = sourceCode.getText(node)
                if (hasUnicodeCodePointEscape(raw)) {
                    report(node, "unicodeCodePointEscapes")
                }
            },

            Literal(node) {
                if (typeof node.value === "number") {
                    if (BINARY_NUMBER.test(node.raw)) {
                        report(node, "binaryNumberLiterals")
                    } else if (OCTAL_NUMBER.test(node.raw)) {
                        report(node, "octalNumberLiterals")
                    }
                } else if (typeof node.value === "string") {
                    if (hasUnicodeCodePointEscape(node.raw)) {
                        report(node, "unicodeCodePointEscapes")
                    }
                } else if (node.regex) {
                    validateRegExpLiteral(node)
                }
            },

            NewExpression(node) {
                if (
                    node.callee.type === "Identifier" &&
                    node.callee.name === "RegExp"
                ) {
                    validateRegExpString(node)
                }
                if (hasTrailingCommaForCall(node)) {
                    report(node, "trailingCommasInFunctions")
                }
            },

            ObjectPattern(node) {
                if (DESTRUCTURING_PARENT_TYPE.test(node.parent.type)) {
                    report(node, "destructuring")
                }
            },

            Property(node) {
                if (
                    node.parent.type === "ObjectExpression" &&
                    (node.computed || node.shorthand || node.method)
                ) {
                    if (node.shorthand && GET_OR_SET.test(node.key.name)) {
                        report(node, "objectPropertyShorthandOfGetSet")
                    } else {
                        report(node, "objectLiteralExtensions")
                    }
                }
            },

            RestElement(node) {
                if (FUNC_TYPE.test(node.parent.type)) {
                    report(node, "restParameters")
                } else if (node.parent.type === "ObjectPattern") {
                    report(node, "restProperties")
                }
            },

            SpreadElement(node) {
                if (node.parent.type === "ObjectExpression") {
                    report(node, "spreadProperties")
                } else {
                    report(node, "spreadOperators")
                }
            },

            TemplateElement(node) {
                if (node.value.cooked == null) {
                    report(node, "templateLiteralRevision")
                }
            },

            TemplateLiteral(node) {
                report(node, "templateStrings")
            },

            ExperimentalRestProperty(node) {
                report(node, "restProperties")
            },

            ExperimentalSpreadProperty(node) {
                report(node, "spreadProperties")
            },

            RestProperty(node) {
                report(node, "restProperties")
            },

            SpreadProperty(node) {
                report(node, "spreadProperties")
            },

            ExportAllDeclaration(node) {
                report(node, "modules")
            },

            ExportDefaultDeclaration(node) {
                report(node, "modules")
            },

            ExportNamedDeclaration(node) {
                report(node, "modules")
            },

            ImportDeclaration(node) {
                report(node, "modules")
            },
        }
    },
}
