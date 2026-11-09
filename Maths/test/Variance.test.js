import { variance } from '../Variance.js'

describe('variance', () => {
  test('variance([2,4,4,4,5,5,7,9]) returns 4', () => {
    expect(variance([2, 4, 4, 4, 5, 5, 7, 9])).toBeCloseTo(4)
  })

  test('variance([1,2,3]) returns ~0.667', () => {
    expect(variance([1, 2, 3])).toBeCloseTo(0.667, 2)
  })

  test('variance of identical elements returns 0', () => {
    expect(variance([5, 5, 5, 5])).toBe(0)
  })

  test('variance single element returns 0', () => {
    expect(variance([42])).toBe(0)
  })

  test('variance works with negative numbers', () => {
    expect(variance([-2, -1, 0, 1, 2])).toBeCloseTo(2)
  })

  test('variance([1,2,3,4,5]) returns 2', () => {
    expect(variance([1, 2, 3, 4, 5])).toBeCloseTo(2)
  })

  test('variance does not mutate original array', () => {
    const arr = [1, 2, 3]
    variance(arr)
    expect(arr).toEqual([1, 2, 3])
  })

  test('throws TypeError for empty array', () => {
    expect(() => variance([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => variance('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => variance([1, 'two', 3])).toThrow(TypeError)
  })
})
