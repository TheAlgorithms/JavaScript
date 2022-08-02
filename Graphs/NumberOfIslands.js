/* Number of Islands
https://dev.to/rattanakchea/amazons-interview-question-count-island-21h6
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

a two dimensional grid map
each element is going to represent a piece of land
1 is land,
0 is water
output a number which is the number of islands

Example 1:
  Input:
  11110
  11010
  11000
  00000

  Output: 1

Example 2:
  Input:
  11000
  11000
  00100
  00011

  Output: 3

I: two dimensional array
O: a single integer; total number of islands

Pseudocode:
  OUTER FUNCTION
    set count to 0

    INNER FUNCTION - flood (col, row)
      if the tile is water
        return
      make tile water(flood tile)
      invoke flood on the neighbor coordinates

    iterate over the matrix (col, row)
      if the current element is a 1
        increment count
        invoke flood (coordinates for col and row)

    Return the count
*/

const islands = (matrixGrid) => {
  const matrix = matrixGrid
  let counter = 0

  const flood = (row, col) => {
    if (row < 0 || col < 0) return // Off the map above or left
    if (row >= matrix.length || col >= matrix[row].length) return // Off the map below or right

    const tile = matrix[row][col]
    if (tile !== '1') return

    matrix[row][col] = '0'

    flood(row + 1, col) // Down
    flood(row - 1, col) // Up
    flood(row, col + 1) // Right
    flood(row, col - 1) // Left
  }

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      const current = matrix[row][col]
      if (current === '1') {
        flood(row, col)
        counter += 1
      }
    }
  }
  return counter
}

export { islands }
