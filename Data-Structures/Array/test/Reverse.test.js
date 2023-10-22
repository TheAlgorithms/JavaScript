import { Reverse } from '../Reverse.js'

describe('reverse elements in an array', () => {
  it.each([
    [[], []],
    [[1], [1]],
    [
      [1, 2, 3, 4],
      [4, 3, 2, 1]
    ]
  ])('returns %j when given %j', (array, expected) => {
    expect(Reverse(array)).toEqual(expected)
  })
})
