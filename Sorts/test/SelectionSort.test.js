import { selectionSort } from '../SelectionSort'

describe('selectionSort', () => {
  it('expects to return the array sorted in ascending order', () => {
    const toSort = [5, 6, 7, 8, 1, 2, 12, 14]
    const expected = [1, 2, 5, 6, 7, 8, 12, 14]

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
