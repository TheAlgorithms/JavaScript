import { problem35 } from '../Problem035.js'

describe('checking circular primes', () => {
  it('should be invalid input if number is negative', () => {
    expect(() => problem35(-3)).toThrowError('Invalid input')
  })
  it('should be invalid input if number is 0', () => {
    expect(() => problem35(0)).toThrowError('Invalid input')
  })
  // Project Euler Condition Check
  test('if the number is equal to 100 result should be 13', () => {
    expect(problem35(100)).toBe(13)
  })
  // Project Euler Challenge Check
  test('if the number is equal to one million result should be 55', () => {
    expect(problem35(1000000)).toBe(55)
  })
})
