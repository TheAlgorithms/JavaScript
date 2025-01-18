/**
 * Problem - Quadratic Primes
 *
 * @see {@link https://projecteuler.net/problem=27}
 *
 * The quadratic expression n^2 + an + b, where |a| < 1000 and |b| ≤ 1000,
 * produces a positive prime for consecutive values of n, starting with n = 0.
 * Find the product of the coefficients, a and b, for the quadratic expression that
 * produces the maximum number of primes for consecutive values of n.
 */

/**
 * Main function to find the coefficients a and b that produce the maximum number
 * of consecutive primes for the quadratic expression n^2 + an + b.
 *
 * @returns {{maxPrimes: number, product: number}} An object containing the maximum number of primes
 * and the product of coefficients a and b.
 */
function findMaxConsecutivePrimes() {
  function isPrime(n) {
    if (n < 2) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }
    return true
  }

  let maxPrimes = 0
  let product = 0

  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let n = 0
      while (true) {
        const result = n * n + a * n + b
        if (result < 0 || !isPrime(result)) break
        n++
      }
      if (n > maxPrimes) {
        maxPrimes = n
        product = a * b
      }
    }
  }

  return { maxPrimes, product }
}

export { findMaxConsecutivePrimes }
