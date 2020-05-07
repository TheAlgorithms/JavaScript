/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow rest/spread properties.",
            category: "ES2018",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-rest-spread-properties.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2018 rest/spread properties are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "ObjectPattern > RestElement"(node) {
                context.report({ node, messageId: "forbidden" })
            },
            "ObjectExpression > SpreadElement"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
