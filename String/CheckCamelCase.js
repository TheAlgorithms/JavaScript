// CheckCamelCase method checks the given string is in camelCase or not.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Camel_case

/**
 * CheckCamelCase method returns true if the string in camelCase, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in camelCase, else return false.
 */
const CheckCamelCase = (varName) => {
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    return new TypeError('Argument is not a string.')
  }

  const pat = /^[a-z][A-Za-z]*$/
  return pat.test(varName)
}

module.exports = CheckCamelCase
