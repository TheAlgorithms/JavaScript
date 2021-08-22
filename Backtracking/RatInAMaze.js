/*
 * Problem Statement:
 * - Given a NxN grid, find whether rat in cell (0,0) can reach target(N-1,N-1);
 * - In grid "0" represent blocked cell and "1" represent empty cell
 *
 */

const outOfBoundary = (grid, currentRow, currentColumn) => {
  if (currentRow < 0 || currentColumn < 0 || currentRow >= grid.length || currentColumn >= grid[0].length) return true
  else return false
}

const isPossible = (grid, currentRow, currentColumn) => {
  if (outOfBoundary(grid, currentRow, currentColumn)) return false

  console.log(currentRow, currentColumn)
  if (grid[currentRow][currentColumn] === 0) return false

  if (currentRow === targetRow && currentColumn === targetColumn) {
    return true
  }

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ]

  for (let i = 0; i < directions.length; i++) {
    const nextRow = currentRow + directions[i][0]; const nextColumn = currentColumn + directions[i][1]
    grid[currentRow][currentColumn] = 0
    if (isPossible(grid, nextRow, nextColumn)) return true
    grid[currentRow][currentColumn] = 1
  }
  return false
}

// Driver Code

const grid = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]

const targetRow = grid.length - 1
const targetColumn = grid[0].length - 1

if (isPossible(grid, 0, 0)) {
  console.log('Possible')
} else {
  console.log('Not Possible')
}
