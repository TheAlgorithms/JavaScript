import { percentile } from '../Percentile.js'

describe('percentile', () => {
  test('percentile([1,2,3,4,5], 50) returns 3', () => {
    expect(percentile([1, 2, 3, 4, 5], 50)).toBe(3)
  })

  test('percentile([1,2,3,4,5], 0) returns 1', () => {
    expect(percentile([1, 2, 3, 4, 5], 0)).toBe(1)
  })

  test('percentile([1,2,3,4,5], 100) returns 5', () => {
    expect(percentile([1, 2, 3, 4, 5], 100)).toBe(5)
  })

  test('percentile([1,2,3,4,5], 75) returns 4', () => {
    expect(percentile([1, 2, 3, 4, 5], 75)).toBe(4)
  })

  test('percentile([1,2,3,4,5], 25) returns 2', () => {
    expect(percentile([1, 2, 3, 4, 5], 25)).toBe(2)
  })

  test('percentile works with unsorted array', () => {
    expect(percentile([5, 3, 1, 4, 2], 50)).toBe(3)
  })

  test('percentile single element returns that element', () => {
    expect(percentile([5], 50)).toBe(5)
  })

  test('percentile does not mutate original array', () => {
    const arr = [5, 3, 1, 4, 2]
    percentile(arr, 50)
    expect(arr).toEqual([5, 3, 1, 4, 2])
  })

  test('throws TypeError for empty array', () => {
    expect(() => percentile([], 50)).toThrow(TypeError)
  })

  test('throws TypeError for invalid percentile > 100', () => {
    expect(() => percentile([1, 2, 3], 101)).toThrow(TypeError)
  })

  test('throws TypeError for invalid percentile < 0', () => {
    expect(() => percentile([1, 2, 3], -1)).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => percentile('123', 50)).toThrow(TypeError)
  })
})
