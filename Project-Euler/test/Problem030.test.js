import { sumOfFifthPowers } from '../Problem030' // Adjust the path if necessary

describe('sumOfFifthPowers', () => {
  it('should return the sum of all numbers that can be written as the sum of fifth powers of their digits', () => {
    const result = sumOfFifthPowers()
    expect(result).toBe(443839) // Expected result based on the problem statement
  })
})
