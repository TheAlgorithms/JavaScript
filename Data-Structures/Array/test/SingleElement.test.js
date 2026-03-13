import { SingleElement } from '../SingleElement'

describe('single element in an array of duplicates', () => {
  test.each([
    [[1, 2, 2, 3, 3], 1],
    [[8, 9, 7, 2, 1, 5, 6, 4, 5, 9, 8, 7, 2, 6, 1], 4],
    [[10, 8, 5, 6, 8, 5, 6, 10, 11], 11]
  ])('returns %p when given %p', (array, expected) => {
    expect(SingleElement(array)).toBe(expected)
  })
})
