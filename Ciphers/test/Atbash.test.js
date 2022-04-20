import Atbash from '../Atbash'

describe('Testing Atbash function', () => {
  it('Test - 1, passing a non-string as an argument', () => {
    expect(() => Atbash(0x345)).toThrow()
    expect(() => Atbash(123)).toThrow()
    expect(() => Atbash(123n)).toThrow()
    expect(() => Atbash(false)).toThrow()
    expect(() => Atbash({})).toThrow()
    expect(() => Atbash([])).toThrow()
  })

  it('Test - 2, passing a string as an argument', () => {
    const clearText = 'The quick brown fox jumps over the lazy dog'
    const cryptText = Atbash(clearText)
    expect(Atbash(cryptText)).toBe(clearText)
  })
})
