import { chunk } from '../Chunk.js'

describe('chunk', () => {
  test('chunk([1,2,3,4,5], 2) returns [[1,2],[3,4],[5]]', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test('chunk([1,2,3], 3) returns [[1,2,3]]', () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]])
  })

  test('chunk([1,2,3,4], 2) returns [[1,2],[3,4]]', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ])
  })

  test('chunk with size 1 returns array of single elements', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]])
  })

  test('chunk empty array returns empty array', () => {
    expect(chunk([], 2)).toEqual([])
  })

  test('chunk with size larger than array returns one chunk', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]])
  })

  test('chunk does not mutate original array', () => {
    const arr = [1, 2, 3, 4]
    chunk(arr, 2)
    expect(arr).toEqual([1, 2, 3, 4])
  })

  test('chunk works with strings', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd']
    ])
  })

  test('throws TypeError for non-array input', () => {
    expect(() => chunk('123', 2)).toThrow(TypeError)
  })

  test('throws TypeError for size 0', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow(TypeError)
  })

  test('throws TypeError for negative size', () => {
    expect(() => chunk([1, 2, 3], -1)).toThrow(TypeError)
  })

  test('throws TypeError for float size', () => {
    expect(() => chunk([1, 2, 3], 1.5)).toThrow(TypeError)
  })
})
