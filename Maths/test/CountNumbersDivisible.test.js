import { countNumbersDivisible } from '../CountNumbersDivisible'

describe('Count the numbers divisible', () => {
  test.each([
    [1, 20, 6, 3],
    [6, 15, 3, 4],
    [25, 100, 30, 3],
    [25, 70, 10, 5],
    [1, 23, 30, 0]
  ])(
    'Total number(s) divisible between %i to %i by %i is/are %i',
    (n1, n2, m, expected) => {
      expect(countNumbersDivisible(n1, n2, m)).toBe(expected)
    }
  )

  test.each([
    ['test', 23, 10, 'Invalid input, please pass only numbers'],
    [
      44,
      30,
      10,
      'Invalid number range, please provide numbers such that num1 < num2'
    ]
  ])(
    'Should throw an error for input %i, %i, %i, %i',
    (n1, n2, m, expected) => {
      expect(() => countNumbersDivisible(n1, n2, m)).toThrowError(expected)
    }
  )
})
