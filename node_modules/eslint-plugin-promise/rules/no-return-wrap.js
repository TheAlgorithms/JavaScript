/**
 * Rule: no-return-wrap function
 * Prevents uneccessary wrapping of results in Promise.resolve
 * or Promise.reject as the Promise will do that for us
 */

'use strict'

const getDocsUrl = require('./lib/get-docs-url')
const isPromise = require('./lib/is-promise')

function isInPromise(context) {
  let functionNode = context
    .getAncestors()
    .filter(node => {
      return (
        node.type === 'ArrowFunctionExpression' ||
        node.type === 'FunctionExpression'
      )
    })
    .reverse()[0]
  while (
    functionNode &&
    functionNode.parent &&
    functionNode.parent.type === 'MemberExpression' &&
    functionNode.parent.object === functionNode &&
    functionNode.parent.property.type === 'Identifier' &&
    functionNode.parent.property.name === 'bind' &&
    functionNode.parent.parent &&
    functionNode.parent.parent.type === 'CallExpression' &&
    functionNode.parent.parent.callee === functionNode.parent
  ) {
    functionNode = functionNode.parent.parent
  }
  return functionNode && functionNode.parent && isPromise(functionNode.parent)
}

module.exports = {
  meta: {
    docs: {
      url: getDocsUrl('no-return-wrap')
    },
    messages: {
      resolve: 'Avoid wrapping return values in Promise.resolve',
      reject: 'Expected throw instead of Promise.reject'
    }
  },
  create(context) {
    const options = context.options[0] || {}
    const allowReject = options.allowReject

    return {
      ReturnStatement(node) {
        if (isInPromise(context)) {
          if (node.argument) {
            if (node.argument.type === 'CallExpression') {
              if (node.argument.callee.type === 'MemberExpression') {
                if (node.argument.callee.object.name === 'Promise') {
                  if (node.argument.callee.property.name === 'resolve') {
                    context.report({ node, messageId: 'resolve' })
                  } else if (
                    !allowReject &&
                    node.argument.callee.property.name === 'reject'
                  ) {
                    context.report({ node, messageId: 'reject' })
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
