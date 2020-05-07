/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { ReferenceTracker } = require("eslint-utils")

/**
 * Verifier for `prefer-global/*` rules.
 */
class Verifier {
    /**
     * Initialize this instance.
     * @param {RuleContext} context The rule context to report.
     * @param {{modules:object,globals:object}} trackMap The track map.
     */
    constructor(context, trackMap) {
        this.context = context
        this.trackMap = trackMap
        this.verify =
            context.options[0] === "never"
                ? this.verifyToPreferModules
                : this.verifyToPreferGlobals
    }

    /**
     * Verify the code to suggest the use of globals.
     * @returns {void}
     */
    verifyToPreferGlobals() {
        const { context, trackMap } = this
        const tracker = new ReferenceTracker(context.getScope(), {
            mode: "legacy",
        })

        for (const { node } of [
            ...tracker.iterateCjsReferences(trackMap.modules),
            ...tracker.iterateEsmReferences(trackMap.modules),
        ]) {
            context.report({ node, messageId: "preferGlobal" })
        }
    }

    /**
     * Verify the code to suggest the use of modules.
     * @returns {void}
     */
    verifyToPreferModules() {
        const { context, trackMap } = this
        const tracker = new ReferenceTracker(context.getScope())

        for (const { node } of tracker.iterateGlobalReferences(
            trackMap.globals
        )) {
            context.report({ node, messageId: "preferModule" })
        }
    }
}

module.exports = function checkForPreferGlobal(context, trackMap) {
    new Verifier(context, trackMap).verify()
}
