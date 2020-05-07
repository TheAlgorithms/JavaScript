/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { CALL, ReferenceTracker } = require("eslint-utils")

const trackMap = {
    fs: {
        access: { [CALL]: true },
        copyFile: { [CALL]: true },
        open: { [CALL]: true },
        rename: { [CALL]: true },
        truncate: { [CALL]: true },
        rmdir: { [CALL]: true },
        mkdir: { [CALL]: true },
        readdir: { [CALL]: true },
        readlink: { [CALL]: true },
        symlink: { [CALL]: true },
        lstat: { [CALL]: true },
        stat: { [CALL]: true },
        link: { [CALL]: true },
        unlink: { [CALL]: true },
        chmod: { [CALL]: true },
        lchmod: { [CALL]: true },
        lchown: { [CALL]: true },
        chown: { [CALL]: true },
        utimes: { [CALL]: true },
        realpath: { [CALL]: true },
        mkdtemp: { [CALL]: true },
        writeFile: { [CALL]: true },
        appendFile: { [CALL]: true },
        readFile: { [CALL]: true },
    },
}

module.exports = {
    meta: {
        docs: {
            description: 'enforce `require("fs").promises`',
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/prefer-promises/fs.md",
        },
        fixable: null,
        messages: {
            preferPromises: "Use 'fs.promises.{{name}}()' instead.",
        },
        schema: [],
        type: "suggestion",
    },

    create(context) {
        return {
            "Program:exit"() {
                const scope = context.getScope()
                const tracker = new ReferenceTracker(scope, { mode: "legacy" })
                const references = [
                    ...tracker.iterateCjsReferences(trackMap),
                    ...tracker.iterateEsmReferences(trackMap),
                ]

                for (const { node, path } of references) {
                    const name = path[path.length - 1]
                    context.report({
                        node,
                        messageId: "preferPromises",
                        data: { name },
                    })
                }
            },
        }
    },
}
