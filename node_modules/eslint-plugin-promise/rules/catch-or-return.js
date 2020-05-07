/**
 * Rule: catch-or-return
 * Ensures that promises either include a catch() handler
 * or are returned (to be handled upstream)
 */

'use strict'

const getDocsUrl = require('./lib/get-docs-url')
const isPromise = require('./lib/is-promise')

module.exports = {
  meta: {
    docs: {
      url: getDocsUrl('catch-or-return')
    },
    messages: {
      terminationMethod: 'Expected {{ terminationMethod }}() or return'
    }
  },
  create(context) {
    const options = context.options[0] || {}
    const allowThen = options.allowThen
    const allowFinally = options.allowFinally
    let terminationMethod = options.terminationMethod || 'catch'

    if (typeof terminationMethod === 'string') {
      terminationMethod = [terminationMethod]
    }

    function isAllowedPromiseTermination(expression) {
      // somePromise.then(a, b)
      if (
        allowThen &&
        expression.type === 'CallExpression' &&
        expression.callee.type === 'MemberExpression' &&
        expression.callee.property.name === 'then' &&
        expression.arguments.length === 2
      ) {
        return true
      }

      // somePromise.catch().finally(fn)
      if (
        allowFinally &&
        expression.type === 'CallExpression' &&
        expression.callee.type === 'MemberExpression' &&
        expression.callee.property.name === 'finally' &&
        isPromise(expression.callee.object) &&
        isAllowedPromiseTermination(expression.callee.object)
      ) {
        return true
      }

      // somePromise.catch()
      if (
        expression.type === 'CallExpression' &&
        expression.callee.type === 'MemberExpression' &&
        terminationMethod.indexOf(expression.callee.property.name) !== -1
      ) {
        return true
      }

      // somePromise['catch']()
      if (
        expression.type === 'CallExpression' &&
        expression.callee.type === 'MemberExpression' &&
        expression.callee.property.type === 'Literal' &&
        expression.callee.property.value === 'catch'
      ) {
        return true
      }

      return false
    }

    return {
      ExpressionStatement(node) {
        if (!isPromise(node.expression)) {
          return
        }

        if (isAllowedPromiseTermination(node.expression)) {
          return
        }

        context.report({
          node,
          messageId: 'terminationMethod',
          data: { terminationMethod }
        })
      }
    }
  }
}
