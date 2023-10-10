/**
 * Given a two dimensional matrix, find its row echelon form.
 *
 * For more info: https://en.wikipedia.org/wiki/Row_echelon_form
 *
 * @param {number[[]]} matrix - Two dimensional array of rational numbers.
 * @returns {number[[]]} - Two dimensional array of rational numbers (row echelon form).
 *
 * @example
 * const matrix = [
 *                          [2,3,4,5,7],
 *                          [9,8,4,0,9],
 *                          [5,7,4,3,9],
 *                          [3,4,0,2,1]
 *                ]
 *
 * const result = rowEchelon(matrix)
 *
 * // The function returns the corresponding row echelon form:
 * // result:
 * //             [
 * //                       [1,  1.5,  2,        2.5,      3.5],
 * //                       [0,  1,    2.54545,  4.09091,  4.09091],
 * //                       [0,  0,    1,        1.57692,  1.36539],
 * //                       [0,  0,    0,        1,        -0.25]
 * //             ]
 */

// Set a tolerance value for floating-point comparisons
const tolerance = 0.000001

// Check if all the rows have same length of elements
const isMatrixValid = (matrix) => {
  let numRows = matrix.length
  let numCols = matrix[0].length
  for (let i = 0; i < numRows; i++) {
    if (numCols !== matrix[i].length) {
      return false
    }
  }

  // Check for input other than a 2D matrix
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0])
  ) {
    return false
  }
  return true
}

const checkNonZero = (currentRow, currentCol, matrix) => {
  let numRows = matrix.length
  for (let i = currentRow; i < numRows; i++) {
    // Checks if the current element is not very near to zero.
    if (!isTolerant(0, matrix[i][currentCol], tolerance)) {
      return true
    }
  }
  return false
}

const swapRows = (currentRow, withRow, matrix) => {
  let numCols = matrix[0].length
  let tempValue = 0
  for (let j = 0; j < numCols; j++) {
    tempValue = matrix[currentRow][j]
    matrix[currentRow][j] = matrix[withRow][j]
    matrix[withRow][j] = tempValue
  }
}

// Select a pivot element in the current column to facilitate row operations.
// Pivot element is the first non-zero element found from the current row
// down to the last row.
const selectPivot = (currentRow, currentCol, matrix) => {
  let numRows = matrix.length
  for (let i = currentRow; i < numRows; i++) {
    if (matrix[i][currentCol] !== 0) {
      swapRows(currentRow, i, matrix)
      return
    }
  }
}

// Multiply each element of the given row with a factor.
const scalarMultiplication = (currentRow, factor, matrix) => {
  let numCols = matrix[0].length
  for (let j = 0; j < numCols; j++) {
    matrix[currentRow][j] *= factor
  }
}

// Subtract one row from another row
const subtractRow = (currentRow, fromRow, matrix) => {
  let numCols = matrix[0].length
  for (let j = 0; j < numCols; j++) {
    matrix[fromRow][j] -= matrix[currentRow][j]
  }
}

// Check if two numbers are equal within a given tolerance
const isTolerant = (a, b, tolerance) => {
  const absoluteDifference = Math.abs(a - b)
  return absoluteDifference <= tolerance
}

const rowEchelon = (matrix) => {
  // Check if the input matrix is valid; if not, throw an error.
  if (!isMatrixValid(matrix)) {
    throw new Error('Input is not a valid 2D matrix.')
  }

  let numRows = matrix.length
  let numCols = matrix[0].length
  let result = matrix

  // Iterate through the rows (i) and columns (j) of the matrix.
  for (let i = 0, j = 0; i < numRows && j < numCols; ) {
    // If the current column has all zero elements below the current row,
    // move to the next column.
    if (!checkNonZero(i, j, result)) {
      j++
      continue
    }

    // Select a pivot element and normalize the current row.
    selectPivot(i, j, result)
    let factor = 1 / result[i][j]
    scalarMultiplication(i, factor, result)

    // Make elements below the pivot element zero by performing
    // row operations on subsequent rows.
    for (let x = i + 1; x < numRows; x++) {
      factor = result[x][j]
      if (isTolerant(0, factor, tolerance)) {
        continue
      }
      scalarMultiplication(i, factor, result)
      subtractRow(i, x, result)
      factor = 1 / factor
      scalarMultiplication(i, factor, result)
    }
    i++
  }
  return result
}

export { rowEchelon }
