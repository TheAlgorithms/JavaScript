/**
 * @function isPerfectNumber
 * @description A perfect number is a positive integer that is equal to the sum
 *   of its positive divisors, excluding the number itself. For example, 28 is
 *   perfect because 1 + 2 + 4 + 7 + 14 = 28.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a perfect number, false otherwise
 * @see https://en.wikipedia.org/wiki/Perfect_number
 * @example isPerfectNumber(6) => true
 * @example isPerfectNumber(28) => true
 * @example isPerfectNumber(12) => false
 */
const isPerfectNumber = (n) => {
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
  return sum === n
}

export { isPerfectNumber }
