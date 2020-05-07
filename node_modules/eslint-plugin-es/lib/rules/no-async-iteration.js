/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow async iteration.",
            category: "ES2018",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-async-iteration.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2018 async iteration is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":function[async=true][generator=true]"(node) {
                context.report({ node, messageId: "forbidden" })
            },
            "ForOfStatement[await=true]"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
