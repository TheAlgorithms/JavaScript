/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow `new.target` meta property.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-new-target.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 'new.target' meta property is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "MetaProperty[meta.name='new'][property.name='target']"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
