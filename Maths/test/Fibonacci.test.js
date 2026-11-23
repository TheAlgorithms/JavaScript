import {
  FibonacciDpWithoutRecursion,
  FibonacciRecursiveDP,
  FibonacciIterative,
  FibonacciGenerator,
  FibonacciRecursive,
  FibonacciMatrixExpo,
  FibonacciUsingFormula
} from '../Fibonacci'

describe('Fibonacci', () => {
  it('should build recursive sequences independently of earlier calls', () => {
    expect(FibonacciRecursive(6)).toEqual([0, 1, 1, 2, 3, 5, 8])
    expect(FibonacciRecursive(2)).toEqual([0, 1, 1])
    expect(FibonacciRecursive(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
    expect(FibonacciRecursive(1)).toEqual([0, 1])
    expect(FibonacciRecursive(-3)).toEqual([-0, 1, -1, 2])
  })

  it('should return only zero for the recursive sequence at index zero', () => {
    expect(FibonacciRecursive(0)).toEqual([0])
  })

  it.each([
    [0, [0]],
    [1, [0, 1]],
    [-1, [0, 1]]
  ])('should stop the iterative DP sequence at index %i', (n, expected) => {
    expect(FibonacciDpWithoutRecursion(n)).toEqual(expected)
  })

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
  it.each([
    [0, 0],
    [1, 1],
    [15, 610]
  ])(
    'should calculate the correct Fibonacci number for n = %i',
    (n, expected) => {
      expect(FibonacciUsingFormula(n)).toBe(expected)
    }
  )
})
