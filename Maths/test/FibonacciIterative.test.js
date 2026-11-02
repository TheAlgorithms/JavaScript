import { fibonacciIterative } from '../FibonacciIterative.js'

describe('fibonacciIterative', () => {
  test('fibonacciIterative(0) returns 0', () => {
    expect(fibonacciIterative(0)).toBe(0)
  })

  test('fibonacciIterative(1) returns 1', () => {
    expect(fibonacciIterative(1)).toBe(1)
  })

  test('fibonacciIterative(2) returns 1', () => {
    expect(fibonacciIterative(2)).toBe(1)
  })

  test('fibonacciIterative(5) returns 5', () => {
    expect(fibonacciIterative(5)).toBe(5)
  })

  test('fibonacciIterative(6) returns 8', () => {
    expect(fibonacciIterative(6)).toBe(8)
  })

  test('fibonacciIterative(10) returns 55', () => {
    expect(fibonacciIterative(10)).toBe(55)
  })

  test('fibonacciIterative(20) returns 6765', () => {
    expect(fibonacciIterative(20)).toBe(6765)
  })

  test('throws TypeError for negative input', () => {
    expect(() => fibonacciIterative(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => fibonacciIterative(1.5)).toThrow(TypeError)
  })
})
