import { binomialCoefficient } from '../BinomialCoefficient.js'

describe('binomialCoefficient', () => {
  test('binomialCoefficient(5, 0) returns 1', () => {
    expect(binomialCoefficient(5, 0)).toBe(1)
  })

  test('binomialCoefficient(5, 5) returns 1', () => {
    expect(binomialCoefficient(5, 5)).toBe(1)
  })

  test('binomialCoefficient(5, 1) returns 5', () => {
    expect(binomialCoefficient(5, 1)).toBe(5)
  })

  test('binomialCoefficient(5, 2) returns 10', () => {
    expect(binomialCoefficient(5, 2)).toBe(10)
  })

  test('binomialCoefficient(10, 3) returns 120', () => {
    expect(binomialCoefficient(10, 3)).toBe(120)
  })

  test('binomialCoefficient(6, 3) returns 20', () => {
    expect(binomialCoefficient(6, 3)).toBe(20)
  })

  test('binomialCoefficient(k > n) returns 0', () => {
    expect(binomialCoefficient(3, 5)).toBe(0)
  })

  test('binomialCoefficient(0, 0) returns 1', () => {
    expect(binomialCoefficient(0, 0)).toBe(1)
  })

  test('binomialCoefficient(10, 10) returns 1', () => {
    expect(binomialCoefficient(10, 10)).toBe(1)
  })

  test('throws TypeError for negative n', () => {
    expect(() => binomialCoefficient(-5, 2)).toThrow(TypeError)
  })

  test('throws TypeError for negative k', () => {
    expect(() => binomialCoefficient(5, -2)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => binomialCoefficient(5.5, 2)).toThrow(TypeError)
  })
})
