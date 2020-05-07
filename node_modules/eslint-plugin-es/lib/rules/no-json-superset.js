/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { definePatternSearchGenerator } = require("../utils")
const iterateTargetChars = definePatternSearchGenerator(/[\u2028\u2029]/gu)

module.exports = {
    meta: {
        docs: {
            description: "disallow `\\u2028` and `\\u2029` in string literals.",
            category: "ES2019",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-json-superset.html",
        },
        fixable: "code",
        messages: {
            forbidden: "ES2019 '\\u{{code}}' in string literals is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()
        return {
            Literal(node) {
                if (typeof node.value !== "string") {
                    return
                }

                const offset = node.range[0]
                for (const { index } of iterateTargetChars(node.raw)) {
                    const code = node.raw.codePointAt(index).toString(16)
                    const loc = sourceCode.getLocFromIndex(offset + index)

                    context.report({
                        node,
                        loc,
                        messageId: "forbidden",
                        data: { code },
                        fix(fixer) {
                            return fixer.replaceTextRange(
                                [offset + index, offset + index + 1],
                                `\\u${code}`
                            )
                        },
                    })
                }
            },
        }
    },
}
