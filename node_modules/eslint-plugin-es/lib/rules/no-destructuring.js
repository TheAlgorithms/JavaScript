/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow destructuring.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-destructuring.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 destructuring is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":matches(:function, AssignmentExpression, VariableDeclarator, :function > :matches(AssignmentPattern, RestElement), ForInStatement, ForOfStatement) > :matches(ArrayPattern, ObjectPattern)"(
                node
            ) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
