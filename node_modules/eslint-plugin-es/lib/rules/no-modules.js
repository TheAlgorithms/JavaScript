/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow modules.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-modules.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 modules are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "ExportAllDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration, ImportDeclaration"(
                node
            ) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
