/**
 * @function isHappyNumber
 * @description A happy number is defined by the following process:
 *   Starting with any positive integer, replace the number by the sum
 *   of the squares of its digits, and repeat until the number equals 1
 *   (where it will stay), or it loops endlessly in a cycle that does
 *   not include 1.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a happy number, false otherwise
 * @see https://en.wikipedia.org/wiki/Happy_number
 * @example isHappyNumber(19) => true
 * @example isHappyNumber(7) => true
 * @example isHappyNumber(4) => false
 */
const isHappyNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const sumOfSquares = (num) =>
    String(num)
      .split('')
      .reduce((sum, d) => sum + Number(d) ** 2, 0)
  const seen = new Set()
  let current = n
  while (current !== 1) {
    if (seen.has(current)) return false
    seen.add(current)
    current = sumOfSquares(current)
  }
  return true
}

export { isHappyNumber }
