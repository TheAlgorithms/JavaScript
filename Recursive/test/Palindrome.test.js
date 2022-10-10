import { palindrome } from '../Palindrome'

describe('Palindrome', () => {
  it('expects to return true for palindrome string', () => {
    const isPalindrome = palindrome('madam')
    expect(isPalindrome).toBe(true)
  })

  it('expects to return true for Empty String', () => {
    const isPalindrome = palindrome('')
    expect(isPalindrome).toBe(true)
  })

  it('expects to return false for non-palindrome string', () => {
    const isPalindrome = palindrome('foobar')
    expect(isPalindrome).toBe(false)
  })

  it('Throw Error for Invalid Input', () => {
    expect(() => palindrome(123)).toThrow('Invalid Input')
    expect(() => palindrome(null)).toThrow('Invalid Input')
    expect(() => palindrome(undefined)).toThrow('Invalid Input')
  })
})
