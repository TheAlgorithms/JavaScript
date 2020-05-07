'use strict'

const isInsidePromise = require('./is-inside-promise')

function isInsideCallback(node) {
  const isCallExpression =
    node.type === 'FunctionExpression' ||
    node.type === 'ArrowFunctionExpression' ||
    node.type === 'FunctionDeclaration' // this may be controversial

  // it's totally fine to use promises inside promises
  if (isInsidePromise(node)) return

  const name = node.params && node.params[0] && node.params[0].name
  const firstArgIsError = name === 'err' || name === 'error'
  const isInACallback = isCallExpression && firstArgIsError
  return isInACallback
}

module.exports = isInsideCallback
