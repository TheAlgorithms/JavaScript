import { describe, it, expect } from 'vitest'
import { basicPrefixSum } from './BasicPrefixSum.js'

describe('Basic Prefix Sum', () => {
  it('should compute prefix sum of a normal array', () => {
    const arr = [1, 2, 3, 4]
    const expected = [1, 3, 6, 10]
    expect(basicPrefixSum(arr)).toEqual(expected)
  })

  it('should return empty array for empty input', () => {
    expect(basicPrefixSum([])).toEqual([])
  })

  it('should throw TypeError for non-numeric array', () => {
    expect(() => basicPrefixSum([1, 'a', 3])).toThrow(TypeError)
  })

  it('should handle single element array', () => {
    expect(basicPrefixSum([5])).toEqual([5])
  })

  it('should handle negative numbers', () => {
    expect(basicPrefixSum([-1, -2, -3])).toEqual([-1, -3, -6])
  })
})
