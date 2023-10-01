/**
 * @function alphaNumericPalindrome
 * @description alphaNumericPalindrome should return true if the string has alphanumeric characters that are palindrome irrespective of special characters and the letter case.
 * @param {string} str the string to check
 * @returns {boolean}
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 * @example
 * The function alphaNumericPalindrome() receives a string with varying formats
 * like "racecar", "RaceCar", and "race CAR"
 * The string can also have special characters
 * like "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"
 *
 * But the catch is, we have to check only if the alphanumeric characters
 * are palindrome i.e remove spaces, symbols, punctuations etc
 * and the case of the characters doesn't matter
 */
const alphaNumericPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  // removing all the special characters and turning everything to lowercase
  const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase()
  const midIndex = newStr.length >> 1 // x >> y = floor(x / 2^y)

  for (let i = 0; i < midIndex; i++) {
    if (newStr.at(i) !== newStr.at(~i)) {
      // ~n = -(n + 1)
      return false
    }
  }

  return true
}

export default alphaNumericPalindrome
