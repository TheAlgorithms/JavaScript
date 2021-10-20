import { alphaNumericPlaindrome } from '../AlphaNumericPalindrome'

test('should return true if the given string has alphanumeric characters that are palindrom irrespective of case and symbols', () => {
  expect(alphaNumericPlaindrome('eye')).toBe(true)
})

test('should return true if the given string has alphanumeric characters that are palindrom irrespective of case and symbols', () => {
  expect(alphaNumericPlaindrome('0_0 (: /-:) 0-0')).toBe(true)
})

test('should return true if the given string has alphanumeric characters that are palindrom irrespective of case and symbols', () => {
  expect(alphaNumericPlaindrome('five|_/|four')).toBe(false)
})

test('should return true if the given string has alphanumeric characters that are palindrom irrespective of case and symbols', () => {
  expect(alphaNumericPlaindrome('A man, a plan, a canal. Panama')).toBe(true)
})

test('should return true if the given string has alphanumeric characters that are palindrom irrespective of case and symbols', () => {
  expect(alphaNumericPlaindrome('1 eye for of 1 eye.')).toBe(false)
})
