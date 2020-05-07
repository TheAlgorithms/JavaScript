'use strict'

const isNamedCallback = require('./is-named-callback')

function isCallingBack(node, exceptions) {
  const isCallExpression = node.type === 'CallExpression'
  const callee = node.callee || {}
  const nameIsCallback = isNamedCallback(callee.name, exceptions)
  const isCB = isCallExpression && nameIsCallback
  return isCB
}

module.exports = isCallingBack
