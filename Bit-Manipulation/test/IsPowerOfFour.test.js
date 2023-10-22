import { isPowerOfFour } from '../IsPowerofFour'

describe('IsPowerOfFour', () => {
  it.each([
    [0, false],
    [4, true],
    [16, true],
    [12, false],
    [64, true],
    [-64, false]
  ])('should return the number is power of four or not', (n, expected) => {
    expect(isPowerOfFour(n)).toBe(expected)
  })
})
