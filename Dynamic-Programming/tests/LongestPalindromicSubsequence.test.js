import { longestPalindromeSubsequence } from '../LongestPalindromicSubsequence'

describe('LongestPalindromicSubsequence', () => {
  it('expects to return 1 as longest palindromic subsequence', () => {
    expect(longestPalindromeSubsequence('abcdefgh')).toBe(1)
  })

  it('expects to return 4 as longest palindromic subsequence', () => {
    expect(longestPalindromeSubsequence('bbbab')).toBe(4)
  })

  it('expects to return 2 as longest palindromic subsequence', () => {
    expect(longestPalindromeSubsequence('cbbd')).toBe(2)
  })

  it('expects to return 7 as longest palindromic subsequence', () => {
    expect(longestPalindromeSubsequence('racexyzcxar')).toBe(7)
  })
})
