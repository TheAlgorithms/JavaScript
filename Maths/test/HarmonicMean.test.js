import { harmonicMean } from '../HarmonicMean.js'

describe('harmonicMean', () => {
  test('harmonicMean([2, 2, 2]) returns 2', () => {
    expect(harmonicMean([2, 2, 2])).toBeCloseTo(2)
  })

  test('harmonicMean([1, 4]) returns 1.6', () => {
    expect(harmonicMean([1, 4])).toBeCloseTo(1.6)
  })

  test('harmonicMean([1, 2, 4]) returns ~1.714', () => {
    expect(harmonicMean([1, 2, 4])).toBeCloseTo(1.714, 2)
  })

  test('harmonicMean single element returns that element', () => {
    expect(harmonicMean([5])).toBeCloseTo(5)
  })

  test('harmonicMean([1, 1, 1]) returns 1', () => {
    expect(harmonicMean([1, 1, 1])).toBeCloseTo(1)
  })

  test('harmonicMean([2, 4, 8]) returns ~3.428', () => {
    expect(harmonicMean([2, 4, 8])).toBeCloseTo(3.428, 2)
  })

  test('harmonicMean does not mutate original array', () => {
    const arr = [1, 2, 4]
    harmonicMean(arr)
    expect(arr).toEqual([1, 2, 4])
  })

  test('throws TypeError for empty array', () => {
    expect(() => harmonicMean([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => harmonicMean('123')).toThrow(TypeError)
  })

  test('throws TypeError for zero values', () => {
    expect(() => harmonicMean([1, 0, 3])).toThrow(TypeError)
  })

  test('throws TypeError for negative values', () => {
    expect(() => harmonicMean([1, -2, 3])).toThrow(TypeError)
  })
})
