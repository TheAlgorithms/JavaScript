import { largestPalindromic } from '../Problem004.js'

describe('Largest Palindromic Number', () => {
  test('if digit is 2', () => {
    expect(largestPalindromic(2)).toBe(9009)
  })
  // Project Euler Condition Check
  test('if digit is 3', () => {
    expect(largestPalindromic(3)).toBe(906609)
  })
})
