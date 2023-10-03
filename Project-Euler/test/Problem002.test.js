import { EvenFibonacci } from '../Problem002'

describe('Even Fibonacci numbers', () => {
  it('should throw error when limit is less than 1', () => {
    expect(() => EvenFibonacci(-1)).toThrowError(
      "Fibonacci sequence limit can't be less than 1"
    )
  })
  test('when limit is greater than 0', () => {
    expect(EvenFibonacci(40)).toBe(44)
  })
  // Project Euler Condition Check
  test('when limit is 4 million', () => {
    expect(EvenFibonacci(4e6)).toBe(4613732)
  })
})
