// youtube Link -> https://www.youtube.com/watch?v=lBRtnuxg-gU

const minCostPath = (matrix) => {
  /*
  Find the min cost path from top-left to bottom-right in matrix
    >>> minCostPath([[2, 1], [3, 1], [4, 2]])
    6
  */
  const n = matrix.length
  const m = matrix[0].length

  // Preprocessing first row
  for (let i = 1; i < m; i++) {
    matrix[0][i] += matrix[0][i - 1]
  }

  // Preprocessing first column
  for (let i = 1; i < n; i++) {
    matrix[i][0] += matrix[i - 1][0]
  }

  // Updating cost to current position
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1])
    }
  }

  return matrix[n - 1][m - 1]
}

const main = () => {
  console.log(minCostPath([[2, 1], [3, 1], [4, 2]]))
  console.log(minCostPath([[2, 1, 4], [2, 1, 3], [3, 2, 1]]))
}

main()
