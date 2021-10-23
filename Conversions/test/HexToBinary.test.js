import hexToBinary from '../HexToBinary'

describe('hexToBinary', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(hexToBinary('8')).toBe('1000')
  })

  it('expects to return correct binary value for more than one hex digit', () => {
    expect(hexToBinary('EA')).toBe('11101010')
  })

  it('expects to test its robustness as it should be case-insensitive', () => {
    expect(hexToBinary('4d')).toBe('01001101')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(2)', () => {
    expect(hexToBinary('F')).toBe(parseInt('F', 16).toString(2))
  })
})
