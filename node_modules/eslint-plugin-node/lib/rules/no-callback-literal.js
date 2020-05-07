/**
 * @author Jamund Ferguson
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description:
                "ensure Node.js-style error-first callback pattern is followed",
            category: "Possible Errors",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/no-callback-literal.md",
        },
        type: "problem",
        fixable: null,
        schema: [],
    },

    create(context) {
        const callbackNames = ["callback", "cb"]

        function isCallback(name) {
            return callbackNames.indexOf(name) > -1
        }

        return {
            CallExpression(node) {
                const errorArg = node.arguments[0]
                const calleeName = node.callee.name

                if (
                    errorArg &&
                    !couldBeError(errorArg) &&
                    isCallback(calleeName)
                ) {
                    context.report({
                        node,
                        message:
                            "Unexpected literal in error position of callback.",
                    })
                }
            },
        }
    },
}

/**
 * Determine if a node has a possiblity to be an Error object
 * @param  {ASTNode}  node  ASTNode to check
 * @returns {boolean}       True if there is a chance it contains an Error obj
 */
function couldBeError(node) {
    switch (node.type) {
        case "Identifier":
        case "CallExpression":
        case "NewExpression":
        case "MemberExpression":
        case "TaggedTemplateExpression":
        case "YieldExpression":
            return true // possibly an error object.

        case "AssignmentExpression":
            return couldBeError(node.right)

        case "SequenceExpression": {
            const exprs = node.expressions
            return exprs.length !== 0 && couldBeError(exprs[exprs.length - 1])
        }

        case "LogicalExpression":
            return couldBeError(node.left) || couldBeError(node.right)

        case "ConditionalExpression":
            return couldBeError(node.consequent) || couldBeError(node.alternate)

        default:
            return node.value === null
    }
}
