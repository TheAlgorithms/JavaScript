import {
  FibonacciDpWithoutRecursion,
  FibonacciRecursiveDP,
  FibonacciIterative,
  FibonacciGenerator,
  FibonacciRecursive,
  FibonacciMatrixExpo
} from '../Fibonacci'

describe('Fibonacci', () => {
  it('should return an array of numbers for FibonacciIterative', () => {
    expect(FibonacciIterative(6)).toEqual(
      expect.arrayContaining([0, 1, 1, 2, 3, 5, 8])
    )
    expect(FibonacciIterative(-6)).toEqual(
      expect.arrayContaining([0, 1, -1, 2, -3, 5, -8])
    )
  })

  it('should return number for FibonacciGenerator', () => {
    const positive = FibonacciGenerator()
    expect(positive.next().value).toBe(0)
    expect(positive.next().value).toBe(1)
    expect(positive.next().value).toBe(1)
    expect(positive.next().value).toBe(2)
    expect(positive.next().value).toBe(3)
    expect(positive.next().value).toBe(5)
    expect(positive.next().value).toBe(8)

    const negative = FibonacciGenerator(true)
    expect(negative.next().value).toBe(0)
    expect(negative.next().value).toBe(1)
    expect(negative.next().value).toBe(-1)
    expect(negative.next().value).toBe(2)
    expect(negative.next().value).toBe(-3)
    expect(negative.next().value).toBe(5)
    expect(negative.next().value).toBe(-8)
  })

  it('should return an array of numbers for FibonacciRecursive', () => {
    expect(FibonacciRecursive(6)).toEqual(
      expect.arrayContaining([0, 1, 1, 2, 3, 5, 8])
    )
    expect(FibonacciRecursive(-6)).toEqual(
      expect.arrayContaining([-0, 1, -1, 2, -3, 5, -8])
    )
  })

  it('should return number for FibonacciRecursiveDP', () => {
    expect(FibonacciRecursiveDP(6)).toBe(8)
    expect(FibonacciRecursiveDP(-6)).toBe(-8)
  })

  it('should return an array of numbers for FibonacciDpWithoutRecursion', () => {
    expect(FibonacciDpWithoutRecursion(6)).toEqual(
      expect.arrayContaining([0, 1, 1, 2, 3, 5, 8])
    )
    expect(FibonacciDpWithoutRecursion(-6)).toEqual(
      expect.arrayContaining([0, 1, -1, 2, -3, 5, -8])
    )
  })

  it('should return number for FibonacciMatrixExpo', () => {
    expect(FibonacciMatrixExpo(0)).toBe(0)
    expect(FibonacciMatrixExpo(1)).toBe(1)
    expect(FibonacciMatrixExpo(2)).toBe(1)
    expect(FibonacciMatrixExpo(3)).toBe(2)
    expect(FibonacciMatrixExpo(4)).toBe(3)
    expect(FibonacciMatrixExpo(5)).toBe(5)
    expect(FibonacciMatrixExpo(6)).toBe(8)

    expect(FibonacciMatrixExpo(-0)).toBe(-0)
    expect(FibonacciMatrixExpo(-1)).toBe(1)
    expect(FibonacciMatrixExpo(-2)).toBe(-1)
    expect(FibonacciMatrixExpo(-3)).toBe(2)
    expect(FibonacciMatrixExpo(-4)).toBe(-3)
    expect(FibonacciMatrixExpo(-5)).toBe(5)
    expect(FibonacciMatrixExpo(-6)).toBe(-8)
  })

  it('should return bigint for FibonacciMatrixExpo', () => {
    expect(FibonacciMatrixExpo(0n)).toBe(0n)
    expect(FibonacciMatrixExpo(1n)).toBe(1n)
    expect(FibonacciMatrixExpo(2n)).toBe(1n)
    expect(FibonacciMatrixExpo(3n)).toBe(2n)
    expect(FibonacciMatrixExpo(4n)).toBe(3n)
    expect(FibonacciMatrixExpo(5n)).toBe(5n)
    expect(FibonacciMatrixExpo(6n)).toBe(8n)

    expect(FibonacciMatrixExpo(-0n)).toBe(0n)
    expect(FibonacciMatrixExpo(-1n)).toBe(1n)
    expect(FibonacciMatrixExpo(-2n)).toBe(-1n)
    expect(FibonacciMatrixExpo(-3n)).toBe(2n)
    expect(FibonacciMatrixExpo(-4n)).toBe(-3n)
    expect(FibonacciMatrixExpo(-5n)).toBe(5n)
    expect(FibonacciMatrixExpo(-6n)).toBe(-8n)
  })
})
