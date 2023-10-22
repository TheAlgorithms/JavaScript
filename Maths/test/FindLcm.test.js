import { findLcm, findLcmWithHcf } from '../FindLcm'

describe('findLcm', () => {
  it('should throw a statement for values less than 1', () => {
    expect(() => {
      findLcm(0, 0)
    }).toThrow(Error)
  })

  it('should throw a statement for one value less than 1', () => {
    expect(() => {
      findLcm(1, 0)
    }).toThrow(Error)
    expect(() => {
      findLcm(0, 1)
    }).toThrow(Error)
  })

  it('should return an error for values non-integer values', () => {
    expect(() => {
      findLcm(4.564, 7.39)
    }).toThrow(Error)
  })

  it('should return the LCM of two given integers', () => {
    expect(findLcm(27, 36)).toBe(108)
  })
})

describe('findLcmWithHcf', () => {
  it('should throw a statement for values less than 1', () => {
    expect(() => {
      findLcmWithHcf(0, 0)
    }).toThrow(Error)
  })

  it('should throw a statement for one value less than 1', () => {
    expect(() => {
      findLcmWithHcf(1, 0)
    }).toThrow(Error)
    expect(() => {
      findLcmWithHcf(0, 1)
    }).toThrow(Error)
  })

  it('should return an error for values non-integer values', () => {
    expect(() => {
      findLcmWithHcf(4.564, 7.39)
    }).toThrow(Error)
  })

  it('should return the LCM of two given integers', () => {
    expect(findLcmWithHcf(27, 36)).toBe(108)
  })
})
