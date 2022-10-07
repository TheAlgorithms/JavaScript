import { nthPrime } from '../Problem007.js'

describe('checking nth prime number', () => {
  it('should be invalid input if number is negative', () => {
    expect(() => nthPrime(-3)).toThrowError('Invalid Input')
  })
  it('should be invalid input if number is 0', () => {
    expect(() => nthPrime(0)).toThrowError('Invalid Input')
  })
  test('if the number is greater than 0', () => {
    expect(nthPrime(10)).toBe(29)
  })
  // Project Euler Condition Check
  test('if the number is 10001', () => {
    expect(nthPrime(10001)).toBe(104743)
  })
})
