import { isPalindromeIntegerNumber } from '../isPalindromeIntegerNumber'

describe('isPalindromeIntegerNumber', () => {
  it('expects to return true when length of input is 1', () => {
    expect(isPalindromeIntegerNumber(6)).toEqual(true)
  })

  it('expects to return true when input is palindrome', () => {
    expect(isPalindromeIntegerNumber(121)).toEqual(true)
    expect(isPalindromeIntegerNumber(12321)).toEqual(true)
    expect(isPalindromeIntegerNumber(1221)).toEqual(true)
  })

  it('expects to return false when input is not palindrome', () => {
    expect(isPalindromeIntegerNumber(189)).toEqual(false)
  })

  it('expects to return false when input is minus', () => {
    expect(isPalindromeIntegerNumber(-121)).toEqual(false)
    expect(isPalindromeIntegerNumber(-12321)).toEqual(false)
  })

  it('expects to return false when input is not integer number', () => {
    expect(isPalindromeIntegerNumber(123.456)).toEqual(false)
  })

  it('expects to throw error when input is not a number', () => {
    expect(() => isPalindromeIntegerNumber(undefined)).toThrowError()
    expect(() => isPalindromeIntegerNumber({ key: 'val' })).toThrowError()
    expect(() => isPalindromeIntegerNumber([])).toThrowError()
  })
})
