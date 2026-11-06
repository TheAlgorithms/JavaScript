/**
 * @function isPronicNumber
 * @description A pronic number (also known as an oblong number) is a
 *   number that is the product of two consecutive integers.
 *   Examples: 0, 2, 6, 12, 20, 30, 42...
 * @param {number} n - A non-negative integer
 * @returns {boolean} - True if n is a pronic number, false otherwise
 * @see https://en.wikipedia.org/wiki/Pronic_number
 * @example isPronicNumber(6) => true
 * @example isPronicNumber(12) => true
 * @example isPronicNumber(10) => false
 */
const isPronicNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  const sqrt = Math.floor(Math.sqrt(n))
  return sqrt * (sqrt + 1) === n
}

export { isPronicNumber }
