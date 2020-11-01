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
    expect(FibonacciMatrixExpo(0)).toBe(0)
    expect(FibonacciMatrixExpo(1)).toBe(1)
    expect(FibonacciMatrixExpo(2)).toBe(1)
    expect(FibonacciMatrixExpo(3)).toBe(2)
    expect(FibonacciMatrixExpo(4)).toBe(3)
    expect(FibonacciMatrixExpo(5)).toBe(5)
  })
})
