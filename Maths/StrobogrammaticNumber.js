/**
 * @function isStrobogrammaticNumber
 * @description A strobogrammatic number is a number whose numeral is
 *   rotationally symmetric, so it appears the same when rotated 180 degrees.
 *   Valid strobogrammatic digit pairs: 0↔0, 1↔1, 6↔9, 8↔8, 9↔6.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a strobogrammatic number, false otherwise
 * @see https://en.wikipedia.org/wiki/Strobogrammatic_number
 * @example isStrobogrammaticNumber(69) => true
 * @example isStrobogrammaticNumber(818) => true
 * @example isStrobogrammaticNumber(123) => false
 */
const isStrobogrammaticNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  const map = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' }
  const str = String(n)
  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (map[str[left]] !== str[right]) return false
    left++
    right--
  }
  return true
}

export { isStrobogrammaticNumber }
