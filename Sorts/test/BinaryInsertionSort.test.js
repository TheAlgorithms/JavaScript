import { binaryInsertionSort } from '../BinaryInsertionSort'

describe('BinaryInsertionSort', () => {
  it('should sort arrays correctly', () => {
    expect(binaryInsertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    expect(binaryInsertionSort([7, 9, 4, 3, 5])).toEqual([3, 4, 5, 7, 9])
  })
})
