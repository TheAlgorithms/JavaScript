import { compact } from '../Compact.js'

describe('compact', () => {
  test('compact removes false values', () => {
    expect(compact([1, false, 2])).toEqual([1, 2])
  })

  test('compact removes null values', () => {
    expect(compact([1, null, 2])).toEqual([1, 2])
  })

  test('compact removes undefined values', () => {
    expect(compact([1, undefined, 2])).toEqual([1, 2])
  })

  test('compact removes 0 values', () => {
    expect(compact([1, 0, 2])).toEqual([1, 2])
  })

  test('compact removes empty string values', () => {
    expect(compact([1, '', 2])).toEqual([1, 2])
  })

  test('compact removes NaN values', () => {
    expect(compact([1, NaN, 2])).toEqual([1, 2])
  })

  test('compact removes all falsy values together', () => {
    expect(compact([1, false, 2, null, 3, undefined])).toEqual([1, 2, 3])
  })

  test('compact empty array returns empty array', () => {
    expect(compact([])).toEqual([])
  })

  test('compact array with no falsy values returns same values', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('compact does not mutate original array', () => {
    const arr = [1, false, 2, null]
    compact(arr)
    expect(arr).toEqual([1, false, 2, null])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => compact('123')).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => compact(null)).toThrow(TypeError)
  })
})
