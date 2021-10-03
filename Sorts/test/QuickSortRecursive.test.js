import { quickSort } from '../QuickSortRecursive'

describe('QuickSortRecursive | Partition In Place Method', () => {
  it('Expectedly, throw some error if we pass a non-array input', () => {
    expect(() => quickSort('xyz', 0, 2)).toThrow('Please input a valid list or array.')
    expect(() => quickSort(null, 0, 4)).toThrow('Please input a valid list or array.')
    expect(() => quickSort(55, 0, 2)).toThrow('Please input a valid list or array.')
  })

  it('Expectedly, the quickSort method will sort the unsorted list in ascending order', () => {
    const unSortArray = [5, 9, 3, 4, 6, 2, 0, 1, 7, 8]
    const sortedExpectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(quickSort(unSortArray, 0, unSortArray.length - 1)).toEqual(sortedExpectedArray)
  })

  it('Expectedly, the quickSort method will arrange the list of character values in dictionary order.', () => {
    const unSortList = ['d', 'e', 'c', 'a', 'f', 'b']
    const sortedExpectedList = ['a', 'b', 'c', 'd', 'e', 'f']
    expect(quickSort(unSortList, 0, unSortList.length - 1)).toEqual(sortedExpectedList)
  })
})
