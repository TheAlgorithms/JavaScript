/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow exponential operators.",
            category: "ES2016",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-exponential-operators.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2016 exponential operators are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "AssignmentExpression[operator='**='], BinaryExpression[operator='**']"(
                node
            ) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
