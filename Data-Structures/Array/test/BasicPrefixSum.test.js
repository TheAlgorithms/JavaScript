import { describe, it, expect } from 'vitest'
import { basicPrefixSum } from '../BasicPrefixSum.js'

describe('basicPrefixSum', () => {
  it('computes prefix sums correctly', () => {
    expect(basicPrefixSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
  })

  it('returns an empty array for empty input', () => {
    expect(basicPrefixSum([])).toEqual([])
  })

  it('throws an error if input is not an array', () => {
    expect(() => basicPrefixSum('abc')).toThrow(TypeError)
  })

  it('throws an error if array contains non-numeric elements', () => {
    expect(() => basicPrefixSum([1, '2', 3])).toThrow(TypeError)
  })
})
