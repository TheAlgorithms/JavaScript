/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ } = require("eslint-utils")
const checkForPreferGlobal = require("../../util/check-prefer-global")

const trackMap = {
    globals: {
        URL: { [READ]: true },
    },
    modules: {
        url: {
            URL: { [READ]: true },
        },
    },
}

module.exports = {
    meta: {
        docs: {
            description: 'enforce either `URL` or `require("url").URL`',
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/prefer-global/url.md",
        },
        type: "suggestion",
        fixable: null,
        schema: [{ enum: ["always", "never"] }],
        messages: {
            preferGlobal:
                "Unexpected use of 'require(\"url\").URL'. Use the global variable 'URL' instead.",
            preferModule:
                "Unexpected use of the global variable 'URL'. Use 'require(\"url\").URL' instead.",
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
