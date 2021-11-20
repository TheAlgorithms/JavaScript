import { fibonacci } from '../FibonacciNumber'

describe('FibonacciNumber', () => {
  it('fibonacci of 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('fibonacci of 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('fibonacci of 10', () => {
    expect(fibonacci(10)).toBe(55)
  })

  it('fibonacci of 25', () => {
    expect(fibonacci(25)).toBe(75025)
  })
})
