import { findLongestRecurringCycle } from '../Problem026'

/**
 * Tests for the findLongestRecurringCycle function.
 */
describe('findLongestRecurringCycle', () => {
  // Test to check the basic case with a limit of 10
  test('should return 7 for limit of 10', () => {
    const result = findLongestRecurringCycle(10)
    expect(result).toBe(7)
  })

  // Test to check with a limit of 1000
  test('should return the correct value for limit of 1000', () => {
    const result = findLongestRecurringCycle(1000)
    expect(result).toBe(983) // The expected result is the denominator with the longest cycle
  })

  // Test with a smaller limit to validate behavior
  test('should return 3 for limit of 4', () => {
    const result = findLongestRecurringCycle(4)
    expect(result).toBe(3)
  })

  // Test with a limit of 2, where there is no cycle
  test('should return 0 for limit of 2', () => {
    const result = findLongestRecurringCycle(2)
    expect(result).toBe(0) // No cycle for fractions 1/1 and 1/2
  })
})
