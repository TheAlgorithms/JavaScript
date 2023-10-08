import { merge, mergeSort } from '../MergeSort'

describe('merge', () => {
  it('should merge arrays correctly', () => {
    expect(merge([5, 4], [1, 2, 3])).toEqual([1, 2, 3, 5, 4])
    expect(merge([], [1, 2])).toEqual([1, 2])
    expect(merge([1, 2, 3], [1])).toEqual([1, 1, 2, 3])
    expect(merge([], [])).toEqual([])
  })
})

describe('MergeSort', () => {
  it('should work for empty arrays', () => {
    expect(mergeSort([])).toEqual([])
  })

  it('should sort arrays correctly', () => {
    expect(mergeSort([5, 4])).toEqual([4, 5])
    expect(mergeSort([8, 4, 10, 15, 9])).toEqual([4, 8, 9, 10, 15])
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })
})
