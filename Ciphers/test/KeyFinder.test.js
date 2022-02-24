import { caesarCipherEncodeAndDecodeEngine } from '../KeyFinder'

describe('caesarCipherEncodeAndDecodeEngine', () => {
  it('Should be able to shift lower case characters forward', () => {
    expect(caesarCipherEncodeAndDecodeEngine('abcdefghijklmnopqrstuvwxyz', 3))
      .toEqual('defghijklmnopqrstuvwxyzabc')
  }),

  it('Should be able to shift lower case characters backwards', () => {
    expect(caesarCipherEncodeAndDecodeEngine('abcdefghijklmnopqrstuvwxyz', -4))
      .toEqual('wxyzabcdefghijklmnopqrstuv')
  }),

  it('Should be able to shift upper case characters forward', () => {
    expect(caesarCipherEncodeAndDecodeEngine('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3))
      .toEqual('DEFGHIJKLMNOPQRSTUVWXYZABC')
  }),

  it('Should be able to shift upper case characters backwards', () => {
    expect(caesarCipherEncodeAndDecodeEngine('ABCDEFGHIJKLMNOPQRSTUVWXYZ', -4))
      .toEqual('WXYZABCDEFGHIJKLMNOPQRSTUV')
  }),

  it('Should be able to shift number characters forward', () => {
    expect(caesarCipherEncodeAndDecodeEngine('0123456789', 3))
      .toEqual('3456789012')
  }),

  it('Should be able to shift number characters backwards', () => {
    expect(caesarCipherEncodeAndDecodeEngine('0123456789', -4))
      .toEqual('6789012345')
  }),

  it('When numShift is 0, no characters should shift', () => {
    expect(caesarCipherEncodeAndDecodeEngine('abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 0))
      .toEqual('abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
  })
})
