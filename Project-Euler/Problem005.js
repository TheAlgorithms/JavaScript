import { PrimeFactors } from '../Maths/PrimeFactors.js'

/**
 * Smallest Multiple
 * @link https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * Method: unique factorization
 * @link https://en.wikipedia.org/wiki/Least_common_multiple#Using_prime_factorization
 * The method used below calculates the Least Common Multiple (LCM) by multiplying the largest powers of the prime factors of the divisors. For example, 8 is the LCM of 2, 4, and 8. The prime factors of these numbers are 2^1, 2^2, and 2^3. We can discard 2^1 and 2^2 since 2^3 is the largest power of 2, leaving us with a result of 2^3 (8).
 */

export function findSmallestMultiple(maxDivisor) {
  const maxPowers = {}
  for (let divisor = 2; divisor <= maxDivisor; divisor++) {
    const factors = PrimeFactors(divisor)

    // combine/count prime factors
    let powers = {}
    for (const factor of factors) {
      powers[factor] = (powers[factor] ?? 0) + 1
    }

    // save largest factors
    for (const factor in powers) {
      if (powers[factor] > (maxPowers[factor] ?? 0)) {
        maxPowers[factor] = powers[factor]
      }
    }
  }

  // multiply all primes
  return Object.entries(maxPowers).reduce(
    (product, [prime, power]) => product * Math.pow(prime, power),
    1
  )
}
