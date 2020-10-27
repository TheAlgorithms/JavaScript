import { numberOfDigit } from '../NumberOfDigits'

describe('NumberOfDigits', () => {
  it('should return the correct number of digits for an integer', () => {
    expect(numberOfDigit(1234000)).toBe(7)
  })

  it('should return the correct number of digits for a negative number', () => {
    expect(numberOfDigit(-2346243)).toBe(7)
  })
})
