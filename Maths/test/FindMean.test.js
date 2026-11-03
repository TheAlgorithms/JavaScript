import { findMean } from '../FindMean.js'

describe('findMean', () => {
  test('findMean([1, 2, 3]) returns 2', () => {
    expect(findMean([1, 2, 3])).toBe(2)
  })

  test('findMean([1, 2, 3, 4]) returns 2.5', () => {
    expect(findMean([1, 2, 3, 4])).toBe(2.5)
  })

  test('findMean([10, 20, 30]) returns 20', () => {
    expect(findMean([10, 20, 30])).toBe(20)
  })

  test('findMean single element returns that element', () => {
    expect(findMean([42])).toBe(42)
  })

  test('findMean works with negative numbers', () => {
    expect(findMean([-3, -1, -2])).toBe(-2)
  })

  test('findMean works with decimals', () => {
    expect(findMean([1.5, 2.5, 3.0])).toBeCloseTo(2.333)
  })

  test('findMean([0, 0, 0]) returns 0', () => {
    expect(findMean([0, 0, 0])).toBe(0)
  })

  test('findMean does not mutate original array', () => {
    const arr = [3, 1, 2]
    findMean(arr)
    expect(arr).toEqual([3, 1, 2])
  })

  test('throws TypeError for empty array', () => {
    expect(() => findMean([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => findMean('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => findMean([1, 'two', 3])).toThrow(TypeError)
  })
})
