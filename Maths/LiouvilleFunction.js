/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Liouville Function: https://en.wikipedia.org/wiki/Liouville_function
 * For any positive integer n, define λ(n) as the sum of the primitive nth roots of unity.
 * It has values in {−1, 1} depending on the factorization of n into prime factors:
 *   λ(n) = +1 if n positive integer with an even number of prime factors.
 *   λ(n) = −1 if n positive integer with an odd number of prime factors.
 */

/**
 * @function liouvilleFunction
 * @description -> This method returns λ(n) of given number n
 * returns 1 when number has even number of prime factors
 * returns -1 when number has odd number of prime factors
 * @param {Integer} number
 * @returns {Integer} 1|-1
 */

import { PrimeFactors } from './PrimeFactors.js'
export const liouvilleFunction = (number) => {
  if (number <= 0) {
    throw new Error('Number must be greater than zero.')
  }
  return PrimeFactors(number).length % 2 === 0 ? 1 : -1
}
