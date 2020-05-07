/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ } = require("eslint-utils")
const checkForPreferGlobal = require("../../util/check-prefer-global")

const trackMap = {
    globals: {
        TextEncoder: { [READ]: true },
    },
    modules: {
        util: {
            TextEncoder: { [READ]: true },
        },
    },
}

module.exports = {
    meta: {
        docs: {
            description:
                'enforce either `TextEncoder` or `require("util").TextEncoder`',
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/prefer-global/text-encoder.md",
        },
        type: "suggestion",
        fixable: null,
        schema: [{ enum: ["always", "never"] }],
        messages: {
            preferGlobal:
                "Unexpected use of 'require(\"util\").TextEncoder'. Use the global variable 'TextEncoder' instead.",
            preferModule:
                "Unexpected use of the global variable 'TextEncoder'. Use 'require(\"util\").TextEncoder' instead.",
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
