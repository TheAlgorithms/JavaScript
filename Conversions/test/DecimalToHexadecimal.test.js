import { decimalToHexadecimal } from '../DecimalToHexadecimal.js'

describe('decimalToHexadecimal', () => {
  test("decimalToHexadecimal(0) returns '0'", () => {
    expect(decimalToHexadecimal(0)).toBe('0')
  })

  test("decimalToHexadecimal(10) returns 'A'", () => {
    expect(decimalToHexadecimal(10)).toBe('A')
  })

  test("decimalToHexadecimal(15) returns 'F'", () => {
    expect(decimalToHexadecimal(15)).toBe('F')
  })

  test("decimalToHexadecimal(16) returns '10'", () => {
    expect(decimalToHexadecimal(16)).toBe('10')
  })

  test("decimalToHexadecimal(255) returns 'FF'", () => {
    expect(decimalToHexadecimal(255)).toBe('FF')
  })

  test("decimalToHexadecimal(256) returns '100'", () => {
    expect(decimalToHexadecimal(256)).toBe('100')
  })

  test("decimalToHexadecimal(4096) returns '1000'", () => {
    expect(decimalToHexadecimal(4096)).toBe('1000')
  })

  test('throws TypeError for negative input', () => {
    expect(() => decimalToHexadecimal(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => decimalToHexadecimal(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => decimalToHexadecimal('FF')).toThrow(TypeError)
  })
})
