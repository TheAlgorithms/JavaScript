import ROT13 from '../ROT13'

describe('Testing ROT13 function', () => {
  it('Test - 1, passing a non-string as an argument', () => {
    expect(() => ROT13(0x345)).toThrow()
    expect(() => ROT13(123)).toThrow()
    expect(() => ROT13(123n)).toThrow()
    expect(() => ROT13(false)).toThrow()
    expect(() => ROT13({})).toThrow()
    expect(() => ROT13([])).toThrow()
  })

  it('Test - 2, passing a string as an argument', () => {
    expect(ROT13('Uryyb Jbeyq')).toBe('Hello World')
    expect(ROT13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')).toBe(
      'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    )
    expect(ROT13('The quick brown fox jumps over the lazy dog')).toBe(
      'Gur dhvpx oebja sbk whzcf bire gur ynml qbt'
    )
  })
})
