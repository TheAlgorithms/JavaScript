import { expect } from 'vitest'
import { generate } from '../PascalTriangle'

describe('Pascals Triangle', () => {
  it('should have the the same length as the number', () => {
    const pascalsTriangle = generate(5)
    expect(pascalsTriangle.length).toEqual(5)
  })
  it('should have same length as its index in the array', () => {
    const pascalsTriangle = generate(5)
    pascalsTriangle.forEach((arr, index) => {
      expect(arr.length).toEqual(index + 1)
    })
  })
  it('should return an array of arrays', () => {
    const pascalsTriangle = generate(3)
    expect(pascalsTriangle).toEqual(
      expect.arrayContaining([[1], [1, 1], [1, 2, 1]])
    )
  })
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
