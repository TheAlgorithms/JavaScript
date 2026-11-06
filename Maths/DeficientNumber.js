/**
 * @function isDeficientNumber
 * @description A deficient number is a positive integer for which the
 *   sum of its proper divisors is less than the number itself.
 *   For example, 9 is deficient because 1+3=4 < 9.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a deficient number, false otherwise
 * @see https://en.wikipedia.org/wiki/Deficient_number
 * @example isDeficientNumber(9) => true
 * @example isDeficientNumber(10) => false
 * @example isDeficientNumber(1) => true
 */
const isDeficientNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  if (n === 1) return false
  let sum = 1
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i
      if (i !== n / i) sum += n / i
    }
  }
  return sum < n
}

export { isDeficientNumber }
