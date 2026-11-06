import { flatten } from '../Flatten.js'

describe('flatten', () => {
  test('flatten([1, 2, 3]) returns [1, 2, 3]', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('flatten([1, [2, 3]]) returns [1, 2, 3]', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
  })

  test('flatten deeply nested array', () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
  })

  test('flatten with depth 1', () => {
    expect(flatten([1, [2, [3]]], 1)).toEqual([1, 2, [3]])
  })

  test('flatten with depth 0 returns same array', () => {
    expect(flatten([1, [2, [3]]], 0)).toEqual([1, [2, [3]]])
  })

  test('flatten empty array returns empty array', () => {
    expect(flatten([])).toEqual([])
  })

  test('flatten with mixed types', () => {
    expect(flatten([1, ['a', [true, [null]]]])).toEqual([1, 'a', true, null])
  })

  test('flatten does not mutate original array', () => {
    const arr = [1, [2, [3]]]
    flatten(arr)
    expect(arr).toEqual([1, [2, [3]]])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => flatten('123')).toThrow(TypeError)
  })

  test('throws TypeError for invalid depth', () => {
    expect(() => flatten([1, 2], 1.5)).toThrow(TypeError)
  })
})
