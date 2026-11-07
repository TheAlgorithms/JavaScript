import { factorialIterative } from '../FactorialIterative.js'

describe('factorialIterative', () => {
  test('factorialIterative(0) returns 1', () => {
    expect(factorialIterative(0)).toBe(1)
  })

  test('factorialIterative(1) returns 1', () => {
    expect(factorialIterative(1)).toBe(1)
  })

  test('factorialIterative(2) returns 2', () => {
    expect(factorialIterative(2)).toBe(2)
  })

  test('factorialIterative(3) returns 6', () => {
    expect(factorialIterative(3)).toBe(6)
  })

  test('factorialIterative(5) returns 120', () => {
    expect(factorialIterative(5)).toBe(120)
  })

  test('factorialIterative(7) returns 5040', () => {
    expect(factorialIterative(7)).toBe(5040)
  })

  test('factorialIterative(10) returns 3628800', () => {
    expect(factorialIterative(10)).toBe(3628800)
  })

  test('factorialIterative(12) returns 479001600', () => {
    expect(factorialIterative(12)).toBe(479001600)
  })

  test('throws TypeError for negative input', () => {
    expect(() => factorialIterative(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => factorialIterative(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => factorialIterative('5')).toThrow(TypeError)
  })
})
