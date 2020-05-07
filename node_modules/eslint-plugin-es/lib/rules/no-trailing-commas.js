/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { isCommaToken } = require("../utils")

module.exports = {
    meta: {
        docs: {
            description: "disallow trailing commas in array/object literals.",
            category: "ES5",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-trailing-commas.html",
        },
        fixable: null,
        messages: {
            forbidden:
                "ES5 trailing commas in array/object literals are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()
        return {
            "ArrayExpression, ArrayPattern, ObjectExpression, ObjectPattern"(
                node
            ) {
                const token = sourceCode.getLastToken(node, 1)
                if (isCommaToken(token)) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
