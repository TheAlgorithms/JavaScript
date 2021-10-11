import { romanToDecimal } from '../RomanToDecimal'

describe('romanToDecimal', () => {
  it('XXIIVV', () => {
    expect(romanToDecimal('XXIIVV')).toBe(28)
  })

  it('MDCCCIV', () => {
    expect(romanToDecimal('MDCCCIV')).toBe(1804)
  })

  it('XXIVI', () => {
    expect(romanToDecimal('XXIVI')).toBe(25)
  })
})
