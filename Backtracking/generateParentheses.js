/*
 * Problem Statement: Given a number n pairs of parenthses, try to Generate all combinations of valid parentheses
 *
 * link to problem: https://leetcode.com/problems/generate-parentheses/
 *
 */

const generateParentheses = (n, chres, openParenthese, closedParenthese, res) => {
  if (openParenthese === n && closedParenthese === n) {
    res.push(chres)
    return
  }

  if (openParenthese <= n) {
    generateParentheses(n, chres + '(', openParenthese + 1, closedParenthese, res)
  }

  if (closedParenthese < openParenthese) {
    generateParentheses(n, chres + ')', openParenthese, closedParenthese + 1, res)
  }
}

const res = []
generateParentheses(3, [], 0, 0, res)

export { generateParentheses }
