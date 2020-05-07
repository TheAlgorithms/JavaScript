/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow async function declarations.",
            category: "ES2017",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-async-functions.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2017 async function declarations are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":function[async=true]"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
