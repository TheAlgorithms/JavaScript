import { findMedian } from '../FindMedian.js'

describe('findMedian', () => {
  test('findMedian([1, 2, 3]) returns 2', () => {
    expect(findMedian([1, 2, 3])).toBe(2)
  })

  test('findMedian([1, 2, 3, 4]) returns 2.5', () => {
    expect(findMedian([1, 2, 3, 4])).toBe(2.5)
  })

  test('findMedian([5, 3, 1, 4, 2]) returns 3', () => {
    expect(findMedian([5, 3, 1, 4, 2])).toBe(3)
  })

  test('findMedian single element returns that element', () => {
    expect(findMedian([42])).toBe(42)
  })

  test('findMedian([1, 1, 1]) returns 1', () => {
    expect(findMedian([1, 1, 1])).toBe(1)
  })

  test('findMedian works with negative numbers', () => {
    expect(findMedian([-3, -1, -2])).toBe(-2)
  })

  test('findMedian works with decimals', () => {
    expect(findMedian([1.5, 2.5, 3.5])).toBe(2.5)
  })

  test('findMedian does not mutate original array', () => {
    const arr = [3, 1, 2]
    findMedian(arr)
    expect(arr).toEqual([3, 1, 2])
  })

  test('throws TypeError for empty array', () => {
    expect(() => findMedian([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => findMedian('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => findMedian([1, 'two', 3])).toThrow(TypeError)
  })
})
