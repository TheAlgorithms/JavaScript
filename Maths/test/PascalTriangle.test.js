import { expect } from 'vitest'
import { generate } from '../PascalTriangle'

describe('Pascals Triangle', () => {
  it.each([
    [0, []],
    [1, [[1]]],
    [2, [[1], [1, 1]]],
    [3, [[1], [1, 1], [1, 2, 1]]],
    [4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]], [1, 4, 6, 4, 1]]
  ])('check with %j', (input, expected) => {
    const pascalsTriangle = generate(input)
    expect(pascalsTriangle.length).toEqual(input)
    pascalsTriangle.forEach((arr, index) => {
      expect(arr.length).toEqual(index + 1)
    })
    expect(pascalsTriangle).toEqual(expect.arrayContaining(expected))
  })
})
