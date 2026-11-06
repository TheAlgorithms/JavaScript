import { numberOfDigits } from '../NumberOfDigits.js'

describe('numberOfDigits', () => {
  test('numberOfDigits(0) returns 1', () => {
    expect(numberOfDigits(0)).toBe(1)
  })

  test('numberOfDigits(1) returns 1', () => {
    expect(numberOfDigits(1)).toBe(1)
  })

  test('numberOfDigits(123) returns 3', () => {
    expect(numberOfDigits(123)).toBe(3)
  })

  test('numberOfDigits(9999) returns 4', () => {
    expect(numberOfDigits(9999)).toBe(4)
  })

  test('numberOfDigits(-9999) returns 4', () => {
    expect(numberOfDigits(-9999)).toBe(4)
  })

  test('numberOfDigits(1000000) returns 7', () => {
    expect(numberOfDigits(1000000)).toBe(7)
  })

  test('numberOfDigits(-1) returns 1', () => {
    expect(numberOfDigits(-1)).toBe(1)
  })

  test('throws TypeError for float input', () => {
    expect(() => numberOfDigits(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => numberOfDigits('123')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => numberOfDigits(NaN)).toThrow(TypeError)
  })
})
