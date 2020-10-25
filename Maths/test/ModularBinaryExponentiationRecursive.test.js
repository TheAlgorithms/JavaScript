import { modularBinaryExponentiation } from '../ModularBinaryExponentiationRecursive'

describe('modularBinaryExponentiation', () => {
  it('should return the binary exponentiation', () => {
    expect(modularBinaryExponentiation(2, 10, 17)).toBe(4)
  })
})
