import { isDivisible } from '../IsDivisible'

describe('isDivisible', () => {
  const testCases = [
    [0, 1, true],
    [0, 2, true],
    [1, 1, true],
    [1, 2, false],
    [2, 1, true],
    [4, 4, true],
    [16, 4, true],
    [36978235, 5, true],
    [36978235, 4, false],
    [4.5, 1.5, true],
    [4.5, 1.2, false],
    [5, 0, false],
    [5, -0, false]
  ]

  test.each(testCases)(
    'if parameters are (%i, %i) it returns %p',
    (dividend, divisor, expected) => {
      expect(isDivisible(dividend, divisor)).toBe(expected)
    }
  )

  const errorCases = [
    [NaN, NaN],
    [NaN, 1],
    [1, NaN],
    ['1', 1],
    [1, '1'],
    [1, true],
    [false, 2]
  ]

  test.each(errorCases)(
    'throws an error if parameters are (%p, %p)',
    (dividend, divisor) => {
      expect(() => {
        isDivisible(dividend, divisor)
      }).toThrow()
    }
  )
})
