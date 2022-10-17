import { fastFibonacci } from '../FastFibonacciNumber'

describe('Testing FibonacciNumber', () => {
  const errorCases = ['0', '12', true]

  test.each(errorCases)('throws an error if %p is invalid', (input) => {
    expect(() => {
      fastFibonacci(input)
    }).toThrow()
  })

  const testCases = [
    [0, 0],
    [1, 1],
    [10, 55],
    [25, 75025],
    [40, 102334155]
  ]

  test.each(testCases)('if input is %i it returns %i', (input, expected) => {
    expect(fastFibonacci(input)).toBe(expected)
  })
})
