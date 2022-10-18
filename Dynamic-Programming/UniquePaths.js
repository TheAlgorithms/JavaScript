/*
 * A Dynamic Programming based solution for calculating the number ways to travel from Top-Left of the matrix to Bottom-Right of the matrix
 * https://leetcode.com/problems/unique-paths/
 * Problem Statement:
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * Approach:
 * As the given problem can be reduced to smaller and overlapping sub problems, we can use dynamic programming and memoization to solve this problem.
 * Time complexity: O(M * N) (M->ROWS | N->COLS)
 * Space complexity: O(M * N) (M->ROWS | N->COLS)
 */

/**
 * @param {number} rows
 * @param {number} cols
 * @return {number}
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
