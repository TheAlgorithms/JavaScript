import { checkPalindrome } from '../CheckPalindrome'

describe('checkPalindrome', () => {
  it('expects to return "Palindrome" if the given string is a palindrome', () => {
    const SUT = checkPalindrome('madam')
    expect(SUT).toBe('Palindrome')
  })
  it('expects to return "Empty string" if the given string is empty', () => {
    const SUT = checkPalindrome('')
    expect(SUT).toBe('Empty string')
  })
  it('expects to return "Not a string" if the given string is not a string', () => {
    const SUT = checkPalindrome(123)
    expect(SUT).toBe('Not a string')
  })
})
