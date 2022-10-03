/**
 * A Dynamic Programming based solution for calculating the number ways to travel from Top-Left of the matrix to Bottom-Right of the matrix
 * https://leetcode.com/problems/unique-paths/
 */

// Return the number of unique paths, given the dimensions of rows and columns

const uniquePaths = (rows, cols) => {
  let dp = new Array(cols).fill(1)

  for (let i = 1; i < rows; i++) {
    const tmp = []

    for (let j = 0; j < cols; j++) {
      if (j === 0) {
        tmp[j] = dp[j]
      } else {
        tmp[j] = tmp[j - 1] + dp[j]
      }
    }
    dp = tmp
  }
  return dp.pop()
}

export { uniquePaths }
