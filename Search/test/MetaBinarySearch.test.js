import { metaBinarySearch } from '../MetaBinarySearch'

describe('Meta Binary Search', () => {
  test('returns index for found numeric element', () => {
    expect(metaBinarySearch([2, 5, 8, 12, 16, 23, 38], 23)).toBe(5)
  })

  test('returns -1 when numeric element is missing', () => {
    expect(metaBinarySearch([2, 5, 8, 12, 16, 23, 38], 9)).toBe(-1)
  })

  test('works with sorted strings', () => {
    expect(metaBinarySearch(['alpha', 'beta', 'delta', 'omega'], 'delta')).toBe(
      2
    )
  })

  test('returns -1 on empty input', () => {
    expect(metaBinarySearch([], 1)).toBe(-1)
  })
})
