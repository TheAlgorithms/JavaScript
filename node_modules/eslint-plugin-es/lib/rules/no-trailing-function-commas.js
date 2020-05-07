/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { isCommaToken } = require("../utils")

module.exports = {
    meta: {
        docs: {
            description:
                "disallow trailing commas in parameter/argument lists.",
            category: "ES2017",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-trailing-function-commas.html",
        },
        fixable: "code",
        messages: {
            forbidden:
                "ES2017 trailing commas in parameter/argument lists are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()
        return {
            ":function"(node) {
                const length = node.params.length
                if (length === 0) {
                    return
                }

                const lastParam = node.params[length - 1]
                const token = sourceCode.getTokenAfter(lastParam)
                if (isCommaToken(token)) {
                    context.report({
                        loc: token.loc,
                        messageId: "forbidden",
                        fix(fixer) {
                            return fixer.remove(token)
                        },
                    })
                }
            },
            "CallExpression, NewExpression"(node) {
                const token = sourceCode.getLastToken(node, 1)
                if (node.arguments.length >= 1 && isCommaToken(token)) {
                    context.report({
                        loc: token.loc,
                        messageId: "forbidden",
                        fix(fixer) {
                            return fixer.remove(token)
                        },
                    })
                }
            },
        }
    },
}
