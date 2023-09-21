import { findUniqueElement } from '../UniqueElementInAnArray'

describe('UniqueElementInAnArray', () => {
  it.each([
    [[1, 2, 1, 3, 3], 2],
    [[1, 2, 3, 4, 5, 4, 3, 2, 1], 5]
  ])('should return an unique element from an array', (arr, expected) => {
    expect(findUniqueElement(arr)).toBe(expected)
  })
})
