import { binaryToDecimal } from '../BinaryToDecimal.js'

describe('binaryToDecimal', () => {
  test("binaryToDecimal('0') returns 0", () => {
    expect(binaryToDecimal('0')).toBe(0)
  })

  test("binaryToDecimal('1') returns 1", () => {
    expect(binaryToDecimal('1')).toBe(1)
  })

  test("binaryToDecimal('1010') returns 10", () => {
    expect(binaryToDecimal('1010')).toBe(10)
  })

  test("binaryToDecimal('1111') returns 15", () => {
    expect(binaryToDecimal('1111')).toBe(15)
  })

  test("binaryToDecimal('100000') returns 32", () => {
    expect(binaryToDecimal('100000')).toBe(32)
  })

  test("binaryToDecimal('11111111') returns 255", () => {
    expect(binaryToDecimal('11111111')).toBe(255)
  })

  test('throws TypeError for non-binary string', () => {
    expect(() => binaryToDecimal('1012')).toThrow(TypeError)
  })

  test('throws TypeError for empty string', () => {
    expect(() => binaryToDecimal('')).toThrow(TypeError)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => binaryToDecimal(1010)).toThrow(TypeError)
  })
})
