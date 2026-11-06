import { isNumeric } from '../IsNumeric.js'

describe('isNumeric', () => {
  test("isNumeric('123') returns true", () => {
    expect(isNumeric('123')).toBe(true)
  })

  test("isNumeric('-45.6') returns true", () => {
    expect(isNumeric('-45.6')).toBe(true)
  })

  test("isNumeric('0') returns true", () => {
    expect(isNumeric('0')).toBe(true)
  })

  test("isNumeric('3.14') returns true", () => {
    expect(isNumeric('3.14')).toBe(true)
  })

  test("isNumeric('abc') returns false", () => {
    expect(isNumeric('abc')).toBe(false)
  })

  test("isNumeric('12.3.4') returns false", () => {
    expect(isNumeric('12.3.4')).toBe(false)
  })

  test("isNumeric('') returns false", () => {
    expect(isNumeric('')).toBe(false)
  })

  test("isNumeric('  ') returns false", () => {
    expect(isNumeric('  ')).toBe(false)
  })

  test("isNumeric('123abc') returns false", () => {
    expect(isNumeric('123abc')).toBe(false)
  })

  test("isNumeric('-0') returns true", () => {
    expect(isNumeric('-0')).toBe(true)
  })

  test('throws TypeError for non-string input', () => {
    expect(() => isNumeric(123)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => isNumeric(null)).toThrow(TypeError)
  })
})
