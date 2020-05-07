/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { definePatternSearchGenerator } = require("../utils")
const codePointEscapeSearchGenerator = definePatternSearchGenerator(
    /\\u\{[0-9a-fA-F]+\}/gu
)

/**
 * Number to Hex
 * @param {number} num number
 * @returns {string} hex string
 */
function toHex(num) {
    return `0000${num.toString(16).toUpperCase()}`.substr(-4)
}

module.exports = {
    meta: {
        docs: {
            description: "disallow Unicode code point escape sequences.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-unicode-codepoint-escapes.html",
        },
        fixable: "code",
        messages: {
            forbidden:
                "ES2015 Unicode code point escape sequences are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()

        /**
         * find code point escape, and report
         * @param  {string} text text
         * @param  {Node} node node
         * @returns {void}
         */
        function findAndReport(text, node) {
            for (const match of codePointEscapeSearchGenerator(text)) {
                const start = match.index
                const end = start + match[0].length
                const range = [start + node.start, end + node.start]
                context.report({
                    node,
                    loc: {
                        start: sourceCode.getLocFromIndex(range[0]),
                        end: sourceCode.getLocFromIndex(range[1]),
                    },
                    messageId: "forbidden",
                    fix(fixer) {
                        const codePointStr = text.slice(start + 3, end - 1)
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
                        let codePoint = Number(`0x${codePointStr}`)
                        let replacement = null
                        if (codePoint <= 0xffff) {
                            // BMP code point
                            replacement = toHex(codePoint)
                        } else {
                            // Astral code point; split in surrogate halves
                            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                            codePoint -= 0x10000
                            const highSurrogate = (codePoint >> 10) + 0xd800
                            const lowSurrogate = (codePoint % 0x400) + 0xdc00
                            replacement = `${toHex(highSurrogate)}\\u${toHex(
                                lowSurrogate
                            )}`
                        }
                        return fixer.replaceTextRange(
                            [range[0] + 2, range[1]],
                            replacement
                        )
                    },
                })
            }
        }

        return {
            Identifier(node) {
                findAndReport(sourceCode.getText(node), node)
            },
            Literal(node) {
                if (typeof node.value === "string") {
                    findAndReport(node.raw, node)
                }
            },
            TemplateElement(elementNode) {
                findAndReport(elementNode.value.raw, elementNode)
            },
        }
    },
}
