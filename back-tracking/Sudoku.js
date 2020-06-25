function findEmptyCell (board) {
  // Find a empty cell in the board (returns [-1, -1] if all cells are filled)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j]
    }
  }
  return [-1, -1]
}

function check (board, [y, x], value) {
  // checks if the value to be added in the board is an acceptable value for the cell

  // checking through the row
  for (let i = 0; i < 9; i++) {
    if (board[i][x] === value) return false
  }
  // checking through the column
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === value) return false
  }

  // checking through the 3x3 block of the cell
  const secRow = Math.floor(y / 3)
  const secCol = Math.floor(x / 3)
  for (let i = (secRow * 3); i < ((secRow * 3) + 3); i++) {
    for (let j = (secCol * 3); j < ((secCol * 3) + 3); j++) {
      if (y !== i && x !== j && board[i][j] === value) return false
    }
  }

  return true
}

function sudokuSolver (board) {
  const [y, x] = findEmptyCell(board)

  // checking if the board is complete
  if (y === -1 && x === -1) return true

  for (let val = 1; val < 10; val++) {
    if (check(board, [y, x], val)) {
      board[y][x] = val
      if (sudokuSolver(board)) return true
      // backtracking if the board cannot be solved using current configuration
      board[y][x] = 0
    }
  }
  // returning false the board cannot be solved using current configuration
  return false
}

function printBoard (board) {
  // helper function to display board
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0 && i !== 0) console.log('- - - - - - - - - - - -')
    const part1 = board[i].slice(0, 3)
    const part2 = board[i].slice(3, 6)
    const part3 = board[i].slice(6, 9)
    console.log(...part1, ' | ', ...part2, ' | ', ...part3)
  }
}

function main () {
  // main function with an example
  const sudokuBoard = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
  ]

  printBoard(sudokuBoard)

  console.log('\n')
  sudokuSolver(sudokuBoard)

  printBoard(sudokuBoard)
}

main()
