import { tribonacciNumber } from '../TribonacciNumber.js'

describe('tribonacciNumber', () => {
  test('tribonacciNumber(0) returns 0', () => {
    expect(tribonacciNumber(0)).toBe(0)
  })

  test('tribonacciNumber(1) returns 0', () => {
    expect(tribonacciNumber(1)).toBe(0)
  })

  test('tribonacciNumber(2) returns 1', () => {
    expect(tribonacciNumber(2)).toBe(1)
  })

  test('tribonacciNumber(3) returns 1', () => {
    expect(tribonacciNumber(3)).toBe(1)
  })

  test('tribonacciNumber(4) returns 2', () => {
    expect(tribonacciNumber(4)).toBe(2)
  })

  test('tribonacciNumber(5) returns 4', () => {
    expect(tribonacciNumber(5)).toBe(4)
  })

  test('tribonacciNumber(7) returns 13', () => {
    expect(tribonacciNumber(7)).toBe(13)
  })

  test('tribonacciNumber(8) returns 24', () => {
    expect(tribonacciNumber(8)).toBe(24)
  })

  test('throws TypeError for negative input', () => {
    expect(() => tribonacciNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => tribonacciNumber(1.5)).toThrow(TypeError)
  })
})
