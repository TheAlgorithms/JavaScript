/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

/**
 * Checks whether it is string literal
 * @param  {string} s string source code
 * @returns {boolean} true: is string literal source code
 */
function isStringLiteralCode(s) {
    return (
        (s.startsWith("'") && s.endsWith("'")) ||
        (s.startsWith('"') && s.endsWith('"'))
    )
}

/**
 * Transform template literal to string concatenation.
 * @param  {ASTNode} node TemplateLiteral node.(not within TaggedTemplateExpression)
 * @param  {SourceCode} sourceCode SourceCode
 * @returns {string} After transformation
 */
function templateLiteralToStringConcat(node, sourceCode) {
    const ss = []
    node.quasis.forEach((q, i) => {
        const value = q.value.cooked
        if (value) {
            ss.push(JSON.stringify(value))
        }

        if (i < node.expressions.length) {
            const e = node.expressions[i]
            const text = sourceCode.getText(e)
            ss.push(text)
        }
    })
    if (!ss.length || !isStringLiteralCode(ss[0])) {
        ss.unshift('""')
    }
    return ss.join("+")
}

module.exports = {
    meta: {
        docs: {
            description: "disallow template literals.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-template-literals.html",
        },
        fixable: "code",
        messages: {
            forbidden: "ES2015 template literals are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        const sourceCode = context.getSourceCode()
        return {
            "TaggedTemplateExpression, :not(TaggedTemplateExpression) > TemplateLiteral"(
                node
            ) {
                context.report({
                    node,
                    messageId: "forbidden",
                    fix:
                        node.type === "TemplateLiteral"
                            ? fixer =>
                                  fixer.replaceText(
                                      node,
                                      templateLiteralToStringConcat(
                                          node,
                                          sourceCode
                                      )
                                  )
                            : undefined,
                })
            },
        }
    },
}
