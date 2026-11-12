import binaryToHex from '../BinaryToHex'

describe('BinaryToHex', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(binaryToHex('1000')).toBe('8')
  })

  it('expects to return correct hexadecimal value for more than one hex digit', () => {
    expect(binaryToHex('11101010')).toBe('EA')
  })

  it('expects to return correct hexadecimal value for padding-required binary', () => {
    expect(binaryToHex('1001101')).toBe('4D')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
    expect(binaryToHex('1111')).toBe(
      parseInt('1111', 2).toString(16).toUpperCase()
    )
  })

  it('expects to throw for a non-string argument', () => {
    expect(() => binaryToHex(1000)).toThrowError()
    expect(() => binaryToHex(null)).toThrowError()
  })

  it('expects to throw for a non-binary string', () => {
    expect(() => binaryToHex('2')).toThrowError()
    expect(() => binaryToHex('1002')).toThrowError()
    expect(() => binaryToHex('1010 1101')).toThrowError()
    expect(() => binaryToHex('')).toThrowError()
  })
})
