import { isUglyNumber } from '../UglyNumber.js'

describe('isUglyNumber', () => {
  test('1 is an ugly number', () => {
    expect(isUglyNumber(1)).toBe(true)
  })

  test('2 is an ugly number', () => {
    expect(isUglyNumber(2)).toBe(true)
  })

  test('3 is an ugly number', () => {
    expect(isUglyNumber(3)).toBe(true)
  })

  test('6 is an ugly number (2 x 3)', () => {
    expect(isUglyNumber(6)).toBe(true)
  })

  test('8 is an ugly number (2³)', () => {
    expect(isUglyNumber(8)).toBe(true)
  })

  test('15 is an ugly number (3 x 5)', () => {
    expect(isUglyNumber(15)).toBe(true)
  })

  test('30 is an ugly number (2 x 3 x 5)', () => {
    expect(isUglyNumber(30)).toBe(true)
  })

  test('14 is NOT an ugly number (2 x 7)', () => {
    expect(isUglyNumber(14)).toBe(false)
  })

  test('7 is NOT an ugly number (prime > 5)', () => {
    expect(isUglyNumber(7)).toBe(false)
  })

  test('11 is NOT an ugly number', () => {
    expect(isUglyNumber(11)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isUglyNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isUglyNumber(-6)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isUglyNumber(6.5)).toThrow(TypeError)
  })
})
