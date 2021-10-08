/*
 * Problem Statement:
 * - Given a NxN grid, find whether rat in cell [0, 0] can reach the target in cell [N-1, N-1]
 * - The grid is represented as an array of rows. Each row is represented as an array of 0 or 1 values.
 * - A cell with value 0 can not be moved through. Value 1 means the rat can move here.
 * - The rat can not move diagonally.
 *
 * Reference for this problem: https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/
 *
 * Based on the original implementation contributed by Chiranjeev Thapliyal (https://github.com/chiranjeev-thapliyal).
 */

/**
 * Checks if the given grid is valid.
 *
 * A grid needs to satisfy these conditions:
 * - must not be empty
 * - must be a square
 * - must not contain values other than {@code 0} and {@code 1}
 *
 * @param grid The grid to check.
 * @throws TypeError When the given grid is invalid.
 */
function validateGrid (grid) {
  if (!Array.isArray(grid) || grid.length === 0) throw new TypeError('Grid must be a non-empty array')

  const allRowsHaveCorrectLength = grid.every(row => row.length === grid.length)
  if (!allRowsHaveCorrectLength) throw new TypeError('Grid must be a square')

  const allCellsHaveValidValues = grid.every(row => {
    return row.every(cell => cell === 0 || cell === 1)
  })
  if (!allCellsHaveValidValues) throw new TypeError('Grid must only contain 0s and 1s')
}

function isSafe (grid, x, y) {
  const n = grid.length
  return x >= 0 && x < n && y >= 0 && y < n && grid[y][x] === 1
}

/**
 * Attempts to calculate the remaining path to the target.
 *
 * @param grid The full grid.
 * @param x The current X coordinate.
 * @param y The current Y coordinate.
 * @param solution The current solution matrix.
 * @param path The path we took to get from the source cell to the current location.
 * @returns {string|boolean} Either the path to the target cell or false.
 */
function getPathPart (grid, x, y, solution, path) {
  const n = grid.length

  // are we there yet?
  if (x === n - 1 && y === n - 1 && grid[y][x] === 1) {
    solution[y][x] = 1
    return path
  }

  // did we step on a 0 cell or outside the grid?
  if (!isSafe(grid, x, y)) return false

  // are we walking onto an already-marked solution coordinate?
  if (solution[y][x] === 1) return false

  // none of the above? let's dig deeper!

  // mark the current coordinates on the solution matrix
  solution[y][x] = 1

  // attempt to move right
  const right = getPathPart(grid, x + 1, y, solution, path + 'R')
  if (right) return right

  // right didn't work: attempt to move down
  const down = getPathPart(grid, x, y + 1, solution, path + 'D')
  if (down) return down

  // down didn't work: attempt to move up
  const up = getPathPart(grid, x, y - 1, solution, path + 'U')
  if (up) return up

  // up didn't work: attempt to move left
  const left = getPathPart(grid, x - 1, y, solution, path + 'L')
  if (left) return left

  // no direction was successful: remove this cell from the solution matrix and backtrack
  solution[y][x] = 0
  return false
}

function getPath (grid) {
  // grid dimensions
  const n = grid.length

  // prepare solution matrix
  const solution = []
  for (let i = 0; i < n; i++) {
    const row = Array(n)
    row.fill(0)
    solution[i] = row
  }

  return getPathPart(grid, 0, 0, solution, '')
}

/**
 * Creates an instance of the "rat in a maze" based on a given grid (maze).
 */
export class RatInAMaze {
  constructor (grid) {
    // first, let's do some error checking on the input
    validateGrid(grid)

    // attempt to solve the maze now - all public methods only query the result state later
    const solution = getPath(grid)

    if (solution !== false) {
      this.path = solution
      this.solved = true
    } else {
      this.path = ''
      this.solved = false
    }
  }
}
