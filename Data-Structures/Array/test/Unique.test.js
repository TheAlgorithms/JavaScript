import { unique } from '../Unique.js'

describe('unique', () => {
  test('unique([1, 2, 2, 3]) returns [1, 2, 3]', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3])
  })

  test('unique([1, 1, 1]) returns [1]', () => {
    expect(unique([1, 1, 1])).toEqual([1])
  })

  test("unique([1, '1', 1]) returns [1, '1']", () => {
    expect(unique([1, '1', 1])).toEqual([1, '1'])
  })

  test('unique([]) returns []', () => {
    expect(unique([])).toEqual([])
  })

  test('unique with no duplicates returns same values', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('unique preserves order of first occurrence', () => {
    expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2])
  })

  test('unique works with strings', () => {
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
  })

  test('unique does not mutate original array', () => {
    const arr = [1, 2, 2, 3]
    unique(arr)
    expect(arr).toEqual([1, 2, 2, 3])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => unique('123')).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => unique(null)).toThrow(TypeError)
  })
})
