import { union } from '../Union.js'

describe('union', () => {
  test('union([1,2,3],[2,3,4]) returns [1,2,3,4]', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  test('union([1,2],[3,4]) returns [1,2,3,4]', () => {
    expect(union([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
  })

  test('union([1,1,2],[2,3]) returns [1,2,3]', () => {
    expect(union([1, 1, 2], [2, 3])).toEqual([1, 2, 3])
  })

  test('union with empty first array returns arr2 values', () => {
    expect(union([], [1, 2, 3])).toEqual([1, 2, 3])
  })

  test('union with empty second array returns arr1 values', () => {
    expect(union([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  test('union with identical arrays returns same values', () => {
    expect(union([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3])
  })

  test('union works with strings', () => {
    expect(union(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c'])
  })

  test('union does not mutate original arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    union(arr1, arr2)
    expect(arr1).toEqual([1, 2, 3])
    expect(arr2).toEqual([2, 3, 4])
  })

  test('throws TypeError for non-array first input', () => {
    expect(() => union('123', [1, 2])).toThrow(TypeError)
  })

  test('throws TypeError for non-array second input', () => {
    expect(() => union([1, 2], '123')).toThrow(TypeError)
  })
})
