import { longestIncreasingSubsequence } from '../LongestIncreasingSubsequence'

describe('Testing longestIncreasingSubsequence', () => {
  it.each([
    [[], 0],
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 2, 2, 2], 2],
    [[1, 0, 2], 2],
    [[1, 10, 2, 30], 3],
    [[5, 8, 3, 7, 9, 1], 3],
    [[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 6]
  ])('check with %j', (input, expected) => {
    expect(longestIncreasingSubsequence(input)).toBe(expected)
  })
})
