import { standardDeviation } from '../StandardDeviation.js'

describe('standardDeviation', () => {
  test('standardDeviation([2,4,4,4,5,5,7,9]) returns 2', () => {
    expect(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2)
  })

  test('standardDeviation([1, 2, 3]) returns ~0.816', () => {
    expect(standardDeviation([1, 2, 3])).toBeCloseTo(0.816)
  })

  test('standardDeviation of identical elements returns 0', () => {
    expect(standardDeviation([5, 5, 5, 5])).toBe(0)
  })

  test('standardDeviation single element returns 0', () => {
    expect(standardDeviation([42])).toBe(0)
  })

  test('standardDeviation works with negative numbers', () => {
    expect(standardDeviation([-2, -1, 0, 1, 2])).toBeCloseTo(1.414)
  })

  test('standardDeviation works with decimals', () => {
    expect(standardDeviation([1.5, 2.5, 3.5])).toBeCloseTo(0.816)
  })

  test('throws TypeError for empty array', () => {
    expect(() => standardDeviation([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => standardDeviation('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => standardDeviation([1, 'two', 3])).toThrow(TypeError)
  })
})
