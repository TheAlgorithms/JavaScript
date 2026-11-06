import { difference } from '../Difference.js'

describe('difference', () => {
  test('difference([1,2,3],[2,3,4]) returns [1]', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
  })

  test('difference([1,2,3],[1,2,3]) returns []', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([])
  })

  test('difference([1,2,3],[]) returns [1,2,3]', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  test('difference([],[1,2,3]) returns []', () => {
    expect(difference([], [1, 2, 3])).toEqual([])
  })

  test('difference([1,2,3],[4,5,6]) returns [1,2,3]', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3])
  })

  test('difference works with strings', () => {
    expect(difference(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a'])
  })

  test('difference does not mutate original arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    difference(arr1, arr2)
    expect(arr1).toEqual([1, 2, 3])
    expect(arr2).toEqual([2, 3, 4])
  })

  test('difference keeps duplicates from arr1 not in arr2', () => {
    expect(difference([1, 1, 2, 3], [2, 3])).toEqual([1, 1])
  })

  test('throws TypeError for non-array first input', () => {
    expect(() => difference('123', [1, 2])).toThrow(TypeError)
  })

  test('throws TypeError for non-array second input', () => {
    expect(() => difference([1, 2], '123')).toThrow(TypeError)
  })
})
