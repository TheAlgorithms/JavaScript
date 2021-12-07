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
 * Finds length of the longest common subsequence among the two input string
 * @param {string} str1 Input string #1
 * @param {string} str2 Input string #2
 * @returns {number} Length of the longest common subsequence
 */
function longestCommonSubsequence (str1, str2) {
  const memo = new Array(str1.length + 1).fill(null)
    .map(() => new Array(str2.length + 1).fill(null))

  function recursive (end1, end2) {
    if (end1 === -1 || end2 === -1) {
      return 0
    }

    if (memo[end1][end2] !== null) {
      return memo[end1][end2]
    }

    if (str1[end1] === str2[end2]) {
      memo[end1][end2] = 1 + recursive(end1 - 1, end2 - 1)
      return memo[end1][end2]
    } else {
      memo[end1][end2] = Math.max(
        recursive(end1 - 1, end2),
        recursive(end1, end2 - 1)
      )
      return memo[end1][end2]
    }
  }

  return recursive(str1.length - 1, str2.length - 1)
}

export { longestCommonSubsequence }
