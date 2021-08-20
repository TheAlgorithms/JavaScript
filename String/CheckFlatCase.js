// CheckFlatCase method checks the given string is in flatcase or not.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Naming_convention_(programming)

/**
 * CheckFlatCase method returns true if the string in flatcase, else return the false.
 * @param {String} varname the name of the variable to check.
 * @returns `Boolean` return true if the string is in flatcase, else return false.
 */
const CheckFlatCase = (varname) => {
  // firstly, check that input is a string or not.
  if (typeof varname !== 'string') {
    return new TypeError('Argument is not a string.')
  }

  const pat = /^[a-z]*$/
  return pat.test(varname)
}

module.exports = CheckFlatCase
