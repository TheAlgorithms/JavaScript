import { parityOutlier } from '../ParityOutlier'

describe('Testing parityOutlier function', () => {
  it('should return the odd number in an array of even numbers', () => {
    expect(parityOutlier([1, 2, 16, -8848, 5126])).toBe(1)
  })

  it('should return the even number in an array of odd numbers', () => {
    expect(parityOutlier([177, 5, 76, 1919])).toBe(76)
  })

  it('should, if the given array has only an odd and an even number, return the odd outlier', () => {
    expect(parityOutlier([1, 2])).toBe(1)
    expect(parityOutlier([4, 3])).toBe(3)
  })

  it('should return null if the given array is empty, contains only one integer, contains non-interger elements or does not have a parity outlier', () => {
    expect(parityOutlier([])).toBe(null)
    expect(parityOutlier([2])).toBe(null)
    expect(parityOutlier([2, {}, 5, 'GitHub'])).toBe(null)
    expect(parityOutlier([1, 3, 5, 7, 9])).toBe(null)
    expect(parityOutlier([0, 2, 4, 6, 8])).toBe(null)
    expect(parityOutlier([1, 3, 5, 7, 2, 4, 6, 8])).toBe(null)
  })
})
