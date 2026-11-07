import { isKaprekarNumber } from '../KaprekarNumber.js'

describe('isKaprekarNumber', () => {
  test('1 is NOT a Kaprekar number', () => {
    expect(isKaprekarNumber(1)).toBe(false)
  })

  test('9 is a Kaprekar number (9²=81, 8+1=9)', () => {
    expect(isKaprekarNumber(9)).toBe(true)
  })

  test('45 is a Kaprekar number (45²=2025, 20+25=45)', () => {
    expect(isKaprekarNumber(45)).toBe(true)
  })

  test('55 is a Kaprekar number (55²=3025, 30+25=55)', () => {
    expect(isKaprekarNumber(55)).toBe(true)
  })

  test('99 is a Kaprekar number (99²=9801, 98+01=99)', () => {
    expect(isKaprekarNumber(99)).toBe(true)
  })

  test('297 is a Kaprekar number (297²=88209, 88+209=297)', () => {
    expect(isKaprekarNumber(297)).toBe(true)
  })

  test('10 is NOT a Kaprekar number', () => {
    expect(isKaprekarNumber(10)).toBe(false)
  })

  test('11 is NOT a Kaprekar number', () => {
    expect(isKaprekarNumber(11)).toBe(false)
  })

  test('100 is NOT a Kaprekar number', () => {
    expect(isKaprekarNumber(100)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isKaprekarNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isKaprekarNumber(-9)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isKaprekarNumber(9.5)).toThrow(TypeError)
  })
})
