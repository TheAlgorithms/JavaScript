/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow block-scoped function declarations.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-block-scoped-functions.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 block-scoped functions are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":not(:function) > BlockStatement > FunctionDeclaration"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
