import { expect } from 'vitest'
import { determinant } from '../Determinant'
describe('Determinant', () => {
  test.each([
    [
      [
        [8, 1, 6],
        [1, 2, 3],
        [4, 7, 5]
      ],
      -87
    ],
    [
      [
        [2, 1, 0, 2],
        [1, 2, 4, 3],
        [0, 4, 7, 5],
        [4, 7, 9, 8]
      ],
      25
    ],
    [
      [
        [5, 9],
        [3, 7]
      ],
      8
    ],
    [
      [
        [7, 5, 1, 4, 3],
        [6, 8, 7, 9, 6],
        [9, 8, 0, 4, 7],
        [0, 3, 4, 7, 9],
        [3, 6, 2, 8, 8]
      ],
      2476
    ],
    [[[23]], 23]
  ])(
    'Should return the determinant of the square matrix.',
    (matrix, expected) => {
      expect(determinant(matrix)).toEqual(expected)
    }
  )

  test.each([
    [
      [
        [1, 6],
        [1, 2, 3],
        [4, 7, 5]
      ],
      'Square matrix is required.'
    ],
    [[1, 3, 2, [5, 8, 6], 3], 'Input is not a valid 2D matrix.']
  ])('Should return the error message.', (matrix, expected) => {
    expect(() => determinant(matrix)).toThrowError(expected)
  })
})
