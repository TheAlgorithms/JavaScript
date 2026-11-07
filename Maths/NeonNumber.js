/**
 * @function isNeonNumber
 * @description A neon number is a number where the sum of digits of
 *   its square equals the number itself.
 *   For example, 9: 9² = 81, 8+1 = 9.
 * @param {number} n - A non-negative integer
 * @returns {boolean} - True if n is a neon number, false otherwise
 * @see https://en.wikipedia.org/wiki/Neon_number
 * @example isNeonNumber(9) => true
 * @example isNeonNumber(1) => true
 * @example isNeonNumber(0) => true
 * @example isNeonNumber(2) => false
 */
const isNeonNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  const square = n * n
  const digitSum = String(square)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0)
  return digitSum === n
}

export { isNeonNumber }
