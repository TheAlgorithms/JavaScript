import {
  selectionSort
} from '../SelectionSort'

describe('selectionSortAlternativeImplementation', () => {
  it('expects to work with empty array', () => {
    expect(selectionSort([])).toEqual([])
  })

  it('expects to return input array when array.length is less than 2', () => {
    const input = [3]
    expect(selectionSort(input)).toEqual(input)
  })
})

describe('selectionSort', () => {
  it('expects to return the array sorted in ascending order', () => {
    const toSort = [5, 6, 7, 8, 1, 2, 12, 14]
    const expected = [1, 2, 5, 6, 7, 8, 12, 14]

    expect(selectionSort(toSort)).toEqual(expected)
    expect(selectionSort(toSort)).toEqual(expected)
  })

  it('expects to throw if it is not a valid array', () => {
    expect(() => selectionSort('abc')).toThrow('Given input is not an array')
    expect(() => selectionSort(123)).toThrow('Given input is not an array')
    expect(() => selectionSort({})).toThrow('Given input is not an array')
    expect(() => selectionSort(null)).toThrow('Given input is not an array')
    expect(() => selectionSort()).toThrow('Given input is not an array')
  })

  it('expects to throw if one of the elements in the array is not a number', () => {
    expect(() => selectionSort([1, 'x', 2])).toThrow(
      'One of the items in your array is not a number'
    )
  })
})
