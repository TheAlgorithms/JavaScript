
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

  // build a mxn grid
  const paths = []
  for (let i = 0; i < n; i++) paths.push([...new Array(m).fill(1)])

  // base case, position 1x1 has only 1 move
  paths[1][1] = 1

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
    }
  }
  return paths[n - 1][m - 1]
}

export { uniquePaths }