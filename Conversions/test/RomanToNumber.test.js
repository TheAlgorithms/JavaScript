import { romanToNumber } from '../RomanToNumber.js'

describe('romanToNumber', () => {
  test("romanToNumber('I') returns 1", () => {
    expect(romanToNumber('I')).toBe(1)
  })

  test("romanToNumber('III') returns 3", () => {
    expect(romanToNumber('III')).toBe(3)
  })

  test("romanToNumber('IV') returns 4", () => {
    expect(romanToNumber('IV')).toBe(4)
  })

  test("romanToNumber('IX') returns 9", () => {
    expect(romanToNumber('IX')).toBe(9)
  })

  test("romanToNumber('LVIII') returns 58", () => {
    expect(romanToNumber('LVIII')).toBe(58)
  })

  test("romanToNumber('MCMXCIV') returns 1994", () => {
    expect(romanToNumber('MCMXCIV')).toBe(1994)
  })

  test("romanToNumber('MMMCMXCIX') returns 3999", () => {
    expect(romanToNumber('MMMCMXCIX')).toBe(3999)
  })

  test("romanToNumber('XL') returns 40", () => {
    expect(romanToNumber('XL')).toBe(40)
  })

  test('throws TypeError for empty string', () => {
    expect(() => romanToNumber('')).toThrow(TypeError)
  })

  test('throws TypeError for invalid characters', () => {
    expect(() => romanToNumber('ABC')).toThrow(TypeError)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => romanToNumber(10)).toThrow(TypeError)
  })
})
