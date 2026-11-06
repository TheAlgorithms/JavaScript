import { leastCommonMultiple } from '../LeastCommonMultiple.js'

describe('leastCommonMultiple', () => {
  test('leastCommonMultiple(4, 6) returns 12', () => {
    expect(leastCommonMultiple(4, 6)).toBe(12)
  })

  test('leastCommonMultiple(12, 15) returns 60', () => {
    expect(leastCommonMultiple(12, 15)).toBe(60)
  })

  test('leastCommonMultiple(7, 5) returns 35', () => {
    expect(leastCommonMultiple(7, 5)).toBe(35)
  })

  test('leastCommonMultiple(1, 1) returns 1', () => {
    expect(leastCommonMultiple(1, 1)).toBe(1)
  })

  test('leastCommonMultiple of same numbers returns that number', () => {
    expect(leastCommonMultiple(5, 5)).toBe(5)
  })

  test('leastCommonMultiple(3, 4) returns 12', () => {
    expect(leastCommonMultiple(3, 4)).toBe(12)
  })

  test('leastCommonMultiple(100, 75) returns 300', () => {
    expect(leastCommonMultiple(100, 75)).toBe(300)
  })

  test('throws TypeError for zero input', () => {
    expect(() => leastCommonMultiple(0, 5)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => leastCommonMultiple(-4, 6)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => leastCommonMultiple(4.5, 6)).toThrow(TypeError)
  })
})
