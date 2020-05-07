/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const path = require("path")
const resolve = require("resolve")
const getResolvePaths = require("./get-resolve-paths")
const getTryExtensions = require("./get-try-extensions")
const ImportTarget = require("./import-target")
const stripImportPathParams = require("./strip-import-path-params")

/**
 * Gets a list of `import`/`export` declaration targets.
 *
 * Core modules of Node.js (e.g. `fs`, `http`) are excluded.
 *
 * @param {RuleContext} context - The rule context.
 * @param {Object} [options] - The flag to include core modules.
 * @param {boolean} [options.includeCore] - The flag to include core modules.
 * @param {number} [options.optionIndex] - The index of rule options.
 * @param {function(ImportTarget[]):void} callback The callback function to get result.
 * @returns {ImportTarget[]} A list of found target's information.
 */
module.exports = function visitImport(
    context,
    { includeCore = false, optionIndex = 0 } = {},
    callback
) {
    const targets = []
    const basedir = path.dirname(path.resolve(context.getFilename()))
    const paths = getResolvePaths(context, optionIndex)
    const extensions = getTryExtensions(context, optionIndex)
    const options = { basedir, paths, extensions }

    return {
        [[
            "ExportAllDeclaration",
            "ExportNamedDeclaration",
            "ImportDeclaration",
            "ImportExpression",
        ]](node) {
            const sourceNode = node.source
            const name = sourceNode && stripImportPathParams(sourceNode.value)
            if (name && (includeCore || !resolve.isCore(name))) {
                targets.push(new ImportTarget(sourceNode, name, options))
            }
        },

        "Program:exit"() {
            callback(targets)
        },
    }
}
