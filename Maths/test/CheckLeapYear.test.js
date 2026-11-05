import { checkLeapYear } from '../CheckLeapYear.js'

describe('checkLeapYear', () => {
  test('2000 is a leap year', () => {
    expect(checkLeapYear(2000)).toBe(true)
  })

  test('1900 is NOT a leap year', () => {
    expect(checkLeapYear(1900)).toBe(false)
  })

  test('2024 is a leap year', () => {
    expect(checkLeapYear(2024)).toBe(true)
  })

  test('2023 is NOT a leap year', () => {
    expect(checkLeapYear(2023)).toBe(false)
  })

  test('1600 is a leap year', () => {
    expect(checkLeapYear(1600)).toBe(true)
  })

  test('1700 is NOT a leap year', () => {
    expect(checkLeapYear(1700)).toBe(false)
  })

  test('2100 is NOT a leap year', () => {
    expect(checkLeapYear(2100)).toBe(false)
  })

  test('400 is a leap year', () => {
    expect(checkLeapYear(400)).toBe(true)
  })

  test('throws TypeError for zero', () => {
    expect(() => checkLeapYear(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => checkLeapYear(-4)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => checkLeapYear(2024.5)).toThrow(TypeError)
  })
})
