import { simplifiedWiggleSort } from '../SimplifiedWiggleSort.js'

describe('simplified wiggle sort', () => {
  test('given array of symbols [\'b\', \'a\', \'c\'] return wiggle sorted array [\'a\', \'c\', \'b\']', () => {
    const src = ['a', 'b', 'c']
    expect(simplifiedWiggleSort(src)).toEqual(['a', 'c', 'b'])
  })

  test('wiggle sort with duplicates, even array', () => {
    const src = [2, 2, 1, 3]
    expect(simplifiedWiggleSort(src)).toEqual([1, 3, 2, 2])
  })

  test('wiggle sort with duplicates, odd array', () => {
    const src = [1, 1, 1, 2, 4]
    expect(simplifiedWiggleSort(src)).toEqual([1, 4, 1, 2, 1])
  })

  test('simplified wiggle sort for [3, 5, 6, 1]', () => {
    const src = [3, 5, 6, 1]
    expect(simplifiedWiggleSort(src)).toEqual([3, 6, 1, 5])
  })

  test('simplified wiggle sort for [3, 3, 5, 1] (equal values next to ' +
    'each other can not be avoided in simplified version)', () => {
    const src = [3, 3, 5, 1]
    expect(simplifiedWiggleSort(src)).toEqual([1, 5, 3, 3])
  })
})
