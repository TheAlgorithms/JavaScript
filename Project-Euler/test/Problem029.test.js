import { distinctPowers } from '../Problem029'

describe('Distinct numbers of a ^ b where a and b in range [2,100]', () => {
  it('should throw error when number is less than 2', () => {
    expect(() => distinctPowers(0)).toThrowError('Power out of scope')
  })
  it('should throw error when number is negative', () => {
    expect(() => distinctPowers(-3)).toThrowError('Power out of scope')
  })
  test('if the number is greater than or equal to 2', () => {
    expect(distinctPowers(5)).toBe(15)
  })
  // Project Euler Condition Check
  test('if the number is greater than or equal to 2', () => {
    expect(distinctPowers(100)).toBe(9183)
  })
})
