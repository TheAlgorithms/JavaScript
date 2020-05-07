/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow default parameters.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-default-parameters.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 default parameters are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            ":function > AssignmentPattern"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
