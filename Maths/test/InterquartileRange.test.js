import { interquartileRange } from '../InterquartileRange.js'

describe('interquartileRange', () => {
  test('interquartileRange([1,2,3,4,5]) returns 2', () => {
    expect(interquartileRange([1, 2, 3, 4, 5])).toBeCloseTo(2)
  })

  test('interquartileRange([1,2,3,4,5,6,7]) returns 3', () => {
    expect(interquartileRange([1, 2, 3, 4, 5, 6, 7])).toBeCloseTo(3)
  })

  test('interquartileRange identical elements returns 0', () => {
    expect(interquartileRange([5, 5, 5, 5])).toBe(0)
  })

  test('interquartileRange works with unsorted array', () => {
    expect(interquartileRange([5, 3, 1, 4, 2])).toBeCloseTo(2)
  })

  test('interquartileRange works with negative numbers', () => {
    expect(interquartileRange([-3, -2, -1, 0, 1, 2, 3])).toBeCloseTo(3)
  })

  test('interquartileRange does not mutate original array', () => {
    const arr = [5, 3, 1, 4, 2]
    interquartileRange(arr)
    expect(arr).toEqual([5, 3, 1, 4, 2])
  })

  test('throws TypeError for empty array', () => {
    expect(() => interquartileRange([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => interquartileRange('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => interquartileRange([1, 'two', 3])).toThrow(TypeError)
  })
})
