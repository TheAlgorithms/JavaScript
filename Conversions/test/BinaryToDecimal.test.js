import binaryToDecimal from '../BinaryToDecimal'

describe('BinaryToDecimal', () => {
  it('expects to return correct decimal value', () => {
    expect(binaryToDecimal('1000')).toBe(8)
  })

  it('expects to return correct hexadecimal value for more than one hex digit', () => {
    expect(binaryToDecimal('01101000')).toBe(104)
  })

  it('expects to return correct hexadecimal value for padding-required binary', () => {
    expect(binaryToDecimal('1000101')).toBe(69)
  })

  it('expects to throw for a non-string argument', () => {
    expect(() => binaryToDecimal(1000)).toThrowError()
    expect(() => binaryToDecimal(null)).toThrowError()
  })

  it('expects to throw for a non-binary string', () => {
    expect(() => binaryToDecimal('2')).toThrowError()
    expect(() => binaryToDecimal('102')).toThrowError()
    expect(() => binaryToDecimal('')).toThrowError()
  })
})
