import { powLogarithmic } from '../PowLogarithmic'

describe('PowLogarithmic', () => {
  it('should return 1 for numbers with exponent 0', () => {
    expect(powLogarithmic(2, 0)).toBe(1)
  })

  it('should return 0 for numbers with base 0', () => {
    expect(powLogarithmic(0, 23)).toBe(0)
  })

  it('should return the base to the exponent power', () => {
    expect(powLogarithmic(24, 4)).toBe(331776)
  })
})
