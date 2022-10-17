import { problem28 } from '../Problem028.js'

describe('checking number spiral diagonals', () => {
  it('should be invalid input if number is negative', () => {
    expect(() => problem28(-3)).toThrowError('Dimension must be positive')
  })
  it('should be invalid input if number is not odd', () => {
    expect(() => problem28(4)).toThrowError('Dimension must be odd')
  })
  test('if the number is equal to 5 result should be 101', () => {
    expect(problem28(5)).toBe(101)
  })
  // Project Euler Condition Check
  test('if the number is equal to 1001 result should be 669171001', () => {
    expect(problem28(1001)).toBe(669171001)
  })
})
