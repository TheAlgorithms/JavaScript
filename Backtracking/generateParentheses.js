/**
 * Problem Statement: Given a number n pairs of parentheses, try to Generate all combinations of valid parentheses;
 * @param {number} n - number of given parentheses
 * @return {string[]} res - array that contains all valid parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n) => {
  const res = []

  const solve = (chres, openParenthese, closedParenthese) => {
    if (openParenthese === n && closedParenthese === n) {
      res.push(chres)
      return
    }

    if (openParenthese <= n) {
      solve(chres + '(', openParenthese + 1, closedParenthese)
    }

    if (closedParenthese < openParenthese) {
      solve(chres + ')', openParenthese, closedParenthese + 1)
    }
  }

  solve('', 0, 0)

  return res
}

export { generateParentheses }
