/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { Range } = require("semver") //eslint-disable-line no-unused-vars
const { ReferenceTracker } = require("eslint-utils")
const getConfiguredNodeVersion = require("./get-configured-node-version")
const getSemverRange = require("./get-semver-range")

/**
 * Parses the options.
 * @param {RuleContext} context The rule context.
 * @returns {{version:Range,ignores:Set<string>}} Parsed value.
 */
function parseOptions(context) {
    const raw = context.options[0] || {}
    const filePath = context.getFilename()
    const version = getConfiguredNodeVersion(raw.version, filePath)
    const ignores = new Set(raw.ignores || [])

    return Object.freeze({ version, ignores })
}

/**
 * Verify the code to report unsupported APIs.
 * @param {RuleContext} context The rule context.
 * @param {{modules:object,globals:object}} trackMap The map for APIs to report.
 * @returns {void}
 */
module.exports = function checkUnsupportedBuiltins(context, trackMap) {
    const options = parseOptions(context)
    const tracker = new ReferenceTracker(context.getScope(), { mode: "legacy" })
    const references = [
        ...tracker.iterateCjsReferences(trackMap.modules || {}),
        ...tracker.iterateEsmReferences(trackMap.modules || {}),
        ...tracker.iterateGlobalReferences(trackMap.globals || {}),
    ]

    for (const { node, path, info } of references) {
        const name = path.join(".")
        const supported =
            Boolean(info.supported) &&
            !options.version.intersects(getSemverRange(`<${info.supported}`))

        if (!supported && !options.ignores.has(name)) {
            context.report({
                node,
                messageId: "unsupported",
                data: {
                    name,
                    supported: info.supported || "???",
                    version: options.version.raw,
                },
            })
        }
    }
}
