import { isArmstrongNumber } from '../ArmstrongNumber.js'

describe('isArmstrongNumber', () => {
  test('single digit numbers are always Armstrong numbers', () => {
    for (let i = 0; i <= 9; i++) {
      expect(isArmstrongNumber(i)).toBe(true)
    }
  })

  test('153 is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toBe(true)
  })

  test('370 is an Armstrong number', () => {
    expect(isArmstrongNumber(370)).toBe(true)
  })

  test('371 is an Armstrong number', () => {
    expect(isArmstrongNumber(371)).toBe(true)
  })

  test('407 is an Armstrong number', () => {
    expect(isArmstrongNumber(407)).toBe(true)
  })

  test('9474 is a 4-digit Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toBe(true)
  })

  test('10 is NOT an Armstrong number', () => {
    expect(isArmstrongNumber(10)).toBe(false)
  })

  test('100 is NOT an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toBe(false)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isArmstrongNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isArmstrongNumber(1.5)).toThrow(TypeError)
  })
})