import { sumOfNonAbundantNumbers } from '../Problem023'

describe('Check Problem 23 - Non-Abundant Sums', () => {
  it('Sum of all positive integers <= 10000 which cannot be written as the sum of two abundant numbers', () => {
    expect(sumOfNonAbundantNumbers(10000)).toBe(3731004)
  })

  it('Sum of all positive integers <= n which cannot be written as the sum of two abundant numbers', () => {
    expect(sumOfNonAbundantNumbers(15000)).toBe(4039939)
  })

  it('Sum of all positive integers <= n which cannot be written as the sum of two abundant numbers', () => {
    expect(sumOfNonAbundantNumbers(20000)).toBe(4159710)
  })

  it('Sum of all positive integers <= n which cannot be written as the sum of two abundant numbers', () => {
    expect(sumOfNonAbundantNumbers(28123)).toBe(4179871)
  })

  it('Sum of all positive integers <= n which cannot be written as the sum of two abundant numbers', () => {
    expect(sumOfNonAbundantNumbers(30000)).toBe(4179871)
  })
})
