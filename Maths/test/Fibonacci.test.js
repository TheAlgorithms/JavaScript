import {
  FibonacciDpWithoutRecursion,
  FibonacciRecursiveDP,
  FibonacciIterative,
  FibonacciRecursive,
  FibonacciMatrixExpo
} from '../Fibonacci'

describe('Fibonanci', () => {
  it('should return an array of numbers for FibonnaciIterative', () => {
    expect(FibonacciIterative(5)).toEqual(
      expect.arrayContaining([1, 1, 2, 3, 5])
    )
  })

  it('should return an array of numbers for FibonnaciRecursive', () => {
    expect(FibonacciRecursive(5)).toEqual(
      expect.arrayContaining([1, 1, 2, 3, 5])
    )
  })

  it('should return number for FibonnaciRecursiveDP', () => {
    expect(FibonacciRecursiveDP(5)).toBe(5)
  })

  it('should return an array of numbers for FibonacciDpWithoutRecursion', () => {
    expect(FibonacciDpWithoutRecursion(5)).toEqual(
      expect.arrayContaining([1, 1, 2, 3, 5])
    )
  })

  it('should return number for FibonnaciMatrixExpo', () => {
    expect(FibonacciMatrixExpo(5)).toBe(5)
  })
})
