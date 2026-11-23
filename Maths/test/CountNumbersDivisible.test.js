import { countNumbersDivisible } from '../CountNumbersDivisible'

describe('Count the numbers divisible', () => {
  test.each([
    [2, 3, 2, 1],
    [0, 0, 3, 1],
    [0, 2, 3, 1],
    [-6, -2, 2, 3],
    [-6, -2, -2, 3]
  ])(
    'should count the inclusive range [%i, %i] for divisor %i',
    (a, b, m, n) => {
      expect(countNumbersDivisible(a, b, m)).toBe(n)
    }
  )

  test('should agree with direct enumeration of small integer ranges', () => {
    for (let lower = -5; lower <= 5; lower++) {
      for (let upper = lower; upper <= 5; upper++) {
        for (const divisor of [-5, -2, -1, 1, 2, 5]) {
          const values = Array.from(
            { length: upper - lower + 1 },
            (_, index) => lower + index
          )
          const expected = values.filter(
            (value) => value % divisor === 0
          ).length
          expect(countNumbersDivisible(lower, upper, divisor)).toBe(expected)
        }
      }
    }
  })

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
