import { pow } from '../Pow'

describe('Pow', () => {
  it('should return 1 for numbers with exponent 0', () => {
    expect(pow(2, 0)).toBe(1)
  })

  it('should return 0 for numbers with base 0', () => {
    expect(pow(0, 23)).toBe(0)
  })

  it('should return the base to the exponent power', () => {
    expect(pow(24, 4)).toBe(331776)
  })
})
