import { fibonacci } from '../FibonacciNumberRecursive'

describe('FibonacciNumberRecursive', () => {
  it('should return 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('should return 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('should return 5', () => {
    expect(fibonacci(5)).toBe(5)
  })

  it('should return 9', () => {
    expect(fibonacci(9)).toBe(34)
  })
})
