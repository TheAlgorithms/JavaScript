/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const CodePathAnalyzer = safeRequire(
    "eslint/lib/linter/code-path-analysis/code-path-analyzer",
    "eslint/lib/code-path-analysis/code-path-analyzer"
)
const CodePathSegment = safeRequire(
    "eslint/lib/linter/code-path-analysis/code-path-segment",
    "eslint/lib/code-path-analysis/code-path-segment"
)
const CodePath = safeRequire(
    "eslint/lib/linter/code-path-analysis/code-path",
    "eslint/lib/code-path-analysis/code-path"
)

const originalLeaveNode =
    CodePathAnalyzer && CodePathAnalyzer.prototype.leaveNode

/**
 * Imports a specific module.
 * @param {...string} moduleNames - module names to import.
 * @returns {object|null} The imported object, or null.
 */
function safeRequire(...moduleNames) {
    for (const moduleName of moduleNames) {
        try {
            return require(moduleName)
        } catch (_err) {
            // Ignore.
        }
    }
    return null
}

/* istanbul ignore next */
/**
 * Copied from https://github.com/eslint/eslint/blob/16fad5880bb70e9dddbeab8ed0f425ae51f5841f/lib/code-path-analysis/code-path-analyzer.js#L137
 *
 * @param {CodePathAnalyzer} analyzer - The instance.
 * @param {ASTNode} node - The current AST node.
 * @returns {void}
 */
function forwardCurrentToHead(analyzer, node) {
    const codePath = analyzer.codePath
    const state = CodePath.getState(codePath)
    const currentSegments = state.currentSegments
    const headSegments = state.headSegments
    const end = Math.max(currentSegments.length, headSegments.length)
    let i = 0
    let currentSegment = null
    let headSegment = null

    // Fires leaving events.
    for (i = 0; i < end; ++i) {
        currentSegment = currentSegments[i]
        headSegment = headSegments[i]

        if (currentSegment !== headSegment && currentSegment) {
            if (currentSegment.reachable) {
                analyzer.emitter.emit(
                    "onCodePathSegmentEnd",
                    currentSegment,
                    node
                )
            }
        }
    }

    // Update state.
    state.currentSegments = headSegments

    // Fires entering events.
    for (i = 0; i < end; ++i) {
        currentSegment = currentSegments[i]
        headSegment = headSegments[i]

        if (currentSegment !== headSegment && headSegment) {
            CodePathSegment.markUsed(headSegment)
            if (headSegment.reachable) {
                analyzer.emitter.emit(
                    "onCodePathSegmentStart",
                    headSegment,
                    node
                )
            }
        }
    }
}

/**
 * Checks whether a given node is `process.exit()` or not.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is `process.exit()`.
 */
function isProcessExit(node) {
    return (
        node.type === "CallExpression" &&
        node.callee.type === "MemberExpression" &&
        node.callee.computed === false &&
        node.callee.object.type === "Identifier" &&
        node.callee.object.name === "process" &&
        node.callee.property.type === "Identifier" &&
        node.callee.property.name === "exit"
    )
}

/**
 * The function to override `CodePathAnalyzer.prototype.leaveNode` in order to
 * address `process.exit()` as throw.
 *
 * @this CodePathAnalyzer
 * @param {ASTNode} node - A node to be left.
 * @returns {void}
 */
function overrideLeaveNode(node) {
    if (isProcessExit(node)) {
        this.currentNode = node

        forwardCurrentToHead(this, node)
        CodePath.getState(this.codePath).makeThrow()

        this.original.leaveNode(node)
        this.currentNode = null
    } else {
        originalLeaveNode.call(this, node)
    }
}

const visitor =
    CodePathAnalyzer == null
        ? {}
        : {
              Program: function installProcessExitAsThrow() {
                  CodePathAnalyzer.prototype.leaveNode = overrideLeaveNode
              },
              "Program:exit": function restoreProcessExitAsThrow() {
                  CodePathAnalyzer.prototype.leaveNode = originalLeaveNode
              },
          }

module.exports = {
    meta: {
        docs: {
            description:
                "make `process.exit()` expressions the same code path as `throw`",
            category: "Possible Errors",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v10.0.0/docs/rules/process-exit-as-throw.md",
        },
        type: "problem",
        fixable: null,
        schema: [],
        supported: CodePathAnalyzer != null,
    },
    create() {
        return visitor
    },
}
