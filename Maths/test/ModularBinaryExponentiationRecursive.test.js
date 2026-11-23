import { modularBinaryExponentiation } from '../ModularBinaryExponentiationRecursive'

describe('modularBinaryExponentiation', () => {
  it.each([
    [9007199254740991, 3, 97, 12],
    [2147483646, 2, 2147483647, 1],
    [123456789, 12345, 1000000007, 614455772],
    [2, 0, 1, 0]
  ])('should compute %i ** %i modulo %i exactly', (a, n, m, expected) => {
    expect(modularBinaryExponentiation(a, n, m)).toBe(expected)
  })

  it('should return the binary exponentiation', () => {
    expect(modularBinaryExponentiation(2, 10, 17)).toBe(4)
  })
})
