import { decimalToHex } from '../DecimalToHex'

describe('DecimalToHex', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(decimalToHex(255)).toBe('FF')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
    expect(decimalToHex(32768)).toBe((32768).toString(16).toUpperCase())
  })

  it('expects to not handle negative numbers', () => {
    expect(decimalToHex(-32768)).not.toBe((-32768).toString(16).toUpperCase())
  })
})
