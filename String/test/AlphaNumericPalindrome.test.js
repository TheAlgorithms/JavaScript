import alphaNumericPalindrome from '../AlphaNumericPalindrome'

describe('Testing the alpha numeric palindrome', () => {
  // should return true if the given string has alphanumeric characters that are palindrome irrespective of case and symbols
  it('Testing with valid alphabetic palindrome', () => {
    expect(alphaNumericPalindrome('eye')).toBe(true)
    expect(alphaNumericPalindrome('Madam')).toBe(true)
    expect(alphaNumericPalindrome('race CAR')).toBe(true)
    expect(alphaNumericPalindrome('A man, a plan, a canal. Panama')).toBe(true)
  })

  it('Testing with number and symbol', () => {
    expect(alphaNumericPalindrome('0_0 (: /-:) 0-0')).toBe(true)
    expect(alphaNumericPalindrome('03_|53411435|_30')).toBe(true)
  })

  it('Testing with alphabets and symbols', () => {
    expect(alphaNumericPalindrome('five|_/|evif')).toBe(true)
    expect(alphaNumericPalindrome('five|_/|four')).toBe(false)
  })
})
