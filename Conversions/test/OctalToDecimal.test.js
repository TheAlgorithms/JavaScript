import { octalToDecimal } from '../OctalToDecimal.js'

describe('octalToDecimal', () => {
  test("octalToDecimal('0') returns 0", () => {
    expect(octalToDecimal('0')).toBe(0)
  })

  test("octalToDecimal('1') returns 1", () => {
    expect(octalToDecimal('1')).toBe(1)
  })

  test("octalToDecimal('7') returns 7", () => {
    expect(octalToDecimal('7')).toBe(7)
  })

  test("octalToDecimal('10') returns 8", () => {
    expect(octalToDecimal('10')).toBe(8)
  })

  test("octalToDecimal('100') returns 64", () => {
    expect(octalToDecimal('100')).toBe(64)
  })

  test("octalToDecimal('377') returns 255", () => {
    expect(octalToDecimal('377')).toBe(255)
  })

  test("octalToDecimal('1000') returns 512", () => {
    expect(octalToDecimal('1000')).toBe(512)
  })

  test('throws TypeError for invalid octal string', () => {
    expect(() => octalToDecimal('89')).toThrow(TypeError)
  })

  test('throws TypeError for empty string', () => {
    expect(() => octalToDecimal('')).toThrow(TypeError)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => octalToDecimal(10)).toThrow(TypeError)
  })
})
