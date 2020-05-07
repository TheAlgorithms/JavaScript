/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description:
                "disallow `super` property accesses in object literals.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-object-super-properties.html",
        },
        fixable: null,
        messages: {
            forbidden:
                "ES2015 'super' property accesses in object literals are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        let stack = null

        return {
            Super(node) {
                if (stack && stack.inObjectMethod) {
                    context.report({ node, messageId: "forbidden" })
                }
            },

            ":matches(FunctionExpression, FunctionDeclaration)"(node) {
                const { type, method } = node.parent
                stack = {
                    inObjectMethod: type === "Property" && method === true,
                    upper: stack,
                }
            },
            ":matches(FunctionExpression, FunctionDeclaration):exit"() {
                stack = stack.upper
            },
        }
    },
}
