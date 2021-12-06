/*
Problem:
Given two sequences, find the length of longest subsequence present in both of them.
A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”

Our Solution:
We use recursion with tabular memoization.
Time complexity: O(M x N)
Solving each subproblem has a cost of O(1). Again, there are MxN subproblems,
and so we get a total time complexity of O(MxN).
Space complexity: O(M x N)
We need to store the answer for each of the MxN subproblems.

Improvement:
It's possible to optimize space complexity to O(min(M, N)) or time to O((N + r)log(N))
where r is the number of matches between the two sequences. Try to figure out how.

References:
[wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
[leetcode](https://leetcode.com/problems/longest-common-subsequence/)
*/

/**
 * Finds the length of the longest common subsequence
 * @param {string} str1 Input string #1
 * @param {string} str2 Input string #2
 * @returns {number} Length of the longest common subsequence
 */
function longestCommonSubsequence (str1, str2) {
  const dp = new Array(str1.length + 1).fill(0)
    .map(() => new Array(str2.length + 1).fill(0))

  function recursive (x, y) {
    if (x === -1 || y === -1) {
      return 0
    }

    if (dp[x][y] !== 0) {
      return dp[x][y]
    }

    if (str1[x] === str2[y]) {
      dp[x][y] = 1 + recursive(x - 1, y - 1)
      return dp[x][y]
    } else {
      dp[x][y] = Math.max(recursive(x - 1, y), recursive(x, y - 1))
      return dp[x][y]
    }
  }

  return recursive(str1.length - 1, str2.length - 1)
}

export { longestCommonSubsequence }
