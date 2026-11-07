import { meanAbsoluteDeviation } from '../MeanAbsoluteDeviation.js'

describe('meanAbsoluteDeviation', () => {
  test('meanAbsoluteDeviation([2,2,3,4,14]) returns 3.6', () => {
    expect(meanAbsoluteDeviation([2, 2, 3, 4, 14])).toBeCloseTo(3.6)
  })

  test('meanAbsoluteDeviation([1,1,1]) returns 0', () => {
    expect(meanAbsoluteDeviation([1, 1, 1])).toBe(0)
  })

  test('meanAbsoluteDeviation single element returns 0', () => {
    expect(meanAbsoluteDeviation([5])).toBe(0)
  })

  test('meanAbsoluteDeviation([1,2,3,4,5]) returns 1.2', () => {
    expect(meanAbsoluteDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.2)
  })

  test('meanAbsoluteDeviation works with negative numbers', () => {
    expect(meanAbsoluteDeviation([-2, -1, 0, 1, 2])).toBeCloseTo(1.2)
  })

  test('meanAbsoluteDeviation([10, 20]) returns 5', () => {
    expect(meanAbsoluteDeviation([10, 20])).toBeCloseTo(5)
  })

  test('meanAbsoluteDeviation does not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5]
    meanAbsoluteDeviation(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  test('throws TypeError for empty array', () => {
    expect(() => meanAbsoluteDeviation([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => meanAbsoluteDeviation('123')).toThrow(TypeError)
  })

  test('throws TypeError for array with non-numbers', () => {
    expect(() => meanAbsoluteDeviation([1, 'two', 3])).toThrow(TypeError)
  })
})
