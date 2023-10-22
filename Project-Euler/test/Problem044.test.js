import { problem44 } from '../Problem044.js'

describe('checking nth prime number', () => {
  test('should be invalid input if number is negative', () => {
    expect(() => problem44(-3)).toThrowError('Invalid Input')
  })
  test('should be invalid input if number is 0', () => {
    expect(() => problem44(0)).toThrowError('Invalid Input')
  })
  // Project Euler Condition Check
  test('if the number is greater or equal to 1', () => {
    expect(problem44(1)).toBe(5482660)
  })
  // Project Euler Second Value for Condition Check
  test('if the number is greater or equal to 2167', () => {
    expect(problem44(2167)).toBe(8476206790)
  })
})
