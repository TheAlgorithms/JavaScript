/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = function stripImportPathParams(path) {
    const i = path.indexOf("!")
    return i === -1 ? path : path.slice(0, i)
}
