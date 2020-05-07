/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { Range } = require("semver")
const cache = new Map()

/**
 * Get the `semver.Range` object of a given range text.
 * @param {string} x The text expression for a semver range.
 * @returns {Range|null} The range object of a given range text.
 * It's null if the `x` is not a valid range text.
 */
module.exports = function getSemverRange(x) {
    const s = String(x)
    let ret = cache.get(s) || null

    if (!ret) {
        try {
            ret = new Range(s)
        } catch (_error) {
            // Ignore parsing error.
        }
        cache.set(s, ret)
    }

    return ret
}
