import { powLinear, powFaster } from '../Pow'

describe('Testing powLinear function', () => {
  it('should return 1 for numbers with exponent 0', () => {
    expect(powLinear(2, 0)).toBe(1)
  })

  it('should return 0.5 for numbers with exponent -1', () => {
    expect(powLinear(2, -1)).toBe(0.5)
  })

  it('should return 0 for numbers with base 0', () => {
    expect(powLinear(0, 23)).toBe(0)
  })

  it('should return the base to the exponent power', () => {
    expect(powLinear(24, 4)).toBe(331776)
  })
})

describe('Testing powFaster function', () => {
  it('should return 1 for numbers with exponent 0', () => {
    expect(powFaster(2, 0)).toBe(1)
  })

  it('should return 0.5 for numbers with exponent -1', () => {
    expect(powFaster(2, -1)).toBe(0.5)
  })

  it('should return 0 for numbers with base 0', () => {
    expect(powFaster(0, 23)).toBe(0)
  })

  it('should return the base to the exponent power', () => {
    expect(powFaster(24, 4)).toBe(331776)
  })

  it('should return the result in O(lonN) complexity', () => {
    expect(powFaster(2, 64)).toBe(18446744073709552000) // execution time Math.log2(64) -> 6
  })
})
