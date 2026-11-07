/**
 * @function isTechNumber
 * @description A tech number is an even digit number where if the number
 *   is split into two halves, the square of the sum of the two halves
 *   equals the original number.
 *   For example, 2025: split into 20 and 25, (20+25)² = 45² = 2025.
 * @param {number} n - A positive integer with even number of digits
 * @returns {boolean} - True if n is a tech number, false otherwise
 * @see https://www.geeksforgeeks.org/tech-number/
 * @example isTechNumber(2025) => true
 * @example isTechNumber(3025) => true
 * @example isTechNumber(1234) => false
 */
const isTechNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const str = String(n)
  if (str.length % 2 !== 0) return false
  const half = str.length / 2
  const left = Number(str.slice(0, half))
  const right = Number(str.slice(half))
  return Math.pow(left + right, 2) === n
}

export { isTechNumber }
