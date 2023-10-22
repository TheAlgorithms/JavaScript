import { aliquotSum } from '../Maths/AliquotSum.js'

/**
 * Problem 21 - Amicable numbers
 *
 * @see {@link https://projecteuler.net/problem=21}
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a != b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * For example, the proper divisors of 220 are 1,2,4,5,10,11,20,22,44,55 and 110; therefore d(220) = 284.
 * The proper divisors of 284 are 1,2,4,71 and 142; so d(284) = 220.
 * Evaluate the sum of all amicable numbers under 10000
 *
 * @author PraneethJain
 */

function problem21(n) {
  if (n < 2) {
    throw new Error('Invalid Input')
  }

  let result = 0
  for (let a = 2; a < n; ++a) {
    const b = aliquotSum(a) // Sum of all proper divisors of a
    // Check if b > a to ensure each pair isn't counted twice, and check if sum of proper divisors of b is equal to a
    if (b > a && aliquotSum(b) === a) {
      result += a + b
    }
  }
  return result
}

export { problem21 }
