/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow spread elements.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-spread-elements.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 spread elements are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":matches(ArrayExpression, CallExpression, NewExpression) > SpreadElement"(
                node
            ) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
