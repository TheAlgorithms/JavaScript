import { bellNumber } from '../BellNumber.js'

describe('bellNumber', () => {
  test('bellNumber(0) returns 1', () => {
    expect(bellNumber(0)).toBe(1)
  })

  test('bellNumber(1) returns 1', () => {
    expect(bellNumber(1)).toBe(1)
  })

  test('bellNumber(2) returns 2', () => {
    expect(bellNumber(2)).toBe(2)
  })

  test('bellNumber(3) returns 5', () => {
    expect(bellNumber(3)).toBe(5)
  })

  test('bellNumber(4) returns 15', () => {
    expect(bellNumber(4)).toBe(15)
  })

  test('bellNumber(5) returns 52', () => {
    expect(bellNumber(5)).toBe(52)
  })

  test('bellNumber(6) returns 203', () => {
    expect(bellNumber(6)).toBe(203)
  })

  test('bellNumber(7) returns 877', () => {
    expect(bellNumber(7)).toBe(877)
  })

  test('throws TypeError for negative input', () => {
    expect(() => bellNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => bellNumber(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => bellNumber('3')).toThrow(TypeError)
  })
})
