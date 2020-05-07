/**
 * Rule: no-nesting
 * Avoid nesting your promises.
 */

'use strict'

const getDocsUrl = require('./lib/get-docs-url')
const hasPromiseCallback = require('./lib/has-promise-callback')
const isInsidePromise = require('./lib/is-inside-promise')

module.exports = {
  meta: {
    docs: {
      url: getDocsUrl('no-nesting')
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (!hasPromiseCallback(node)) return
        if (context.getAncestors().some(isInsidePromise)) {
          context.report({ node, message: 'Avoid nesting promises.' })
        }
      }
    }
  }
}
