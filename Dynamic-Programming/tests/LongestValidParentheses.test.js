import { longestValidParentheses } from '../LongestValidParentheses'

describe('longestValidParentheses', () => {
  it('expects to return 0 as longest valid parentheses substring', () => {
    expect(longestValidParentheses('')).toBe(0)
  })

  it('expects to return 2 as longest valid parentheses substring', () => {
    expect(longestValidParentheses('(()')).toBe(2)
  })

  it('expects to return 2 as longest valid parentheses substring', () => {
    expect(longestValidParentheses(')()())')).toBe(4)
  })

  it('expects to return 2 as longest valid parentheses substring', () => {
    expect(longestValidParentheses('(((')).toBe(0)
  })
})
