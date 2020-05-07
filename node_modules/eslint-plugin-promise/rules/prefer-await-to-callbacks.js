'use strict'

const getDocsUrl = require('./lib/get-docs-url')

module.exports = {
  meta: {
    docs: {
      url: getDocsUrl('prefer-await-to-callbacks')
    },
    messages: {
      error: 'Avoid callbacks. Prefer Async/Await.'
    }
  },
  create(context) {
    function checkLastParamsForCallback(node) {
      const lastParam = node.params[node.params.length - 1] || {}
      if (lastParam.name === 'callback' || lastParam.name === 'cb') {
        context.report({ node: lastParam, messageId: 'error' })
      }
    }
    function isInsideYieldOrAwait() {
      return context.getAncestors().some(parent => {
        return (
          parent.type === 'AwaitExpression' || parent.type === 'YieldExpression'
        )
      })
    }
    return {
      CallExpression(node) {
        // Callbacks aren't allowed.
        if (node.callee.name === 'cb' || node.callee.name === 'callback') {
          context.report({ node, messageId: 'error' })
          return
        }

        // Then-ables aren't allowed either.
        const args = node.arguments
        const lastArgIndex = args.length - 1
        const arg = lastArgIndex > -1 && node.arguments[lastArgIndex]
        if (
          (arg && arg.type === 'FunctionExpression') ||
          arg.type === 'ArrowFunctionExpression'
        ) {
          // Ignore event listener callbacks.
          if (
            node.callee.property &&
            (node.callee.property.name === 'on' ||
              node.callee.property.name === 'once')
          ) {
            return
          }
          if (arg.params && arg.params[0] && arg.params[0].name === 'err') {
            if (!isInsideYieldOrAwait()) {
              context.report({ node: arg, messageId: 'error' })
            }
          }
        }
      },
      FunctionDeclaration: checkLastParamsForCallback,
      FunctionExpression: checkLastParamsForCallback,
      ArrowFunctionExpression: checkLastParamsForCallback
    }
  }
}
