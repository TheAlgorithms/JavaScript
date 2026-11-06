import { sumOfDigits } from '../SumOfDigits.js'

describe('sumOfDigits', () => {
  test('sumOfDigits(0) returns 0', () => {
    expect(sumOfDigits(0)).toBe(0)
  })

  test('sumOfDigits(1) returns 1', () => {
    expect(sumOfDigits(1)).toBe(1)
  })

  test('sumOfDigits(123) returns 6', () => {
    expect(sumOfDigits(123)).toBe(6)
  })

  test('sumOfDigits(9999) returns 36', () => {
    expect(sumOfDigits(9999)).toBe(36)
  })

  test('sumOfDigits(-123) returns 6', () => {
    expect(sumOfDigits(-123)).toBe(6)
  })

  test('sumOfDigits(100) returns 1', () => {
    expect(sumOfDigits(100)).toBe(1)
  })

  test('sumOfDigits(999) returns 27', () => {
    expect(sumOfDigits(999)).toBe(27)
  })

  test('throws TypeError for float input', () => {
    expect(() => sumOfDigits(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => sumOfDigits('123')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => sumOfDigits(NaN)).toThrow(TypeError)
  })
})
