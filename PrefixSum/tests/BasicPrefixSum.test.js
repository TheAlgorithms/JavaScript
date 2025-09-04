import { prefixSum } from '../BasicPrefixSum.js'
import { describe, it, expect } from 'vitest'

describe('prefixSum', () => {
  it(`Should return computed prefix sum array for a passed input array`, () => {
    expect(prefixSum([3, 6, 9, 15])).toEqual([3, 9, 18, 33])
    expect(prefixSum([0, 5, -2, 4])).toEqual([0, 5, 3, 7])
  })

  it(`Should return empty array when passed input array is empty`, () => {
    expect(prefixSum([])).toEqual([])
  })

  it(`should throw TypeError if input is not an array of numbers`, () => {
    expect(() => prefixSum('array')).toThrow(TypeError)
    expect(() => prefixSum(1)).toThrow(TypeError)
    expect(() => prefixSum([1, '2'])).toThrow(TypeError)
    expect(() => prefixSum([1, true])).toThrow(TypeError)
    expect(() => prefixSum([{}, 2])).toThrow(TypeError)
  })
})
