/**
 * @function isSpyNumber
 * @description A spy number is a number where the sum of its digits
 *   equals the product of its digits.
 *   For example, 1124: 1+1+2+4=8 and 1x1x2x4=8.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a spy number, false otherwise
 * @see https://en.wikipedia.org/wiki/Spy_number
 * @example isSpyNumber(1124) => true
 * @example isSpyNumber(123) => true
 * @example isSpyNumber(1234) => false
 */
const isSpyNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const digits = String(n).split('').map(Number)
  const sum = digits.reduce((acc, d) => acc + d, 0)
  const product = digits.reduce((acc, d) => acc * d, 1)
  return sum === product
}

export { isSpyNumber }
