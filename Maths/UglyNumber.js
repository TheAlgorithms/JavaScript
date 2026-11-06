/**
 * @function isUglyNumber
 * @description An ugly number is a positive integer whose prime factors
 *   are limited to 2, 3, and 5.
 *   Sequence: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12...
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is an ugly number, false otherwise
 * @see https://en.wikipedia.org/wiki/Regular_number
 * @example isUglyNumber(6) => true
 * @example isUglyNumber(8) => true
 * @example isUglyNumber(14) => false
 */
const isUglyNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  let num = n
  for (const factor of [2, 3, 5]) {
    while (num % factor === 0) {
      num = Math.floor(num / factor)
    }
  }
  return num === 1
}

export { isUglyNumber }
