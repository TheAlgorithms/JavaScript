/**
 * @param {T} key - The element to be found.
 * @param {T[][]} matrix - The matrix in which the element should be found.
 * @template T
 * @returns {number[]} - An array containing the first found coordinates of the element.
 */
const MatrixSearch = (key, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === key) return [i, j] // Found the element, return its coordinates
    }
  }
  return [-1, -1] // Element not found in the matrix
}
export { MatrixSearch }
