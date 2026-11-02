import { decimalToBinary } from '../DecimalToBinary.js'

describe('decimalToBinary', () => {
  test("decimalToBinary(0) returns '0'", () => {
    expect(decimalToBinary(0)).toBe('0')
  })

  test("decimalToBinary(1) returns '1'", () => {
    expect(decimalToBinary(1)).toBe('1')
  })

  test("decimalToBinary(10) returns '1010'", () => {
    expect(decimalToBinary(10)).toBe('1010')
  })

  test("decimalToBinary(15) returns '1111'", () => {
    expect(decimalToBinary(15)).toBe('1111')
  })

  test("decimalToBinary(32) returns '100000'", () => {
    expect(decimalToBinary(32)).toBe('100000')
  })

  test("decimalToBinary(255) returns '11111111'", () => {
    expect(decimalToBinary(255)).toBe('11111111')
  })

  test('throws TypeError for negative input', () => {
    expect(() => decimalToBinary(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => decimalToBinary(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => decimalToBinary('10')).toThrow(TypeError)
  })
})
