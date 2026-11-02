import { caesarCipher } from '../CaesarCipher.js'

describe('caesarCipher', () => {
  test('shifts letters by 1', () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD')
  })

  test('wraps around Z to A', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC')
  })

  test('preserves case', () => {
    expect(caesarCipher('Hello', 13)).toBe('Uryyb')
  })

  test('preserves spaces and punctuation', () => {
    expect(caesarCipher('Hello World!', 13)).toBe('Uryyb Jbeyq!')
  })

  test('shift of 0 returns same string', () => {
    expect(caesarCipher('ABC', 0)).toBe('ABC')
  })

  test('shift of 26 returns same string', () => {
    expect(caesarCipher('ABC', 26)).toBe('ABC')
  })

  test('negative shift works', () => {
    expect(caesarCipher('BCD', -1)).toBe('ABC')
  })

  test('decryption reverses encryption', () => {
    const original = 'Hello World'
    expect(caesarCipher(caesarCipher(original, 13), -13)).toBe(original)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => caesarCipher(123, 1)).toThrow(TypeError)
  })

  test('throws TypeError for non-integer shift', () => {
    expect(() => caesarCipher('ABC', 1.5)).toThrow(TypeError)
  })
})
