/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow computed properties.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-computed-properties.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 computed properties are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":matches(Property, MethodDefinition)[computed=true]"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
