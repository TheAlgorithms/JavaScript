import { insertionSortAlternativeImplementation } from '../InsertionSort'

describe('insertionSortAlternativeImplementation', () => {
  it('expects to work with empty array', () => {
    expect(insertionSortAlternativeImplementation([])).toEqual([])
  })

  it('expects to return input array when array.length is less than 2', () => {
    const input = [3]
    expect(insertionSortAlternativeImplementation(input)).toEqual(input)
  })

  it('expects to return array sorted in ascending order', () => {
    expect(insertionSortAlternativeImplementation([14, 11])).toEqual([11, 14])
    expect(insertionSortAlternativeImplementation([21, 22, 23])).toEqual([
      21, 22, 23
    ])
    expect(insertionSortAlternativeImplementation([1, 3, 2, 3, 7, 2])).toEqual([
      1, 2, 2, 3, 3, 7
    ])
    expect(insertionSortAlternativeImplementation([1, 6, 4, 5, 9, 2])).toEqual([
      1, 2, 4, 5, 6, 9
    ])
  })
})
