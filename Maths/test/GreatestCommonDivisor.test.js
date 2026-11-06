import { greatestCommonDivisor } from '../GreatestCommonDivisor.js'

describe('greatestCommonDivisor', () => {
  test('greatestCommonDivisor(12, 8) returns 4', () => {
    expect(greatestCommonDivisor(12, 8)).toBe(4)
  })

  test('greatestCommonDivisor(100, 75) returns 25', () => {
    expect(greatestCommonDivisor(100, 75)).toBe(25)
  })

  test('greatestCommonDivisor(7, 5) returns 1', () => {
    expect(greatestCommonDivisor(7, 5)).toBe(1)
  })

  test('greatestCommonDivisor(1, 1) returns 1', () => {
    expect(greatestCommonDivisor(1, 1)).toBe(1)
  })

  test('greatestCommonDivisor of same numbers returns that number', () => {
    expect(greatestCommonDivisor(5, 5)).toBe(5)
  })

  test('greatestCommonDivisor(48, 18) returns 6', () => {
    expect(greatestCommonDivisor(48, 18)).toBe(6)
  })

  test('greatestCommonDivisor(100, 10) returns 10', () => {
    expect(greatestCommonDivisor(100, 10)).toBe(10)
  })

  test('throws TypeError for zero input', () => {
    expect(() => greatestCommonDivisor(0, 5)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => greatestCommonDivisor(-12, 8)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => greatestCommonDivisor(12.5, 8)).toThrow(TypeError)
  })
})
