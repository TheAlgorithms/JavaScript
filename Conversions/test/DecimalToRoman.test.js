import { decimalToRoman } from '../DecimalToRoman'

describe('decimalToRoman', () => {
  it('expects to return correct roman numeral of given number', () => {
    expect(decimalToRoman(34)).toBe('XXXIV')
  })
  it('expects to return correct roman numeral of given number', () => {
    expect(decimalToRoman(28)).toBe('XXVIII')
  })
  it('expects to return correct roman numeral of given number', () => {
    expect(decimalToRoman(2021)).toBe('MMXXI')
  })
})
