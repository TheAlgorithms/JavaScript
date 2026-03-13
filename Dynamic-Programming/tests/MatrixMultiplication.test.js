import { matrixMultiplication } from '../MatrixMultiplication'

test('matrixMultiplication([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]]) => [[58,64],[139,154]]', () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6]
  ]
  const B = [
    [7, 8],
    [9, 10],
    [11, 12]
  ]
  const res = matrixMultiplication(A, B)
  expect(res).toEqual([
    [58, 64],
    [139, 154]
  ])
})

test('matrixMultiplication([[2,4],[3,4]], [[1,2],[1,3]]) => [[6,16],[7,18]]', () => {
  const A = [
    [2, 4],
    [3, 4]
  ]
  const B = [
    [1, 2],
    [1, 3]
  ]
  const res = matrixMultiplication(A, B)
  expect(res).toEqual([
    [6, 16],
    [7, 18]
  ])
})

test('matrixMultiplication([[1,2],[3,4]], [[5,6],[7,8]]) => [[19,22],[43,50]]', () => {
  const A = [
    [1, 2],
    [3, 4]
  ]
  const B = [
    [5, 6],
    [7, 8]
  ]
  const res = matrixMultiplication(A, B)
  expect(res).toEqual([
    [19, 22],
    [43, 50]
  ])
})

test('matrixMultiplication([[1]], [[2]]) => [[2]]', () => {
  const A = [[1]]
  const B = [[2]]
  const res = matrixMultiplication(A, B)
  expect(res).toEqual([[2]])
})

test('throws error when matrices cannot be multiplied', () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6]
  ]
  const B = [
    [1, 2],
    [3, 4]
  ]
  expect(() => matrixMultiplication(A, B)).toThrow(
    'Matrix multiplication not possible: columns of A must equal rows of B'
  )
})
