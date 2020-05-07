/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow generator function declarations.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-generators.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 generator function declarations are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":function[generator=true]"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
