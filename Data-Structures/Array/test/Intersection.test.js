import { intersection } from '../Intersection.js'

describe('intersection', () => {
  test('intersection([1,2,3],[2,3,4]) returns [2,3]', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
  })

  test('intersection([1,2],[3,4]) returns []', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([])
  })

  test('intersection([1,1,2],[1,2,2]) returns [1,2]', () => {
    expect(intersection([1, 1, 2], [1, 2, 2])).toEqual([1, 2])
  })

  test('intersection with empty first array returns []', () => {
    expect(intersection([], [1, 2, 3])).toEqual([])
  })

  test('intersection with empty second array returns []', () => {
    expect(intersection([1, 2, 3], [])).toEqual([])
  })

  test('intersection with identical arrays returns same values', () => {
    expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3])
  })

  test('intersection works with strings', () => {
    expect(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c'])
  })

  test('intersection does not mutate original arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    intersection(arr1, arr2)
    expect(arr1).toEqual([1, 2, 3])
    expect(arr2).toEqual([2, 3, 4])
  })

  test('throws TypeError for non-array first input', () => {
    expect(() => intersection('123', [1, 2])).toThrow(TypeError)
  })

  test('throws TypeError for non-array second input', () => {
    expect(() => intersection([1, 2], '123')).toThrow(TypeError)
  })
})
