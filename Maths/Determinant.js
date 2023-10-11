/**
 * Given a square matrix, find its determinant using Laplace Expansion.
 * Time Complexity : O(n!)
 *
 * For more info: https://en.wikipedia.org/wiki/Determinant
 *
 * @param {number[[]]} matrix - Two dimensional array of integers.
 * @returns {number} - An integer equal to the determinant.
 *
 * @example
 * const squareMatrix = [
 *                          [2,3,4,6],
 *                          [5,8,9,0],
 *                          [7,4,3,9],
 *                          [4,0,2,1]
 *                      ];
 *
 * const result = determinant(squareMatrix);
 * // The function should return 858 as the resultant determinant.
 */

const subMatrix = (matrix, i, j) => {
  let matrixSize = matrix[0].length
  if (matrixSize === 1) {
    return matrix[0][0]
  }
  let subMatrix = []
  for (let x = 0; x < matrixSize; x++) {
    if (x === i) {
      continue
    }
    subMatrix.push([])
    for (let y = 0; y < matrixSize; y++) {
      if (y === j) {
        continue
      }
      subMatrix[subMatrix.length - 1].push(matrix[x][y])
    }
  }
  return subMatrix
}

const isMatrixSquare = (matrix) => {
  let numRows = matrix.length
  for (let i = 0; i < numRows; i++) {
    if (numRows !== matrix[i].length) {
      return false
    }
  }
  return true
}

const determinant = (matrix) => {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0])
  ) {
    throw new Error('Input is not a valid 2D matrix.')
  }
  if (!isMatrixSquare(matrix)) {
    throw new Error('Square matrix is required.')
  }
  let numCols = matrix[0].length
  if (numCols === 1) {
    return matrix[0][0]
  }
  let result = 0
  let setIndex = 0
  for (let i = 0; i < numCols; i++) {
    result +=
      Math.pow(-1, i) *
      matrix[setIndex][i] *
      determinant(subMatrix(matrix, setIndex, i))
  }
  return result
}
export { determinant }
