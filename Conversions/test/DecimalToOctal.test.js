import { decimalToOctal } from '../DecimalToOctal.js'

describe('decimalToOctal', () => {
  test("decimalToOctal(0) returns '0'", () => {
    expect(decimalToOctal(0)).toBe('0')
  })

  test("decimalToOctal(1) returns '1'", () => {
    expect(decimalToOctal(1)).toBe('1')
  })

  test("decimalToOctal(7) returns '7'", () => {
    expect(decimalToOctal(7)).toBe('7')
  })

  test("decimalToOctal(8) returns '10'", () => {
    expect(decimalToOctal(8)).toBe('10')
  })

  test("decimalToOctal(64) returns '100'", () => {
    expect(decimalToOctal(64)).toBe('100')
  })

  test("decimalToOctal(255) returns '377'", () => {
    expect(decimalToOctal(255)).toBe('377')
  })

  test("decimalToOctal(512) returns '1000'", () => {
    expect(decimalToOctal(512)).toBe('1000')
  })

  test('throws TypeError for negative input', () => {
    expect(() => decimalToOctal(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => decimalToOctal(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => decimalToOctal('8')).toThrow(TypeError)
  })
})
