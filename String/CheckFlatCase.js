// checkFlatCase method checks if the given string is in flatcase or not. Flatcase is a convention
// where all letters are in lowercase, and there are no spaces between words.
// thisvariable is an example of flatcase. In camelCase it would be thisVariable, snake_case this_variable and so on.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Naming_convention_(programming)

/**
 * checkFlatCase method returns true if the string in flatcase, else return the false.
 * @param {string} varname the name of the variable to check.
 * @returns {boolean} return true if the string is in flatcase, else return false.
 */
const checkFlatCase = (varname) => {
  // firstly, check that input is a string or not.
  if (typeof varname !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /^[a-z]*$/
  return pat.test(varname)
}

export { checkFlatCase }
