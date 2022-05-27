import { PrimeCheck } from './PrimeCheck'

/**
 * @function twinPrime
 * Gets the 'twin prime' of a prime number.
 *
 * @param {Integer} n The number to find the twin prime of.
 * @returns {Integer} Either the twin, or -1 if n or n + 2 is not prime.
 *
 * @see https://en.wikipedia.org/wiki/Twin_prime
 *
 * @example twinPrime(5) = 7
 * @example twinPrime(4) = -1
*/
function twinPrime (n) {
  const prime = PrimeCheck(n)

  if (!prime) {
    return -1
  }

  if (!PrimeCheck(n + 2)) {
    return -1
  }

  return n + 2
}

export { twinPrime }
