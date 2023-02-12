/**
 *
 * Problem Statement: Given a number n pairs of parentheses, try to Generate all combinations of valid parentheses;
 *
 * Link to problem: https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n) => {
  const res = []

  const solve = (n, chres, openParenthese, closedParenthese, res) => {
    if (openParenthese === n && closedParenthese === n) {
      res.push(chres)
      return
    }

    if (openParenthese <= n) {
      solve(n, chres + '(', openParenthese + 1, closedParenthese, res)
    }

    if (closedParenthese < openParenthese) {
      solve(n, chres + ')', openParenthese, closedParenthese + 1, res)
    }
  }

  solve(n, '', 0, 0, res)

  return res
}

export { generateParentheses }
