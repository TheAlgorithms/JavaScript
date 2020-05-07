/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 *
 * @deprecated since v4.2.0
 * This rule was based on an invalid assumption.
 * No meaning.
 */
"use strict"

const path = require("path")
const resolve = require("resolve")
const getPackageJson = require("../util/get-package-json")
const mergeVisitorsInPlace = require("../util/merge-visitors-in-place")
const visitImport = require("../util/visit-import")
const visitRequire = require("../util/visit-require")

const CORE_MODULES = new Set([
    "assert",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "dns",
    /* "domain", */ "events",
    "fs",
    "http",
    "https",
    "module",
    "net",
    "os",
    "path",
    /* "punycode", */ "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "timers",
    "tls",
    "tty",
    "url",
    "util",
    "vm",
    "zlib",
])
const BACK_SLASH = /\\/gu

module.exports = {
    meta: {
        docs: {
            description:
                "disallow third-party modules which are hiding core modules",
            category: "Possible Errors",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/no-hide-core-modules.md",
        },
        type: "problem",
        deprecated: true,
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: { enum: Array.from(CORE_MODULES) },
                        additionalItems: false,
                        uniqueItems: true,
                    },
                    ignoreDirectDependencies: { type: "boolean" },
                    ignoreIndirectDependencies: { type: "boolean" },
                },
                additionalProperties: false,
            },
        ],
    },
    create(context) {
        if (context.getFilename() === "<input>") {
            return {}
        }
        const filePath = path.resolve(context.getFilename())
        const dirPath = path.dirname(filePath)
        const packageJson = getPackageJson(filePath)
        const deps = new Set(
            [].concat(
                Object.keys((packageJson && packageJson.dependencies) || {}),
                Object.keys((packageJson && packageJson.devDependencies) || {})
            )
        )
        const options = context.options[0] || {}
        const allow = options.allow || []
        const ignoreDirectDependencies = Boolean(
            options.ignoreDirectDependencies
        )
        const ignoreIndirectDependencies = Boolean(
            options.ignoreIndirectDependencies
        )
        const targets = []

        return [
            visitImport(context, { includeCore: true }, importTargets =>
                targets.push(...importTargets)
            ),
            visitRequire(context, { includeCore: true }, requireTargets =>
                targets.push(...requireTargets)
            ),
            {
                "Program:exit"() {
                    for (const target of targets.filter(
                        t =>
                            CORE_MODULES.has(t.moduleName) &&
                            t.moduleName === t.name
                    )) {
                        const name = target.moduleName
                        const allowed =
                            allow.indexOf(name) !== -1 ||
                            (ignoreDirectDependencies && deps.has(name)) ||
                            (ignoreIndirectDependencies && !deps.has(name))

                        if (allowed) {
                            continue
                        }

                        let resolved = ""
                        try {
                            resolved = resolve.sync(`${name}/`, {
                                basedir: dirPath,
                            })
                        } catch (_error) {
                            continue
                        }

                        context.report({
                            node: target.node,
                            loc: target.node.loc,
                            message:
                                "Unexpected import of third-party module '{{name}}'.",
                            data: {
                                name: path
                                    .relative(dirPath, resolved)
                                    .replace(BACK_SLASH, "/"),
                            },
                        })
                    }
                },
            },
        ].reduce(
            (mergedVisitor, thisVisitor) =>
                mergeVisitorsInPlace(mergedVisitor, thisVisitor),
            {}
        )
    },
}
