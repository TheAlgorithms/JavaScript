/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ, ReferenceTracker } = require("eslint-utils")

module.exports = {
    meta: {
        docs: {
            description: "disallow the subclassing of the built-in classes.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-subclassing-builtins.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2015 subclassing of '{{name}}' is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "Program:exit"() {
                const tracker = new ReferenceTracker(context.getScope())
                for (const { node, path } of tracker.iterateGlobalReferences({
                    Array: { [READ]: true },
                    Boolean: { [READ]: true },
                    Error: { [READ]: true },
                    RegExp: { [READ]: true },
                    Function: { [READ]: true },
                    Map: { [READ]: true },
                    Number: { [READ]: true },
                    Promise: { [READ]: true },
                    Set: { [READ]: true },
                    String: { [READ]: true },
                })) {
                    if (
                        node.parent.type.startsWith("Class") &&
                        node.parent.superClass === node
                    ) {
                        context.report({
                            node,
                            messageId: "forbidden",
                            data: { name: path.join(".") },
                        })
                    }
                }
            },
        }
    },
}
