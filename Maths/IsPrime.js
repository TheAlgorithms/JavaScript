/**
 * @function isPrime
 * @description A prime number is a natural number greater than 1 that has
 *   no positive divisors other than 1 and itself. This function checks
 *   whether a given number is prime.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is prime, false otherwise
 * @see https://en.wikipedia.org/wiki/Prime_number
 * @example isPrime(2) => true
 * @example isPrime(11) => true
 * @example isPrime(4) => false
 */
const isPrime = (n) => {
  if (!Number.isInteger(n) || n < 2) {
    throw new TypeError('Input must be an integer greater than or equal to 2')
  }
  if (n === 2) return true
  if (n % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export { isPrime }
