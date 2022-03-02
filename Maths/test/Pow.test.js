import { powOn } from '../Pow'

describe('Testing PowOn', () => {
  it('should return 1 for numbers with exponent 0', () => {
    expect(powOn(2, 0)).toBe(1)
  })

  it('should return 0.5 for numbers with exponent -1', () => {
    expect(powOn(2, -1)).toBe(0.5)
  })

  it('should return 0 for numbers with base 0', () => {
    expect(powOn(0, 23)).toBe(0)
  })

  it('should return the base to the exponent power', () => {
    expect(powOn(24, 4)).toBe(331776)
  })
})
