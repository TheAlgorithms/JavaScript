import { twinPrime } from '../TwinPrime.js'

describe('twinPrime', () => {
  it.each([
    [3, 5],
    [5, 7],
    [7, -1],
    [4, -1],
    [17, 19]
  ])('for input %i returns %i', (n, expected) => {
    expect(twinPrime(n)).toBe(expected)
  })
})
