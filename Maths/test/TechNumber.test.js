import { isTechNumber } from '../TechNumber.js'

describe('isTechNumber', () => {
  test('2025 is a tech number (20+25=45, 45²=2025)', () => {
    expect(isTechNumber(2025)).toBe(true)
  })

  test('3025 is a tech number (30+25=55, 55²=3025)', () => {
    expect(isTechNumber(3025)).toBe(true)
  })

  test('9801 is a tech number (98+01=99, 99²=9801)', () => {
    expect(isTechNumber(9801)).toBe(true)
  })

  test('1234 is NOT a tech number', () => {
    expect(isTechNumber(1234)).toBe(false)
  })

  test('odd digit numbers are NOT tech numbers', () => {
    expect(isTechNumber(123)).toBe(false)
  })

  test('100 is NOT a tech number', () => {
    expect(isTechNumber(100)).toBe(false)
  })

  test('81 is a tech number (8+1=9, 9²=81)', () => {
    expect(isTechNumber(81)).toBe(true)
  })

  test('throws TypeError for zero', () => {
    expect(() => isTechNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isTechNumber(-2025)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isTechNumber(20.25)).toThrow(TypeError)
  })
})
