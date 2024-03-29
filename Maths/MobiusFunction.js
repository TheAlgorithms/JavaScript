/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Mobius Function: https://en.wikipedia.org/wiki/M%C3%B6bius_function
 * For any positive integer n, define μ(n) as the sum of the primitive nth roots of unity.
 * It has values in {−1, 0, 1} depending on the factorization of n into prime factors:
 *   μ(n) = +1 if n is a square-free positive integer with an even number of prime factors.
 *   μ(n) = −1 if n is a square-free positive integer with an odd number of prime factors.
 *   μ(n) = 0 if n has a squared prime factor.
 */

/**
 * @function mobiusFunction
 * @description -> This method returns μ(n) of given number n
 * returns 1 when number is less than or equals 1
 * or number has even number of prime factors
 * returns 0 when number has repeated prime factor
 * returns -1 when number has odd number of prime factors
 * @param {Integer} number
 * @returns {Integer}
 */

import { PrimeFactors } from './PrimeFactors.js'
export const mobiusFunction = (number) => {
  const primeFactorsArray = PrimeFactors(number)
  if (number <= 0) {
    throw new Error('Number must be greater than zero.')
  }
  return primeFactorsArray.length !== new Set(primeFactorsArray).size
    ? 0
    : primeFactorsArray.length % 2 === 0
    ? 1
    : -1
}
