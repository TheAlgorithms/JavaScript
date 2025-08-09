import { describe, it, expect } from 'vitest'
import basicPrefixSum from './BasicPrefixSum.js'

describe('BasicPrefixSum', () => {
  it('should compute prefix sum for normal array', () => {
    const input = [1, 2, 3, 4, 5]
    const expected = [1, 3, 6, 10, 15]
    expect(basicPrefixSum(input)).toEqual(expected)
  })

  it('should handle empty array', () => {
    expect(basicPrefixSum([])).toEqual([])
  })

  it('should handle single element array', () => {
    expect(basicPrefixSum([5])).toEqual([5])
  })

  it('should handle negative numbers', () => {
    const input = [-1, 2, -3, 4]
    const expected = [-1, 1, -2, 2]
    expect(basicPrefixSum(input)).toEqual(expected)
  })

  it('should throw TypeError for non-array input', () => {
    expect(() => basicPrefixSum('not an array')).toThrow(TypeError)
    expect(() => basicPrefixSum(123)).toThrow(TypeError)
    expect(() => basicPrefixSum(null)).toThrow(TypeError)
  })

  it('should throw TypeError for non-numeric array elements', () => {
    expect(() => basicPrefixSum([1, 'string', 3])).toThrow(TypeError)
    expect(() => basicPrefixSum([1, null, 3])).toThrow(TypeError)
    expect(() => basicPrefixSum([1, undefined, 3])).toThrow(TypeError)
  })

  it('should throw TypeError for infinite values', () => {
    expect(() => basicPrefixSum([1, Infinity, 3])).toThrow(TypeError)
    expect(() => basicPrefixSum([1, -Infinity, 3])).toThrow(TypeError)
    expect(() => basicPrefixSum([1, NaN, 3])).toThrow(TypeError)
  })
})
