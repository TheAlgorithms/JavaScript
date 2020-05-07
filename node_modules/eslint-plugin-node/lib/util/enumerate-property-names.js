/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { CALL, CONSTRUCT, READ } = require("eslint-utils")

/**
 * Enumerate property names of a given object recursively.
 * @param {object} trackMap The map for APIs to enumerate.
 * @param {string[]|undefined} path The path to the current map.
 * @returns {IterableIterator<string>} The property names of the map.
 */
function* enumeratePropertyNames(trackMap, path = []) {
    for (const key of Object.keys(trackMap)) {
        const value = trackMap[key]
        if (typeof value !== "object") {
            continue
        }

        path.push(key)

        if (value[CALL]) {
            yield `${path.join(".")}()`
        }
        if (value[CONSTRUCT]) {
            yield `new ${path.join(".")}()`
        }
        if (value[READ]) {
            yield path.join(".")
        }
        yield* enumeratePropertyNames(value, path)

        path.pop()
    }
}

module.exports = enumeratePropertyNames
