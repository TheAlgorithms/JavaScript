/*
  LeetCode -> https://leetcode.com/problems/longest-palindromic-subsequence/

  Given a string s, find the longest palindromic subsequence's length in s.
  You may assume that the maximum length of s is 1000.

*/

export const longestPalindromeSubsequence = function (s) {
  const n = s.length

  const dp = new Array(n)
    .fill(0)
    .map((item) => new Array(n).fill(0).map((item) => 0))

  // fill predefined for single character
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      const col = j + i
      if (s[j] === s[col]) {
        dp[j][col] = 2 + dp[j + 1][col - 1]
      } else {
        dp[j][col] = Math.max(dp[j][col - 1], dp[j + 1][col])
      }
    }
  }

  return dp[0][n - 1]
}
