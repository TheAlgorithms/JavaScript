/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Pattern = /^0[oO]/u

module.exports = {
    meta: {
        docs: {
            description: "disallow octal numeric literals.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-octal-numeric-literals.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 octal numeric literals are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            Literal(node) {
                if (typeof node.value === "number" && Pattern.test(node.raw)) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
