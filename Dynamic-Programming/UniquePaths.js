
/*
 *
 *  Unique Paths
 *
 *  There is a robot on an `m x n` grid.
 *  The robot is initially located at the top-left corner.
 *  The robot tries to move to the bottom-right corner.
 *  The robot can only move either down or right at any point in time.
 *
 *  Given the two integers `m` and `n`,
 *  return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *  More info: https://leetcode.com/problems/unique-paths/
 */

/*
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePaths = (m, n) => {
  // only one way to reach end
  if (m === 1 || n === 1) return 1

  // build a linear grid of size m
  // base case, position 1 has only 1 move
  const paths = new Array(m).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // paths[j] in RHS represents the cell value stored above the current cell
      // paths[j-1] in RHS represents the cell value stored to the left of the current cell
      // paths [j] on the LHS represents the number of distinct pathways to the cell (i,j)
      paths[j] = paths[j - 1] + paths[j]
    }
  }
  return paths[m - 1]
}

export { uniquePaths }
