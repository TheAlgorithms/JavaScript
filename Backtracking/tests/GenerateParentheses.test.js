import { generateParentheses } from '../generateParentheses'

test('generate all valid parentheses of input 3', () => {
  expect(generateParentheses(3)).toStrictEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})
