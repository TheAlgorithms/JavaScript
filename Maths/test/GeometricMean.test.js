import { geometricMean } from '../GeometricMean.js'

describe('geometricMean', () => {
  test('geometricMean([2, 8]) returns 4', () => {
    expect(geometricMean([2, 8])).toBeCloseTo(4)
  })

  test('geometricMean([4, 4, 4]) returns 4', () => {
    expect(geometricMean([4, 4, 4])).toBeCloseTo(4)
  })

  test('geometricMean([1, 2, 3, 4]) returns ~2.213', () => {
    expect(geometricMean([1, 2, 3, 4])).toBeCloseTo(2.213, 2)
  })

  test('geometricMean single element returns that element', () => {
    expect(geometricMean([5])).toBeCloseTo(5)
  })

  test('geometricMean([1, 1, 1]) returns 1', () => {
    expect(geometricMean([1, 1, 1])).toBeCloseTo(1)
  })

  test('geometricMean([2, 2]) returns 2', () => {
    expect(geometricMean([2, 2])).toBeCloseTo(2)
  })

  test('geometricMean([3, 27]) returns 9', () => {
    expect(geometricMean([3, 27])).toBeCloseTo(9)
  })

  test('geometricMean does not mutate original array', () => {
    const arr = [1, 2, 3, 4]
    geometricMean(arr)
    expect(arr).toEqual([1, 2, 3, 4])
  })

  test('throws TypeError for empty array', () => {
    expect(() => geometricMean([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => geometricMean('123')).toThrow(TypeError)
  })

  test('throws TypeError for zero values', () => {
    expect(() => geometricMean([1, 0, 3])).toThrow(TypeError)
  })

  test('throws TypeError for negative values', () => {
    expect(() => geometricMean([1, -2, 3])).toThrow(TypeError)
  })
})
