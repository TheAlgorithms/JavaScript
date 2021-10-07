import { quickSort } from '../QuickSort'

describe('QuickSort', () => {
  it('should work for empty arrays', () => {
    expect(quickSort([])).toEqual([])
  })

  it('should sort arrays correctly', () => {
    expect(quickSort([5, 4, 3, 10, 2, 1])).toEqual([1, 2, 3, 4, 5, 10])
    expect(quickSort([5, 4])).toEqual([4, 5])
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(quickSort([0, 5, 3, 2, 2])).toEqual([0, 2, 2, 3, 5])
  })
})
