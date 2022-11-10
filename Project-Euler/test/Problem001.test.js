import { multiplesThreeAndFive } from '../Problem001.js'

describe('Sum of multiples of 3 or 5', () => {
  it('should throw error when number is negative number', () => {
    expect(() => multiplesThreeAndFive(-24)).toThrowError('No natural numbers exist below 1')
  })
  it('should throw error when number is 0', () => {
    expect(() => multiplesThreeAndFive(0)).toThrowError('No natural numbers exist below 1')
  })
  test('if the number is greater than 0', () => {
    expect(multiplesThreeAndFive(10)).toBe(23)
  })
  // Project Euler Condition Check
  test('if the number is 1000', () => {
    expect(multiplesThreeAndFive(1000)).toBe(233168)
  })
})
