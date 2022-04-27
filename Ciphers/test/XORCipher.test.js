import XORCipher from '../XORCipher'

describe('Testing XORCipher function', () => {
  it('Test - 1, passing a non-string as an argument', () => {
    expect(() => XORCipher(false, 0x345)).toThrow()
    expect(() => XORCipher(true, 123)).toThrow()
    expect(() => XORCipher(1n, 123n)).toThrow()
    expect(() => XORCipher(false, 0.34)).toThrow()
    expect(() => XORCipher({})).toThrow()
    expect(() => XORCipher([])).toThrow()
  })

  it('Test - 2, passing a string & number as an argument', () => {
    // NB: Node REPL might not output the null char '\x00' (charcode 0)
    expect(XORCipher('test string', 32)).toBe('TEST\x00STRING')
    expect(XORCipher('TEST\x00STRING', 32)).toBe('test string')
  })
})
