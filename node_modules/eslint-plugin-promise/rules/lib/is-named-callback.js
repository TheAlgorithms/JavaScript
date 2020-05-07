'use strict'

let callbacks = ['done', 'cb', 'callback', 'next']

module.exports = function isNamedCallback(potentialCallbackName, exceptions) {
  for (let i = 0; i < exceptions.length; i++) {
    callbacks = callbacks.filter(item => {
      return item !== exceptions[i]
    })
  }
  return callbacks.some(trueCallbackName => {
    return potentialCallbackName === trueCallbackName
  })
}
