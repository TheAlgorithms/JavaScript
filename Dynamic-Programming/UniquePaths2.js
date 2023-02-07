/*
 * Unique Paths 2
 *
 * There is a robot on an `m x n` grid.
 * The robot is initially located at the top-left corner
 * The robot tries to move to the bottom-right corner.
 * The robot can only move either down or right at any point in time.
 *
 * Given grid with obstacles
 * An obstacle and space are marked as 1 or 0 respectively in grid.
 * A path that the robot takes cannot include any square that is an obstacle.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * More info: https://leetcode.com/problems/unique-paths-ii/
 */

/**
 * @description Return 'rows x columns' grid with cells filled by 'filler'
 * @param {Number} rows Number of rows in the grid
 * @param {Number} columns Number of columns in the grid
 * @param {String | Number | Boolean} filler The value to fill cells
 * @returns {Array [][]}
 */
const generateMatrix = (rows, columns, filler = 0) => {
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const submatrix = []
    for (let k = 0; k < columns; k++) {
      submatrix[k] = filler
    }
    matrix[i] = submatrix
  }
  return matrix
}

/**
 * @description Return number of unique paths
 * @param {Array [][]} obstacles Obstacles grid
 * @returns {Number}
 */
const uniquePaths2 = (obstacles) => {
  if (!Array.isArray(obstacles)) {
    throw new Error('Input data must be type of Array')
  }
  // Create grid for calculating number of unique ways
  const rows = obstacles.length
  const columns = obstacles[0].length
  const grid = generateMatrix(rows, columns)
  // Fill the outermost cell with 1 b/c it has
  // the only way to reach neighbor
  for (let i = 0; i < rows; i++) {
    // If robot encounters an obstacle in these cells,
    // he cannot continue moving in that direction
    if (obstacles[i][0]) {
      break
    }
    grid[i][0] = 1
  }
  for (let j = 0; j < columns; j++) {
    if (obstacles[0][j]) {
      break
    }
    grid[0][j] = 1
  }
  // Fill the rest of grid by dynamic programming
  // using following recurrent formula:
  // K[i][j] = K[i - 1][j] + K[i][j - 1]
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      grid[i][j] = obstacles[i][j] ? 0 : grid[i - 1][j] + grid[i][j - 1]
    }
  }
  return grid[rows - 1][columns - 1]
}

export { uniquePaths2 }
