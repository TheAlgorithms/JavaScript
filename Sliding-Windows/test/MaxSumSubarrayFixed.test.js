import { maxSumSubarrayFixed } from '../MaxSumSubarrayFixed'

describe('Fixed-size Sliding Window - maxSumSubarrayFixed', () => {
  it('should return the maximum sum of a subarray of size k', () => {
    const arr = [2, 1, 5, 1, 3, 2]
    const k = 3
    const result = maxSumSubarrayFixed(arr, k)
    expect(result).toBe(9)
  })

  it('should throw a RangeError if k is larger than the array length', () => {
    const arr = [2, 1, 5]
    const k = 4
    expect(() => maxSumSubarrayFixed(arr, k)).toThrow(RangeError)
  })

  it('should throw a RangeError if k is less than 1', () => {
    const arr = [2, 1, 5]
    const k = 0
    expect(() => maxSumSubarrayFixed(arr, k)).toThrow(RangeError)
  })
})
