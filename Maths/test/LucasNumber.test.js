import { lucasNumber } from '../LucasNumber.js'

describe('lucasNumber', () => {
  test('lucasNumber(0) returns 2', () => {
    expect(lucasNumber(0)).toBe(2)
  })

  test('lucasNumber(1) returns 1', () => {
    expect(lucasNumber(1)).toBe(1)
  })

  test('lucasNumber(2) returns 3', () => {
    expect(lucasNumber(2)).toBe(3)
  })

  test('lucasNumber(4) returns 7', () => {
    expect(lucasNumber(4)).toBe(7)
  })

  test('lucasNumber(6) returns 18', () => {
    expect(lucasNumber(6)).toBe(18)
  })

  test('lucasNumber(10) returns 123', () => {
    expect(lucasNumber(10)).toBe(123)
  })

  test('throws TypeError for negative input', () => {
    expect(() => lucasNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => lucasNumber(1.5)).toThrow(TypeError)
  })
})
