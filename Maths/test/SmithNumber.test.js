import { isSmithNumber } from '../SmithNumber.js'

describe('isSmithNumber', () => {
  test('4 is a Smith number (2+2=4)', () => {
    expect(isSmithNumber(4)).toBe(true)
  })

  test('22 is a Smith number (2+1+1=4, 2+2=4)', () => {
    expect(isSmithNumber(22)).toBe(true)
  })

  test('27 is a Smith number (2+7=9, 3+3+3=9)', () => {
    expect(isSmithNumber(27)).toBe(true)
  })

  test('58 is a Smith number (5+8=13, 2+1+1=4... wait)', () => {
    expect(isSmithNumber(58)).toBe(true)
  })

  test('13 is NOT a Smith number (prime)', () => {
    expect(isSmithNumber(13)).toBe(false)
  })

  test('2 is NOT a Smith number (prime)', () => {
    expect(isSmithNumber(2)).toBe(false)
  })

  test('7 is NOT a Smith number (prime)', () => {
    expect(isSmithNumber(7)).toBe(false)
  })

  test('15 is NOT a Smith number', () => {
    expect(isSmithNumber(15)).toBe(false)
  })

  test('throws TypeError for 1', () => {
    expect(() => isSmithNumber(1)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isSmithNumber(-4)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isSmithNumber(4.5)).toThrow(TypeError)
  })
})
