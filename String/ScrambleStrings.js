// Problem Statement and Explanation: https://leetcode.com/problems/scramble-string/

/**
 * Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const isScramble = (s1, s2) => {
  return helper({}, s1, s2)
}

const helper = function (dp, s1, s2) {
  const map = {}

  if (dp[s1 + s2] !== undefined) return dp[s1 + s2]
  if (s1 === s2) return true

  for (let j = 0; j < s1.length; j++) {
    if (map[s1[j]] === undefined) map[s1[j]] = 0
    if (map[s2[j]] === undefined) map[s2[j]] = 0
    map[s1[j]]++
    map[s2[j]]--
  }

  for (const key in map) {
    if (map[key] !== 0) {
      dp[s1 + s2] = false
      return false
    }
  }

  for (let i = 1; i < s1.length; i++) {
    if (
      (helper(dp, s1.substr(0, i), s2.substr(0, i)) &&
        helper(dp, s1.substr(i), s2.substr(i))) ||
      (helper(dp, s1.substr(0, i), s2.substr(s2.length - i)) &&
        helper(dp, s1.substr(i), s2.substr(0, s2.length - i)))
    ) {
      dp[s1 + s2] = true
      return true
    }
  }

  dp[s1 + s2] = false
  return false
}

export { isScramble }
