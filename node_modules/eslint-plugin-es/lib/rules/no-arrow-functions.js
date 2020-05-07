/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { isArrowToken, isParenthesized } = require("eslint-utils")

module.exports = {
    meta: {
        docs: {
            description: "disallow arrow function expressions.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-arrow-functions.html",
        },
        fixable: "code",
        messages: {
            forbidden: "ES2015 arrow function expressions are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()

        /**
         * ArrowFunctionExpression to FunctionExpression
         * @param  {Node} node ArrowFunctionExpression Node
         * @param  {boolean} hasThis `true` if the function has `this`.
         * @returns {string} function expression text
         */
        function toFunctionExpression(node, hasThis) {
            const params = node.params
            const paramText = params.length
                ? sourceCode.text.slice(
                      params[0].range[0],
                      params[params.length - 1].range[1]
                  )
                : ""

            const arrowToken = sourceCode.getTokenBefore(
                node.body,
                isArrowToken
            )
            const preText = sourceCode.text.slice(
                arrowToken.range[1],
                node.body.range[0]
            )
            const bodyText = sourceCode.text
                .slice(arrowToken.range[1], node.range[1])
                .trim()

            let resultText =
                /*eslint-disable @mysticatea/prettier */
                node.body.type === "BlockStatement" ? (
                    `function(${paramText}) ${bodyText}`
                ) : preText.includes("\n") ? (
                    `function(${paramText}) { return (${bodyText}) }`
                ) : (
                    `function(${paramText}) { return ${bodyText} }`
                )
                /*eslint-enable @mysticatea/prettier */

            if (hasThis) {
                resultText += ".bind(this)"
            }
            if (
                node.parent.type === "ExpressionStatement" &&
                !isParenthesized(node, sourceCode)
            ) {
                resultText = `(${resultText})`
            }

            return resultText
        }

        /**
         * Report that ArrowFunctionExpression is being used
         * @param {Node} node ArrowFunctionExpression Node
         * @param {boolean} hasThis Whether `this` is referenced in` function` scope
         * @param {boolean} hasSuper Whether `super` is referenced in` function` scope
         * @returns {void}
         */
        function report(node, hasThis, hasSuper) {
            context.report({
                node,
                messageId: "forbidden",
                fix(fixer) {
                    if (hasSuper) {
                        return undefined
                    }
                    return fixer.replaceText(
                        node,
                        toFunctionExpression(node, hasThis)
                    )
                },
            })
        }

        let stack = { upper: null, hasThis: false, hasSuper: false }
        return {
            ":function"() {
                stack = { upper: stack, hasThis: false, hasSuper: false }
            },
            ":function:exit"(node) {
                const { hasThis, hasSuper } = stack
                stack = stack.upper

                if (node.type === "ArrowFunctionExpression") {
                    report(node, hasThis, hasSuper)

                    stack.hasThis = stack.hasThis || hasThis
                    stack.hasSuper = stack.hasSuper || hasSuper
                }
            },
            ThisExpression() {
                stack.hasThis = true
            },
            Super() {
                stack.hasSuper = true
            },
        }
    },
}
