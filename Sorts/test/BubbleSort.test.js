import { alternativeBubbleSort, bubbleSort } from '../BubbleSort'

describe('bubbleSort', () => {
  it('should sort arrays correctly', () => {
    expect(bubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
    expect(bubbleSort([])).toEqual([])
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(bubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([1, 2, 5, 6, 7, 8, 12, 14])
  })
})

describe('alternativeBubbleSort', () => {
  it('should sort arrays correctly', () => {
    expect(alternativeBubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
    expect(alternativeBubbleSort([])).toEqual([])
    expect(alternativeBubbleSort([1, 2, 3])).toEqual([1, 2, 3])
    expect(alternativeBubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([1, 2, 5, 6, 7, 8, 12, 14])
  })
})
