/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { RegExpValidator } = require("regexpp")
const { getRegExpCalls } = require("../utils")

const scNamePattern = /^(?:Script(?:_Extensions)?|scx?)$/u
const scValuePattern = /^(?:Dogr|Dogra|Gong|Gunjala_Gondi|Hanifi_Rohingya|Maka|Makasar|Medefaidrin|Medf|Old_Sogdian|Rohg|Sogd|Sogdian|Sogo)$/u

function isNewUnicodePropertyKeyValuePair(key, value) {
    return scNamePattern.test(key) && scValuePattern.test(value)
}

function isNewBinaryUnicodeProperty(key) {
    return key === "Extended_Pictographic"
}

/**
 * Verify a given regular expression.
 * @param {RuleContext} context The rule context to report.
 * @param {Node} node The AST node to report.
 * @param {string} pattern The pattern part of a RegExp.
 * @param {string} flags The flags part of a RegExp.
 * @returns {void}
 */
function verify(context, node, pattern, flags) {
    try {
        let foundValue = ""

        new RegExpValidator({
            onUnicodePropertyCharacterSet(start, end, _kind, key, value) {
                if (foundValue) {
                    return
                }
                if (
                    value
                        ? isNewUnicodePropertyKeyValuePair(key, value)
                        : isNewBinaryUnicodeProperty(key)
                ) {
                    foundValue = pattern.slice(start, end)
                }
            },
        }).validatePattern(pattern, 0, pattern.length, flags.includes("u"))

        if (foundValue) {
            context.report({
                node,
                messageId: "forbidden",
                data: { value: foundValue },
            })
        }
    } catch (error) {
        //istanbul ignore else
        if (error.message.startsWith("Invalid regular expression:")) {
            return
        }
        //istanbul ignore next
        throw error
    }
}

module.exports = {
    meta: {
        docs: {
            description:
                "disallow the new values of RegExp Unicode property escape sequences in ES2019",
            category: "ES2019",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-regexp-unicode-property-escapes-2019.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2019 '{{value}}' is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "Literal[regex]"(node) {
                const { pattern, flags } = node.regex
                verify(context, node, pattern || "", flags || "")
            },

            "Program:exit"() {
                const scope = context.getScope()
                for (const { node, pattern, flags } of getRegExpCalls(scope)) {
                    verify(context, node, pattern || "", flags || "")
                }
            },
        }
    },
}
