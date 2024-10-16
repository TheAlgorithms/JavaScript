import { findMaxConsecutivePrimes } from '../Problem027'

describe('Problem 027 - Quadratic Primes', () => {
  test('should return the correct product of coefficients for max consecutive primes', () => {
    const { maxPrimes, product } = findMaxConsecutivePrimes()
    expect(maxPrimes).toBe(71)
    expect(product).toBe(-59231)
  })
})
