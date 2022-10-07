import { PrimeCheck } from '../Maths/PrimeCheck.js'

/**
 * Find nth Prime Number
 *
 * P.S.(Project Euler - 007):
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10001st prime number?
 *
 * @param {Number} n
 * @returns {Number} returns the nth prime number
 */
export const nthPrime = (n) => {
  if (n < 1) {
    throw new Error('Invalid Input')
  }

  let count = 0
  let candidateValue = 1
  while (count < n) {
    candidateValue++
    if (PrimeCheck(candidateValue)) {
      count++
    }
  }
  return candidateValue
}
