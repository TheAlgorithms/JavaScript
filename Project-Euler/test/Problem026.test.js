import { findLongestRecurringCycle } from '../Problem026'

/**
 * Tests for the findLongestRecurringCycle function.
 */
describe('findLongestRecurringCycle', () => {
  it.each([
    { limit: 10, expected: 7 },
    { limit: 1000, expected: 983 }, // The denominator with the longest cycle for limit of 1000
    { limit: 4, expected: 3 },
    { limit: 2, expected: 0 } // No cycle for fractions 1/1 and 1/2
  ])('should return $expected for limit of $limit', ({ limit, expected }) => {
    const result = findLongestRecurringCycle(limit)
    expect(result).toBe(expected)
  })
})
