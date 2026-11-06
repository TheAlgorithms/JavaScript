import { isPalindromeNumber } from '../PalindromeNumber.js'

describe('isPalindromeNumber', () => {
  test('121 is a palindrome number', () => {
    expect(isPalindromeNumber(121)).toBe(true)
  })

  test('1221 is a palindrome number', () => {
    expect(isPalindromeNumber(1221)).toBe(true)
  })

  test('12321 is a palindrome number', () => {
    expect(isPalindromeNumber(12321)).toBe(true)
  })

  test('0 is a palindrome number', () => {
    expect(isPalindromeNumber(0)).toBe(true)
  })

  test('1 is a palindrome number', () => {
    expect(isPalindromeNumber(1)).toBe(true)
  })

  test('123 is NOT a palindrome number', () => {
    expect(isPalindromeNumber(123)).toBe(false)
  })

  test('10 is NOT a palindrome number', () => {
    expect(isPalindromeNumber(10)).toBe(false)
  })

  test('negative numbers are NOT palindromes', () => {
    expect(isPalindromeNumber(-121)).toBe(false)
  })

  test('throws TypeError for float input', () => {
    expect(() => isPalindromeNumber(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => isPalindromeNumber('121')).toThrow(TypeError)
  })
})
