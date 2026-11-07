import { weightedAverage } from '../WeightedAverage.js'

describe('weightedAverage', () => {
  test('equal weights gives arithmetic mean', () => {
    expect(weightedAverage([1, 2, 3], [1, 1, 1])).toBeCloseTo(2)
  })

  test('weightedAverage([1,2,3],[1,2,3]) returns ~2.333', () => {
    expect(weightedAverage([1, 2, 3], [1, 2, 3])).toBeCloseTo(2.333, 2)
  })

  test('weightedAverage single element returns that element', () => {
    expect(weightedAverage([5], [1])).toBeCloseTo(5)
  })

  test('weightedAverage with zero weight ignores that element', () => {
    expect(weightedAverage([1, 2, 3], [0, 1, 0])).toBeCloseTo(2)
  })

  test('weightedAverage([10, 20], [1, 3]) returns 17.5', () => {
    expect(weightedAverage([10, 20], [1, 3])).toBeCloseTo(17.5)
  })

  test('weightedAverage([1, 2], [3, 1]) returns 1.25', () => {
    expect(weightedAverage([1, 2], [3, 1])).toBeCloseTo(1.25)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => weightedAverage('123', [1, 2])).toThrow(TypeError)
  })

  test('throws TypeError for empty arrays', () => {
    expect(() => weightedAverage([], [])).toThrow(TypeError)
  })

  test('throws TypeError for different length arrays', () => {
    expect(() => weightedAverage([1, 2], [1])).toThrow(TypeError)
  })

  test('throws TypeError for negative weights', () => {
    expect(() => weightedAverage([1, 2], [-1, 1])).toThrow(TypeError)
  })

  test('throws RangeError for all zero weights', () => {
    expect(() => weightedAverage([1, 2], [0, 0])).toThrow(RangeError)
  })
})
