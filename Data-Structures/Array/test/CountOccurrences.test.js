import { countOccurrences } from '../CountOccurrences.js'

describe('countOccurrences', () => {
  test('countOccurrences([1,2,2,3,2], 2) returns 3', () => {
    expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3)
  })

  test("countOccurrences(['a','b','a'], 'a') returns 2", () => {
    expect(countOccurrences(['a', 'b', 'a'], 'a')).toBe(2)
  })

  test('countOccurrences([1,2,3], 4) returns 0', () => {
    expect(countOccurrences([1, 2, 3], 4)).toBe(0)
  })

  test('countOccurrences empty array returns 0', () => {
    expect(countOccurrences([], 1)).toBe(0)
  })

  test('countOccurrences all same elements', () => {
    expect(countOccurrences([2, 2, 2, 2], 2)).toBe(4)
  })

  test('countOccurrences with boolean values', () => {
    expect(countOccurrences([true, false, true, true], true)).toBe(3)
  })

  test('countOccurrences with null values', () => {
    expect(countOccurrences([null, 1, null, 2], null)).toBe(2)
  })

  test('countOccurrences does not mutate original array', () => {
    const arr = [1, 2, 2, 3]
    countOccurrences(arr, 2)
    expect(arr).toEqual([1, 2, 2, 3])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => countOccurrences('123', 1)).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => countOccurrences(null, 1)).toThrow(TypeError)
  })
})
