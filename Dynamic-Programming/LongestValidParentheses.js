/*
  LeetCode -> https://leetcode.com/problems/longest-valid-parentheses/

  Given a string containing just the characters '(' and ')',
  find the length of the longest valid (well-formed) parentheses substring.
*/

export const longestValidParentheses = (s) => {
  const n = s.length
  const stack = []

  // storing results
  const res = new Array(n).fill(-Infinity)

  for (let i = 0; i < n; i++) {
    const bracket = s[i]

    if (bracket === ')' && s[stack[stack.length - 1]] === '(') {
      res[i] = 1
      res[stack[stack.length - 1]] = 1
      stack.pop()
    } else {
      stack.push(i)
    }
  }

  // summing all adjacent valid
  for (let i = 1; i < n; i++) {
    res[i] = Math.max(res[i], res[i] + res[i - 1])
  }

  // adding 0 if there are none so it will return 0 instead of -Infinity
  res.push(0)
  return Math.max(...res)
}
