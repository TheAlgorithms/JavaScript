/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow `for-of` statements.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-for-of-loops.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 'for-of' statements are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ForOfStatement(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
