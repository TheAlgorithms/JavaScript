import { isDeficientNumber } from '../DeficientNumber.js'

describe('isDeficientNumber', () => {
  test('1 is NOT a deficient number', () => {
    expect(isDeficientNumber(1)).toBe(false)
  })

  test('9 is a deficient number (1+3=4 < 9)', () => {
    expect(isDeficientNumber(9)).toBe(true)
  })

  test('10 is a deficient number (1+2+5=8 < 10)', () => {
    expect(isDeficientNumber(10)).toBe(true)
  })

  test('prime numbers are deficient', () => {
    expect(isDeficientNumber(7)).toBe(true)
    expect(isDeficientNumber(11)).toBe(true)
    expect(isDeficientNumber(13)).toBe(true)
  })

  test('6 is NOT deficient (perfect number)', () => {
    expect(isDeficientNumber(6)).toBe(false)
  })

  test('12 is NOT deficient (abundant number)', () => {
    expect(isDeficientNumber(12)).toBe(false)
  })

  test('28 is NOT deficient (perfect number)', () => {
    expect(isDeficientNumber(28)).toBe(false)
  })

  test('18 is NOT deficient (abundant number)', () => {
    expect(isDeficientNumber(18)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isDeficientNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isDeficientNumber(-9)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isDeficientNumber(9.5)).toThrow(TypeError)
  })
})
