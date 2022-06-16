import { isPalindromeIterative } from '../IsPalindrome'

describe('isPalindrome', () => {
  it('expects to return true with empty string', () => {
    expect(isPalindromeIterative('')).toEqual(true)
  })

  it('expects to return true when length of input is 1', () => {
    const numberInput = 6
    const stringInput = 'a'
    expect(isPalindromeIterative(numberInput)).toEqual(true)
    expect(isPalindromeIterative(stringInput)).toEqual(true)
  })

  it('expects to return true when input is palindrome', () => {
    expect(isPalindromeIterative(121)).toEqual(true)
    expect(isPalindromeIterative('yooy')).toEqual(true)
    expect(isPalindromeIterative('19noon91')).toEqual(true)
    expect(isPalindromeIterative('!*tyyt*!')).toEqual(true)
  })

  it('expects to return false when input is not palindrome', () => {
    expect(isPalindromeIterative('hello')).toEqual(false)
    expect(isPalindromeIterative(189)).toEqual(false)
    expect(isPalindromeIterative('!*98[!')).toEqual(false)
  })

  it('expects to throw error when input is not a string or a number', () => {
    expect(() => isPalindromeIterative(undefined)).toThrowError()
    expect(() => isPalindromeIterative({ key: 'val' })).toThrowError()
    expect(() => isPalindromeIterative([])).toThrowError()
  })
})
