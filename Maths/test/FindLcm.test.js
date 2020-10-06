import { findLcm } from '../FindLcm'

describe('findLcm', () => {
  it('should throw a statement for values less than 1', () => {
    expect(findLcm(0, 0)).toBe('Please enter values greater than zero.')
  })

  it('should throw a statement for one value less than 1', () => {
    expect(findLcm(1, 0)).toBe('Please enter values greater than zero.')
    expect(findLcm(0, 1)).toBe('Please enter values greater than zero.')
  })

  it('should return an error for values non-integer values', () => {
    expect(findLcm(4.564, 7.39)).toBe('Please enter whole numbers.')
  })

  it('should return the LCM of two given integers', () => {
    expect(findLcm(27, 36)).toBe(108)
  })
})
