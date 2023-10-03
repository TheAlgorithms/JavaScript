import { validateCreditCard } from '../ValidateCreditCard'

describe('Validate credit card number', () => {
  it('should throw error if card number is boolean', () => {
    const invalidCC = true
    expect(() => validateCreditCard(invalidCC)).toThrow(
      'The given value is not a string'
    )
  })
  it('returns true if the credit card number is valid', () => {
    const validCreditCard = '4111111111111111'
    const validationResult = validateCreditCard(validCreditCard)
    expect(validationResult).toBe(true)
  })
  it('should throw an error on non-numeric character in given credit card number', () => {
    const nonNumericCCNumbers = ['123ABCDEF', 'ABCDKDKD', 'ADS232']
    nonNumericCCNumbers.forEach((nonNumericCC) =>
      expect(() => validateCreditCard(nonNumericCC)).toThrow(
        `${nonNumericCC} is an invalid credit card number because ` +
          'it has nonnumerical characters.'
      )
    )
  })
  it('should throw an error on credit card with invalid length', () => {
    const ccWithInvalidLength = ['41111', '4111111111111111111111']
    ccWithInvalidLength.forEach((invalidCC) =>
      expect(() => validateCreditCard(invalidCC)).toThrow(
        `${invalidCC} is an invalid credit card number because ` +
          'of its length.'
      )
    )
  })
  it('should throw an error on credit card with invalid start substring', () => {
    const ccWithInvalidStartSubstring = [
      '12345678912345',
      '23456789123456',
      '789123456789123',
      '891234567891234',
      '912345678912345',
      '31345678912345',
      '32345678912345',
      '33345678912345',
      '38345678912345'
    ]
    ccWithInvalidStartSubstring.forEach((invalidCC) =>
      expect(() => validateCreditCard(invalidCC)).toThrow(
        `${invalidCC} is an invalid credit card number because ` +
          'of its first two digits.'
      )
    )
  })
  it('should throw an error on credit card with luhn check fail', () => {
    const invalidCCs = ['411111111111111', '371211111111111', '49999999999999']
    invalidCCs.forEach((invalidCC) =>
      expect(() => validateCreditCard(invalidCC)).toThrow(
        `${invalidCC} is an invalid credit card number because ` +
          'it fails the Luhn check.'
      )
    )
  })
})
