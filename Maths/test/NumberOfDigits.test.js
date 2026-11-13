import { numberOfDigit, numberOfDigitsUsingLog } from '../NumberOfDigits'

describe('NumberOfDigits', () => {
  it('should return the correct number of digits for an integer', () => {
    expect(numberOfDigit(1234000)).toBe(7)
  })

  it('should return the correct number of digits for a negative number', () => {
    expect(numberOfDigit(-2346243)).toBe(7)
  })

  it.each([
    [0, 1],
    [123423232, 9],
    [-123423232, 9],
    [9999, 4],
    [999999999999999, 15],
    [1000000000000000, 16],
    [1000000000000001, 16]
  ])(
    'should return the correct number of digits in an integer',
    (value, expected) => {
      expect(numberOfDigitsUsingLog(value)).toBe(expected)
      expect(numberOfDigit(value)).toBe(expected)
    }
  )

  it('should throw TypeError for invalid inputs', () => {
    expect(() => numberOfDigit('123')).toThrow(TypeError)
    expect(() => numberOfDigit(NaN)).toThrow(TypeError)
    expect(() => numberOfDigitsUsingLog('123')).toThrow(TypeError)
    expect(() => numberOfDigitsUsingLog(NaN)).toThrow(TypeError)
  })
})
