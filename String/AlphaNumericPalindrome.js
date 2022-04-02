/*****************************************************************************
 * @function alphaNumericPlaindrome
 * @description alphaNumericPlaindrome should return true if the string has alphanumeric characters that are palindrome irrespective of special characters and the letter case.
 * @param {string} str the string to check
 * @returns {Boolean}
 * @see [Factorial](https://en.wikipedia.org/wiki/Palindrome)
 * @example
 * The function alphaNumericPlaindrome() receives a string with varying formats
 * like "racecar", "RaceCar", and "race CAR"
 * The string can also have special characters
 * like "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"
 *
 * But the catch is, we have to check only if the alphanumeric characters
 * are palindrome i.e remove spaces, symbols, punctuations etc
 * and the case of the characters doesn't matter
 *
 ****************************************************************************/

const alphaNumericPlaindrome = (str) => {
  // removing all the special characters and turning everything to lowercase
  const newStr = str.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase()

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false
    }
  }

  return true
}

export { alphaNumericPlaindrome }
