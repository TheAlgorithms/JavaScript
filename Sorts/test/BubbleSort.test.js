import { alternativeBubbleSort, bubbleSort } from '../BubbleSort'

describe('bubbleSort', () => {
  it('should sort arrays correctly', () => {
    expect(bubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
    expect(bubbleSort([])).toEqual([])
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(bubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
      1, 2, 5, 6, 7, 8, 12, 14
    ])
    expect(bubbleSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9])
    expect(bubbleSort([20, 30, 40])).toEqual([20, 30, 40])
    expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3])
    expect(bubbleSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100])
    expect(bubbleSort([10, 9, 11])).toEqual([9, 10, 11])
    expect(bubbleSort([10, 9, 12])).toEqual([9, 10, 12])
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
    expect(bubbleSort([10, 9, 8])).toEqual([8, 9, 10])
  })
})

describe('alternativeBubbleSort', () => {
  it('should sort arrays correctly', () => {
    expect(alternativeBubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
    expect(alternativeBubbleSort([])).toEqual([])
    expect(alternativeBubbleSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(alternativeBubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
      1, 2, 5, 6, 7, 8, 12, 14
    ])
  })
})
