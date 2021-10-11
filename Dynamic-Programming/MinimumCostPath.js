// Problem Statement => https://www.youtube.com/watch?v=lBRtnuxg-gU

const minCostPath = (matrix) => {
  /*
        Find the min cost path from top-left to bottom-right in matrix
        >>> minCostPath([[2, 1], [3, 1], [4, 2]])
        >>> 6
    */

  const n = matrix.length
  const m = matrix[0].length

  // moves[i][j] => minimum number of moves to reach cell i, j
  const moves = new Array(n)
  for (let i = 0; i < moves.length; i++) moves[i] = new Array(m)

  // base conditions
  moves[0][0] = matrix[0][0] // to reach cell (0, 0) from (0, 0) is of no moves
  for (let i = 1; i < m; i++) moves[0][i] = moves[0][i - 1] + matrix[0][i]
  for (let i = 1; i < n; i++) moves[i][0] = moves[i - 1][0] + matrix[i][0]

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) { moves[i][j] = Math.min(moves[i - 1][j], moves[i][j - 1]) + matrix[i][j] }
  }

  return moves[n - 1][m - 1]
}

export { minCostPath }

// Example

// minCostPath([
//   [2, 1],
//   [3, 1],
//   [4, 2]
// ])

// minCostPath([
//   [2, 1, 4],
//   [2, 1, 3],
//   [3, 2, 1]
// ])
