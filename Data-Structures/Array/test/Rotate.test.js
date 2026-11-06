import { rotate } from '../Rotate.js'

describe('rotate', () => {
  test('rotate([1,2,3,4,5], 2) returns [4,5,1,2,3]', () => {
    expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])
  })

  test('rotate([1,2,3], 1) returns [3,1,2]', () => {
    expect(rotate([1, 2, 3], 1)).toEqual([3, 1, 2])
  })

  test('rotate([1,2,3], 3) returns [1,2,3]', () => {
    expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3])
  })

  test('rotate([1,2,3], 0) returns [1,2,3]', () => {
    expect(rotate([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  test('rotate with k larger than array length', () => {
    expect(rotate([1, 2, 3], 4)).toEqual([3, 1, 2])
  })

  test('rotate with negative k rotates left', () => {
    expect(rotate([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2])
  })

  test('rotate empty array returns empty array', () => {
    expect(rotate([], 3)).toEqual([])
  })

  test('rotate single element returns same array', () => {
    expect(rotate([1], 5)).toEqual([1])
  })

  test('rotate does not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5]
    rotate(arr, 2)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => rotate('123', 2)).toThrow(TypeError)
  })

  test('throws TypeError for float k', () => {
    expect(() => rotate([1, 2, 3], 1.5)).toThrow(TypeError)
  })
})
