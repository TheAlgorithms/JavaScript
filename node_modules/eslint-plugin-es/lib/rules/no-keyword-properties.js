/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

// https://www-archive.mozilla.org/js/language/E262-3.pdf
const keywords = new Set([
    "abstract",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
])

module.exports = {
    meta: {
        docs: {
            description: "disallow reserved words as property names.",
            category: "ES5",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-keyword-properties.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES5 reserved words as property names are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            Property(node) {
                if (
                    !node.computed &&
                    node.key.type === "Identifier" &&
                    keywords.has(node.key.name)
                ) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
            MemberExpression(node) {
                if (
                    !node.computed &&
                    node.property.type === "Identifier" &&
                    keywords.has(node.property.name)
                ) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
