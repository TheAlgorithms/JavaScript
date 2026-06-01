import { maximumNonAdjacentSum } from '../MaxNonAdjacentSum'

describe('maximumNonAdjacentSum', () => {
  it('should return 0 for an empty array', () => {
    expect(maximumNonAdjacentSum([])).toBe(0)
  })

  it('should return the single element for a one-element array', () => {
    expect(maximumNonAdjacentSum([5])).toBe(5)
  })

  it('should compute the maximum non-adjacent sum', () => {
    expect(maximumNonAdjacentSum([1, 2, 3])).toBe(4)
    expect(maximumNonAdjacentSum([1, 5, 3, 7, 2, 2, 6])).toBe(18)
    expect(maximumNonAdjacentSum([499, 500, -3, -7, -2, -2, -6])).toBe(500)
  })

  it('should return 0 when all elements are negative', () => {
    expect(maximumNonAdjacentSum([-1, -5, -3, -7, -2, -2, -6])).toBe(0)
  })
})
