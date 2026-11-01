import { isPerfectNumber } from '../PerfectNumber.js'

describe('isPerfectNumber', () => {
  test('6 is a perfect number (1+2+3=6)', () => {
    expect(isPerfectNumber(6)).toBe(true)
  })

  test('28 is a perfect number (1+2+4+7+14=28)', () => {
    expect(isPerfectNumber(28)).toBe(true)
  })

  test('496 is a perfect number', () => {
    expect(isPerfectNumber(496)).toBe(true)
  })

  test('8128 is a perfect number', () => {
    expect(isPerfectNumber(8128)).toBe(true)
  })

  test('1 is NOT a perfect number', () => {
    expect(isPerfectNumber(1)).toBe(false)
  })

  test('12 is NOT a perfect number', () => {
    expect(isPerfectNumber(12)).toBe(false)
  })

  test('100 is NOT a perfect number', () => {
    expect(isPerfectNumber(100)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isPerfectNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isPerfectNumber(-5)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isPerfectNumber(2.5)).toThrow(TypeError)
  })
})
