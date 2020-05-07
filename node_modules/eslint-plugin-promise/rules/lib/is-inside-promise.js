'use strict'

function isInsidePromise(node) {
  const isFunctionExpression =
    node.type === 'FunctionExpression' ||
    node.type === 'ArrowFunctionExpression'
  const parent = node.parent || {}
  const callee = parent.callee || {}
  const name = (callee.property && callee.property.name) || ''
  const parentIsPromise = name === 'then' || name === 'catch'
  const isInCB = isFunctionExpression && parentIsPromise
  return isInCB
}

module.exports = isInsidePromise
