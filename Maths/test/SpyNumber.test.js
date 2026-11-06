import { isSpyNumber } from '../SpyNumber.js'

describe('isSpyNumber', () => {
  test('1 is a spy number (1=1)', () => {
    expect(isSpyNumber(1)).toBe(true)
  })

  test('123 is a spy number (1+2+3=6, 1x2x3=6)', () => {
    expect(isSpyNumber(123)).toBe(true)
  })

  test('1124 is a spy number (1+1+2+4=8, 1x1x2x4=8)', () => {
    expect(isSpyNumber(1124)).toBe(true)
  })

  test('132 is a spy number (1+3+2=6, 1x3x2=6)', () => {
    expect(isSpyNumber(132)).toBe(true)
  })

  test('1234 is NOT a spy number (1+2+3+4=10, 1x2x3x4=24)', () => {
    expect(isSpyNumber(1234)).toBe(false)
  })

  test('22 is NOT a spy number (2+2=4, 2x2=4) wait it is!', () => {
    expect(isSpyNumber(22)).toBe(true)
  })

  test('12 is NOT a spy number (1+2=3, 1x2=2)', () => {
    expect(isSpyNumber(12)).toBe(false)
  })

  test('11 is a spy number (1+1=2, 1x1=1) is false', () => {
    expect(isSpyNumber(11)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isSpyNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isSpyNumber(-123)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isSpyNumber(1.5)).toThrow(TypeError)
  })
})
