/**
 * @function isAbundantNumber
 * @description An abundant number is a positive integer for which the
 *   sum of its proper divisors is greater than the number itself.
 *   For example, 12 is abundant because 1+2+3+4+6=16 > 12.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is an abundant number, false otherwise
 * @see https://en.wikipedia.org/wiki/Abundant_number
 * @example isAbundantNumber(12) => true
 * @example isAbundantNumber(18) => true
 * @example isAbundantNumber(9) => false
 */
const isAbundantNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  let sum = 1
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i
      if (i !== n / i) sum += n / i
    }
  }
  return sum > n
}

export { isAbundantNumber }
