import { isNeonNumber } from '../NeonNumber.js'

describe('isNeonNumber', () => {
  test('0 is a neon number (0²=0, 0=0)', () => {
    expect(isNeonNumber(0)).toBe(true)
  })

  test('1 is a neon number (1²=1, 1=1)', () => {
    expect(isNeonNumber(1)).toBe(true)
  })

  test('9 is a neon number (9²=81, 8+1=9)', () => {
    expect(isNeonNumber(9)).toBe(true)
  })

  test('2 is NOT a neon number (2²=4, 4≠2)', () => {
    expect(isNeonNumber(2)).toBe(false)
  })

  test('3 is NOT a neon number (3²=9, 9≠3)', () => {
    expect(isNeonNumber(3)).toBe(false)
  })

  test('5 is NOT a neon number (5²=25, 2+5=7≠5)', () => {
    expect(isNeonNumber(5)).toBe(false)
  })

  test('10 is NOT a neon number (10²=100, 1+0+0=1≠10)', () => {
    expect(isNeonNumber(10)).toBe(false)
  })

  test('8 is NOT a neon number (8²=64, 6+4=10≠8)', () => {
    expect(isNeonNumber(8)).toBe(false)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isNeonNumber(-9)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isNeonNumber(9.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => isNeonNumber('9')).toThrow(TypeError)
  })
})
