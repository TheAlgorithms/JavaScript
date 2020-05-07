/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ } = require("eslint-utils")
const checkUnsupportedBuiltins = require("../../util/check-unsupported-builtins")
const enumeratePropertyNames = require("../../util/enumerate-property-names")

const trackMap = {
    globals: {
        Array: {
            from: { [READ]: { supported: "4.0.0" } },
            of: { [READ]: { supported: "4.0.0" } },
        },
        BigInt: {
            [READ]: { supported: "10.4.0" },
        },
        Map: {
            [READ]: { supported: "0.12.0" },
        },
        Math: {
            acosh: { [READ]: { supported: "0.12.0" } },
            asinh: { [READ]: { supported: "0.12.0" } },
            atanh: { [READ]: { supported: "0.12.0" } },
            cbrt: { [READ]: { supported: "0.12.0" } },
            clz32: { [READ]: { supported: "0.12.0" } },
            cosh: { [READ]: { supported: "0.12.0" } },
            expm1: { [READ]: { supported: "0.12.0" } },
            fround: { [READ]: { supported: "0.12.0" } },
            hypot: { [READ]: { supported: "0.12.0" } },
            imul: { [READ]: { supported: "0.12.0" } },
            log10: { [READ]: { supported: "0.12.0" } },
            log1p: { [READ]: { supported: "0.12.0" } },
            log2: { [READ]: { supported: "0.12.0" } },
            sign: { [READ]: { supported: "0.12.0" } },
            sinh: { [READ]: { supported: "0.12.0" } },
            tanh: { [READ]: { supported: "0.12.0" } },
            trunc: { [READ]: { supported: "0.12.0" } },
        },
        Number: {
            EPSILON: { [READ]: { supported: "0.12.0" } },
            isFinite: { [READ]: { supported: "0.10.0" } },
            isInteger: { [READ]: { supported: "0.12.0" } },
            isNaN: { [READ]: { supported: "0.10.0" } },
            isSafeInteger: { [READ]: { supported: "0.12.0" } },
            MAX_SAFE_INTEGER: { [READ]: { supported: "0.12.0" } },
            MIN_SAFE_INTEGER: { [READ]: { supported: "0.12.0" } },
            parseFloat: { [READ]: { supported: "0.12.0" } },
            parseInt: { [READ]: { supported: "0.12.0" } },
        },
        Object: {
            assign: { [READ]: { supported: "4.0.0" } },
            fromEntries: { [READ]: { supported: "12.0.0" } },
            getOwnPropertySymbols: { [READ]: { supported: "0.12.0" } },
            is: { [READ]: { supported: "0.10.0" } },
            setPrototypeOf: { [READ]: { supported: "0.12.0" } },
            values: { [READ]: { supported: "7.0.0" } },
            entries: { [READ]: { supported: "7.0.0" } },
            getOwnPropertyDescriptors: { [READ]: { supported: "7.0.0" } },
        },
        Promise: {
            [READ]: { supported: "0.12.0" },
            allSettled: { [READ]: { supported: "12.9.0" } },
        },
        Proxy: {
            [READ]: { supported: "6.0.0" },
        },
        Reflect: {
            [READ]: { supported: "6.0.0" },
        },
        Set: {
            [READ]: { supported: "0.12.0" },
        },
        String: {
            fromCodePoint: { [READ]: { supported: "4.0.0" } },
            raw: { [READ]: { supported: "4.0.0" } },
        },
        Symbol: {
            [READ]: { supported: "0.12.0" },
        },
        Int8Array: {
            [READ]: { supported: "0.10.0" },
        },
        Uint8Array: {
            [READ]: { supported: "0.10.0" },
        },
        Uint8ClampedArray: {
            [READ]: { supported: "0.10.0" },
        },
        Int16Array: {
            [READ]: { supported: "0.10.0" },
        },
        Uint16Array: {
            [READ]: { supported: "0.10.0" },
        },
        Int32Array: {
            [READ]: { supported: "0.10.0" },
        },
        Uint32Array: {
            [READ]: { supported: "0.10.0" },
        },
        BigInt64Array: {
            [READ]: { supported: "10.4.0" },
        },
        BigUint64Array: {
            [READ]: { supported: "10.4.0" },
        },
        Float32Array: {
            [READ]: { supported: "0.10.0" },
        },
        Float64Array: {
            [READ]: { supported: "0.10.0" },
        },
        DataView: {
            [READ]: { supported: "0.10.0" },
        },
        WeakMap: {
            [READ]: { supported: "0.12.0" },
        },
        WeakSet: {
            [READ]: { supported: "0.12.0" },
        },
        Atomics: {
            [READ]: { supported: "8.10.0" },
        },
        SharedArrayBuffer: {
            [READ]: { supported: "8.10.0" },
        },
    },
}

module.exports = {
    meta: {
        docs: {
            description:
                "disallow unsupported ECMAScript built-ins on the specified version",
            category: "Possible Errors",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/no-unsupported-features/es-builtins.md",
        },
        type: "problem",
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    version: {
                        type: "string",
                    },
                    ignores: {
                        type: "array",
                        items: {
                            enum: Array.from(
                                enumeratePropertyNames(trackMap.globals)
                            ),
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            unsupported:
                "The '{{name}}' is not supported until Node.js {{supported}}. The configured version range is '{{version}}'.",
        },
    },
    create(context) {
        return {
            "Program:exit"() {
                checkUnsupportedBuiltins(context, trackMap)
            },
        }
    },
}
