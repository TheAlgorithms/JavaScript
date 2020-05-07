/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description:
                "disallow template literals with invalid escape sequences.",
            category: "ES2018",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-malformed-template-literals.html",
        },
        fixable: null,
        messages: {
            forbidden:
                "ES2018 template literals with invalid escape sequences are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const reported = new Set()
        return {
            "TemplateElement[value.cooked=null]"(elementNode) {
                const node = elementNode.parent
                if (!reported.has(node)) {
                    reported.add(node)
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
