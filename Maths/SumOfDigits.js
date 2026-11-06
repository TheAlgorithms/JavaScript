/**
 * @function sumOfDigits
 * @description Calculates the sum of all digits of a given integer.
 * @param {number} n - An integer
 * @returns {number} - The sum of all digits
 * @see https://en.wikipedia.org/wiki/Digit_sum
 * @example sumOfDigits(123) => 6
 * @example sumOfDigits(9999) => 36
 * @example sumOfDigits(-123) => 6
 */
const sumOfDigits = (n) => {
  if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer')
  }
  return Math.abs(n)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0)
}

export { sumOfDigits }
