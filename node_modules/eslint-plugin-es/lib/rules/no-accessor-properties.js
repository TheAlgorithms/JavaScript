/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow accessor properties.",
            category: "ES5",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-accessor-properties.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES5 accessor properties are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "Property[kind='get'], Property[kind='set'], MethodDefinition[kind='get'], MethodDefinition[kind='set']"(
                node
            ) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
