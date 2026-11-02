import { hexadecimalToDecimal } from '../HexadecimalToDecimal.js'

describe('hexadecimalToDecimal', () => {
  test("hexadecimalToDecimal('0') returns 0", () => {
    expect(hexadecimalToDecimal('0')).toBe(0)
  })

  test("hexadecimalToDecimal('A') returns 10", () => {
    expect(hexadecimalToDecimal('A')).toBe(10)
  })

  test("hexadecimalToDecimal('F') returns 15", () => {
    expect(hexadecimalToDecimal('F')).toBe(15)
  })

  test("hexadecimalToDecimal('10') returns 16", () => {
    expect(hexadecimalToDecimal('10')).toBe(16)
  })

  test("hexadecimalToDecimal('FF') returns 255", () => {
    expect(hexadecimalToDecimal('FF')).toBe(255)
  })

  test("hexadecimalToDecimal('100') returns 256", () => {
    expect(hexadecimalToDecimal('100')).toBe(256)
  })

  test("hexadecimalToDecimal lowercase 'ff' returns 255", () => {
    expect(hexadecimalToDecimal('ff')).toBe(255)
  })

  test("hexadecimalToDecimal('1000') returns 4096", () => {
    expect(hexadecimalToDecimal('1000')).toBe(4096)
  })

  test('throws TypeError for invalid hex string', () => {
    expect(() => hexadecimalToDecimal('GHI')).toThrow(TypeError)
  })

  test('throws TypeError for empty string', () => {
    expect(() => hexadecimalToDecimal('')).toThrow(TypeError)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => hexadecimalToDecimal(255)).toThrow(TypeError)
  })
})
