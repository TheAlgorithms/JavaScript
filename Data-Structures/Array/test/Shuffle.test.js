import { shuffle } from '../Shuffle.js'

describe('shuffle', () => {
  test('shuffle returns array of same length', () => {
    expect(shuffle([1, 2, 3, 4, 5])).toHaveLength(5)
  })

  test('shuffle contains all original elements', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = shuffle(arr)
    expect(result.sort()).toEqual([...arr].sort())
  })

  test('shuffle empty array returns empty array', () => {
    expect(shuffle([])).toEqual([])
  })

  test('shuffle single element returns same array', () => {
    expect(shuffle([1])).toEqual([1])
  })

  test('shuffle does not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5]
    shuffle(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  test('shuffle works with strings', () => {
    const arr = ['a', 'b', 'c', 'd']
    const result = shuffle(arr)
    expect(result.sort()).toEqual([...arr].sort())
  })

  test('shuffle returns a new array', () => {
    const arr = [1, 2, 3]
    const result = shuffle(arr)
    expect(result).not.toBe(arr)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => shuffle('123')).toThrow(TypeError)
  })

  test('throws TypeError for null input', () => {
    expect(() => shuffle(null)).toThrow(TypeError)
  })
})
