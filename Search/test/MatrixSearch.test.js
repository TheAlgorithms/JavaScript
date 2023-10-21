import { MatrixSearch } from '../MatrixSearch' // Import the matrix search function

describe('MatrixSearchAlgorithm', () => {
  const searchParam = [
    [
      5,
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      [1, 1]
    ],
    [
      5,
      [
        [1, 2, 3],
        [4, 6, 7],
        [8, 9, 10]
      ],
      [-1, -1]
    ],
    [42, [[42]], [0, 0]],
    [
      3,
      [
        [3, 5, 7],
        [2, 4, 6],
        [1, 8, 9]
      ],
      [0, 0]
    ],
    [
      1,
      [
        [3, 5, 7],
        [2, 4, 6],
        [1, 8, 9]
      ],
      [2, 0]
    ],
    [5, [], [-1, -1]]
  ]

  test.each(searchParam)(
    'should find the element in the matrix',
    (key, matrix, expected) => {
      expect(MatrixSearch(key, matrix)).toEqual(expected)
    }
  )
})
