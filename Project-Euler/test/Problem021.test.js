import { problem21 } from '../Problem021.js'

describe('check sum of amicable numbers under n', () => {
  test('should be invalid input if number is negative', () => {
    expect(() => problem21(-1)).toThrowError('Invalid Input')
  })
  test('should be invalid input if number is 0', () => {
    expect(() => problem21(0)).toThrowError('Invalid Input')
  })
  // Project Euler Condition Check
  test('if the number is greater or equal to 1', () => {
    expect(problem21(10000)).toBe(31626)
  })
})
