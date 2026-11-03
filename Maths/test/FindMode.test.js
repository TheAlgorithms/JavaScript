import { findMode } from '../FindMode.js'

describe('findMode', () => {
  test('findMode([1, 2, 2, 3]) returns [2]', () => {
    expect(findMode([1, 2, 2, 3])).toEqual([2])
  })

  test('findMode([1, 1, 2, 2]) returns [1, 2]', () => {
    expect(findMode([1, 1, 2, 2])).toEqual([1, 2])
  })

  test('findMode([1, 2, 3]) returns [1, 2, 3]', () => {
    expect(findMode([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('findMode single element returns that element', () => {
    expect(findMode([5])).toEqual([5])
  })

  test('findMode([3, 3, 3]) returns [3]', () => {
    expect(findMode([3, 3, 3])).toEqual([3])
  })

  test('findMode works with negative numbers', () => {
    expect(findMode([-1, -1, 2])).toEqual([-1])
  })

  test('findMode([1, 2, 2, 3, 3]) returns [2, 3]', () => {
    expect(findMode([1, 2, 2, 3, 3])).toEqual([2, 3])
  })

  test('throws TypeError for empty array', () => {
    expect(() => findMode([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => findMode('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => findMode([1, 'two', 3])).toThrow(TypeError)
  })
})
