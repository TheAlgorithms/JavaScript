import { numberToRoman } from '../NumberToRoman.js'

describe('numberToRoman', () => {
  test("numberToRoman(1) returns 'I'", () => {
    expect(numberToRoman(1)).toBe('I')
  })

  test("numberToRoman(3) returns 'III'", () => {
    expect(numberToRoman(3)).toBe('III')
  })

  test("numberToRoman(4) returns 'IV'", () => {
    expect(numberToRoman(4)).toBe('IV')
  })

  test("numberToRoman(9) returns 'IX'", () => {
    expect(numberToRoman(9)).toBe('IX')
  })

  test("numberToRoman(40) returns 'XL'", () => {
    expect(numberToRoman(40)).toBe('XL')
  })

  test("numberToRoman(58) returns 'LVIII'", () => {
    expect(numberToRoman(58)).toBe('LVIII')
  })

  test("numberToRoman(1994) returns 'MCMXCIV'", () => {
    expect(numberToRoman(1994)).toBe('MCMXCIV')
  })

  test("numberToRoman(3999) returns 'MMMCMXCIX'", () => {
    expect(numberToRoman(3999)).toBe('MMMCMXCIX')
  })

  test('throws TypeError for 0', () => {
    expect(() => numberToRoman(0)).toThrow(TypeError)
  })

  test('throws TypeError for 4000', () => {
    expect(() => numberToRoman(4000)).toThrow(TypeError)
  })

  test('throws TypeError for float', () => {
    expect(() => numberToRoman(1.5)).toThrow(TypeError)
  })
})
