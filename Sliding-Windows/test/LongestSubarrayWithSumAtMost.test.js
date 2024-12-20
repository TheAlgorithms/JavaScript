import { longestSubarrayWithSumAtMost } from '../LongestSubarrayWithSumAtMost'

describe('Dynamic-size Sliding Window - longestSubarrayWithSumAtMost', () => {
  it('should return the longest subarray length with sum <= target', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 7
    const result = longestSubarrayWithSumAtMost(arr, target)
    expect(result).toBe(3)
  })

  it('should return the full array length if the entire sum is within the target', () => {
    const arr = [1, 1, 1, 1]
    const target = 4
    const result = longestSubarrayWithSumAtMost(arr, target)
    expect(result).toBe(4)
  })

  it('should return 0 if no subarray meets the sum condition', () => {
    const arr = [5, 6, 7]
    const target = 3
    const result = longestSubarrayWithSumAtMost(arr, target)
    expect(result).toBe(0)
  })
})
