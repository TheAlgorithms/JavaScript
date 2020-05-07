/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { isOpeningBracketToken, isClosingBracketToken } = require("eslint-utils")

module.exports = {
    meta: {
        docs: {
            description: "disallow property shorthands.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-property-shorthands.html",
        },
        fixable: "code",
        messages: {
            forbidden: "ES2015 property shorthands are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()

        /**
         * Fixes a FunctionExpression node by making it into a longform property.
         * @param {SourceCodeFixer} fixer The fixer object
         * @param {ASTNode} node A `Property` node that has a `FunctionExpression` as its value
         * @returns {object} A fix for this node
         */
        function makeFunctionLongform(fixer, node) {
            const firstKeyToken = node.computed
                ? sourceCode.getTokenBefore(node.key, isOpeningBracketToken)
                : sourceCode.getFirstToken(node.key)
            const lastKeyToken = node.computed
                ? sourceCode.getTokenAfter(node.key, isClosingBracketToken)
                : sourceCode.getLastToken(node.key)
            const keyText = sourceCode.text.slice(
                firstKeyToken.range[0],
                lastKeyToken.range[1]
            )
            let functionHeader = "function"

            if (node.value.async) {
                functionHeader = `async ${functionHeader}`
            }
            if (node.value.generator) {
                functionHeader = `${functionHeader}*`
            }

            return fixer.replaceTextRange(
                [node.range[0], lastKeyToken.range[1]],
                `${keyText}: ${functionHeader}`
            )
        }

        return {
            "ObjectExpression > :matches(Property[method=true], Property[shorthand=true])"(
                node
            ) {
                context.report({
                    node,
                    messageId: "forbidden",
                    fix: node.method
                        ? fixer => makeFunctionLongform(fixer, node)
                        : fixer =>
                              fixer.insertTextAfter(
                                  node.key,
                                  `: ${node.key.name}`
                              ),
                })
            },
        }
    },
}
