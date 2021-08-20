// CheckSnakeCase method checks the given string is in snake_case or not.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Naming_convention_(programming)

/**
 * CheckSnakeCase method returns true if the string in snake_case, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in snake_case, else return false.
 */
const CheckSnakeCase = (varName) => {
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    return new TypeError('Argument is not a string.')
  }

  const pat = /(.*?)_([a-zA-Z])*/
  return pat.test(varName)
}

module.exports = CheckSnakeCase
