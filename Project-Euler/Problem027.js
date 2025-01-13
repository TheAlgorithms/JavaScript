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
  /**
   * Checks if a number is prime.
   *
   * @param {number} n - The number to check for primality.
   * @returns {boolean} True if n is a prime number, false otherwise.
   */
  function isPrime(n) {
    if (n < 2) return false // 0 and 1 are not prime numbers
    if (n === 2) return true // 2 is a prime number
    if (n % 2 === 0) return false // Exclude even numbers
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      // Check odd divisors only
      if (n % i === 0) return false // Divisible by i, so not prime
    }
    return true // No divisors found, so it is prime
  }

  let maxPrimes = 0 // Store the maximum number of primes found
  let product = 0 // Store the product of coefficients a and b

  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let n = 0
      let consecutivePrimes = 0
      while (true) {
        const result = n * n + a * n + b // Evaluate the quadratic expression
        if (result < 0 || !isPrime(result)) break // Stop if the result is negative or not prime
        consecutivePrimes++
        n++
      }
      if (consecutivePrimes > maxPrimes) {
        maxPrimes = consecutivePrimes
        product = a * b // Calculate product of coefficients a and b
      }
    }
  }

  return { maxPrimes, product } // Return the results
}

// Exporting the main function for use in other modules
export { findMaxConsecutivePrimes }
