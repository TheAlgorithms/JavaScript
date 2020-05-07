/**
 * Rule: prefer-await-to-then
 * Discourage using then() and instead use async/await.
 */

'use strict'

const getDocsUrl = require('./lib/get-docs-url')

module.exports = {
  meta: {
    docs: {
      url: getDocsUrl('prefer-await-to-then')
    }
  },
  create(context) {
    /** Returns true if node is inside yield or await expression. */
    function isInsideYieldOrAwait() {
      return context.getAncestors().some(parent => {
        return (
          parent.type === 'AwaitExpression' || parent.type === 'YieldExpression'
        )
      })
    }

    /**
     * Returns true if node is created at the top-level scope.
     * Await statements are not allowed at the top level,
     * only within function declarations.
     */
    function isTopLevelScoped() {
      return context.getScope().block.type === 'Program'
    }

    return {
      MemberExpression(node) {
        if (isTopLevelScoped() || isInsideYieldOrAwait()) {
          return
        }

        // if you're a then expression then you're probably a promise
        if (node.property && node.property.name === 'then') {
          context.report({
            node: node.property,
            message: 'Prefer await to then().'
          })
        }
      }
    }
  }
}
