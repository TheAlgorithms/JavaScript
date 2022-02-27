/**
 * @function checkPangram
 * @description - Pangram is a sentence that contains all the letters in the alphabet https://en.wikipedia.org/wiki/Pangram
 * @param {string} string
 * @returns {boolean}
 */
const checkPangram = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  /**
   * match all 26 alphabets using regex, with the help of:
   * Capturing Group
   * Character set
   * Negative lookahead
   * Dot & star
   * Numeric reference
 */
  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}

export { checkPangram }
