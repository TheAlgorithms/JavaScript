import { zip } from '../Zip.js'

describe('zip', () => {
  test("zip([1,2],['a','b']) returns [[1,'a'],[2,'b']]", () => {
    expect(zip([1, 2], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b']
    ])
  })

  test('zip three arrays', () => {
    expect(zip([1, 2], ['a', 'b'], [true, false])).toEqual([
      [1, 'a', true],
      [2, 'b', false]
    ])
  })

  test('zip truncates to shortest array', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b']
    ])
  })

  test('zip single array returns array of single element arrays', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]])
  })

  test('zip with empty array returns empty array', () => {
    expect(zip([], [1, 2, 3])).toEqual([])
  })

  test('zip does not mutate original arrays', () => {
    const arr1 = [1, 2]
    const arr2 = ['a', 'b']
    zip(arr1, arr2)
    expect(arr1).toEqual([1, 2])
    expect(arr2).toEqual(['a', 'b'])
  })

  test('throws TypeError when no arguments provided', () => {
    expect(() => zip()).toThrow(TypeError)
  })

  test('throws TypeError for non-array argument', () => {
    expect(() => zip([1, 2], 'ab')).toThrow(TypeError)
  })
})
