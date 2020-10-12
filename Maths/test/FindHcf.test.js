import { findHCF } from '../FindHcf'

describe('findHCF', () => {
  it('should throw a statement for values less than 1', () => {
    expect(findHCF(0, 0)).toBe('Please enter values greater than zero.')
  })

  it('should throw a statement for one value less than 1', () => {
    expect(findHCF(0, 1)).toBe('Please enter values greater than zero.')
    expect(findHCF(1, 0)).toBe('Please enter values greater than zero.')
  })

  it('should return an error for values non-integer values', () => {
    expect(findHCF(2.24, 4.35)).toBe('Please enter whole numbers.')
  })

  it('should return the HCF of two given integers', () => {
    expect(findHCF(27, 36)).toBe(9)
  })
})
