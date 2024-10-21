import { countDistinctPowers } from '../Problem029'

/**
 * Tests for the countDistinctPowers function.
 */
describe('countDistinctPowers', () => {
  it.each([
    { minA: 2, maxA: 5, minB: 2, maxB: 5, expected: 15 },
    { minA: 2, maxA: 100, minB: 2, maxB: 100, expected: 9183 },
    { minA: 2, maxA: 2, minB: 2, maxB: 2, expected: 1 },
    { minA: 3, maxA: 3, minB: 2, maxB: 5, expected: 4 },
    { minA: 10, maxA: 10, minB: 2, maxB: 5, expected: 4 }
  ])(
    'should return $expected for ranges $minA to $maxA and $minB to $maxB',
    ({ minA, maxA, minB, maxB, expected }) => {
      const result = countDistinctPowers(minA, maxA, minB, maxB)
      expect(result).toBe(expected)
    }
  )
})
