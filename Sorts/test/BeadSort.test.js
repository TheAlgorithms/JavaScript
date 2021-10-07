import { beadSort } from '../BeadSort'

describe('BeadSort', () => {
  it('should sort arrays correctly', () => {
    expect(beadSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    expect(beadSort([7, 9, 4, 3, 5])).toEqual([3, 4, 5, 7, 9])
  })

  it('should throw a RangeError when the array contains negative integers', () => {
    expect(() => beadSort([-1, 5, 8, 4, 3, 19])).toThrow(RangeError)
  })
})
