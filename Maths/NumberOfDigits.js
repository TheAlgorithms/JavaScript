/**
 * @function numberOfDigits
 * @description Counts the number of digits in a given integer.
 * @param {number} n - An integer
 * @returns {number} - The number of digits in n
 * @see https://en.wikipedia.org/wiki/Numerical_digit
 * @example numberOfDigits(123) => 3
 * @example numberOfDigits(0) => 1
 * @example numberOfDigits(-9999) => 4
 */
const numberOfDigits = (n) => {
  if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer')
  }
  return Math.abs(n).toString().length
}

export { numberOfDigits }
