/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ } = require("eslint-utils")
const checkForPreferGlobal = require("../../util/check-prefer-global")

const trackMap = {
    globals: {
        console: { [READ]: true },
    },
    modules: {
        console: { [READ]: true },
    },
}

module.exports = {
    meta: {
        docs: {
            description: 'enforce either `console` or `require("console")`',
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/prefer-global/console.md",
        },
        type: "suggestion",
        fixable: null,
        schema: [{ enum: ["always", "never"] }],
        messages: {
            preferGlobal:
                "Unexpected use of 'require(\"console\")'. Use the global variable 'console' instead.",
            preferModule:
                "Unexpected use of the global variable 'console'. Use 'require(\"console\")' instead.",
        },
    },

    create(context) {
        return {
            "Program:exit"() {
                checkForPreferGlobal(context, trackMap)
            },
        }
    },
}
