/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow class declarations.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-classes.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 class declarations are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "ClassDeclaration, ClassExpression"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
