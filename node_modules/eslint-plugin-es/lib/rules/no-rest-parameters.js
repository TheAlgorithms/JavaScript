/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow rest parameters.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-rest-parameters.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 rest parameters are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":function > RestElement"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
