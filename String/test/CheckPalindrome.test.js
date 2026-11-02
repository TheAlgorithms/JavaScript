import { checkPalindrome } from '../CheckPalindrome.js'

describe('checkPalindrome', () => {
  test('racecar is a palindrome', () => {
    expect(checkPalindrome('racecar')).toBe(true)
  })

  test('hello is NOT a palindrome', () => {
    expect(checkPalindrome('hello')).toBe(false)
  })

  test('A man a plan a canal Panama is a palindrome', () => {
    expect(checkPalindrome('A man a plan a canal Panama')).toBe(true)
  })

  test('empty string is a palindrome', () => {
    expect(checkPalindrome('')).toBe(true)
  })

  test('single character is a palindrome', () => {
    expect(checkPalindrome('a')).toBe(true)
  })

  test('madam is a palindrome', () => {
    expect(checkPalindrome('madam')).toBe(true)
  })

  test('12321 is a palindrome', () => {
    expect(checkPalindrome('12321')).toBe(true)
  })

  test('12345 is NOT a palindrome', () => {
    expect(checkPalindrome('12345')).toBe(false)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => checkPalindrome(123)).toThrow(TypeError)
  })
})
