/**
 * @function isAutomorphicNumber
 * @description An automorphic number is a number whose square ends
 *   in the same digits as the number itself.
 *   For example, 5² = 25, 6² = 36, 76² = 5776.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is an automorphic number, false otherwise
 * @see https://en.wikipedia.org/wiki/Automorphic_number
 * @example isAutomorphicNumber(5) => true
 * @example isAutomorphicNumber(6) => true
 * @example isAutomorphicNumber(76) => true
 * @example isAutomorphicNumber(7) => false
 */
const isAutomorphicNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const square = n * n
  const digits = String(n).length
  const lastDigits = square % Math.pow(10, digits)
  return lastDigits === n
}

export { isAutomorphicNumber }
