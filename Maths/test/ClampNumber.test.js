import { clampNumber } from '../ClampNumber.js'

describe('clampNumber', () => {
  test('clampNumber(5, 1, 10) returns 5', () => {
    expect(clampNumber(5, 1, 10)).toBe(5)
  })

  test('clampNumber(-5, 1, 10) returns 1', () => {
    expect(clampNumber(-5, 1, 10)).toBe(1)
  })

  test('clampNumber(15, 1, 10) returns 10', () => {
    expect(clampNumber(15, 1, 10)).toBe(10)
  })

  test('clampNumber(1, 1, 10) returns 1 (at min)', () => {
    expect(clampNumber(1, 1, 10)).toBe(1)
  })

  test('clampNumber(10, 1, 10) returns 10 (at max)', () => {
    expect(clampNumber(10, 1, 10)).toBe(10)
  })

  test('clampNumber works with negative range', () => {
    expect(clampNumber(-5, -10, -1)).toBe(-5)
  })

  test('clampNumber works with decimals', () => {
    expect(clampNumber(1.5, 1.0, 2.0)).toBe(1.5)
  })

  test('clampNumber(0, 0, 0) returns 0', () => {
    expect(clampNumber(0, 0, 0)).toBe(0)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => clampNumber('5', 1, 10)).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => clampNumber(NaN, 1, 10)).toThrow(TypeError)
  })

  test('throws RangeError when min > max', () => {
    expect(() => clampNumber(5, 10, 1)).toThrow(RangeError)
  })
})
