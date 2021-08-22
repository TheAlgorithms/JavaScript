/*
 * Problem Statement:
 * - Given a NxN grid, find whether rat in cell (0,0) can reach target(N-1,N-1);
 * - In grid "0" represent blocked cell and "1" represent empty cell
 *
 * Reference for this problem:
 * - https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/
 *
 */

// Helper function to find if current cell is out of boundary
const outOfBoundary = (grid, currentRow, currentColumn) => {
  if (currentRow < 0 || currentColumn < 0 || currentRow >= grid.length || currentColumn >= grid[0].length) {
    return true
  } else {
    return false
  }
}

const printPath = (grid, currentRow, currentColumn, path) => {
  // If cell is out of boundary, we can't proceed
  if (outOfBoundary(grid, currentRow, currentColumn)) return false

  // If cell is blocked then you can't go ahead
  if (grid[currentRow][currentColumn] === 0) return false

  // If we reached target cell, then print path
  if (currentRow === targetRow && currentColumn === targetColumn) {
    console.log(path)
    return true
  }

  // R,L,D,U are directions `Right, Left, Down, Up`
  const directions = [
    [1, 0, 'D'],
    [-1, 0, 'U'],
    [0, 1, 'R'],
    [0, -1, 'L']
  ]

  for (let i = 0; i < directions.length; i++) {
    const nextRow = currentRow + directions[i][0]
    const nextColumn = currentColumn + directions[i][1]
    const updatedPath = path + directions[i][2]

    grid[currentRow][currentColumn] = 0
    if (printPath(grid, nextRow, nextColumn, updatedPath)) return true
    grid[currentRow][currentColumn] = 1
  }
  return false
}

// Driver Code

const grid = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [0, 0, 1, 1],
  [1, 1, 0, 1]
]

const targetRow = grid.length - 1
const targetColumn = grid[0].length - 1

// Variation 2 : print a possible path to reach from (0, 0) to (N-1, N-1)
// If there is no path possible then it will print "Not Possible"
!printPath(grid, 0, 0, '') && console.log('Not Possible')
