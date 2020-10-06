import { PalindromeRecursive, PalindromeIterative } from '../Palindrome'

describe('Palindrome', () => {
  it('should return true for a palindrome for PalindromeRecursive', () => {
    expect(PalindromeRecursive('mom')).toBeTruthy()
  })
  it('should return true  for a palindrome for PalindromeIterative', () => {
    expect(PalindromeIterative('mom')).toBeTruthy()
  })
  it('should return false for a non-palindrome for PalindromeRecursive', () => {
    expect(PalindromeRecursive('Algorithms')).toBeFalsy()
  })
  it('should return true  for a non-palindrome for PalindromeIterative', () => {
    expect(PalindromeIterative('JavaScript')).toBeFalsy()
  })
})
