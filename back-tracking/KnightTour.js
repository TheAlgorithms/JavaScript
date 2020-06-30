// Wikipedia: https://en.wikipedia.org/wiki/Knight%27s_tour

class OpenKnightTour {
  constructor (size) {
    this.board = new Array(size).fill(0).map(() => new Array(size).fill(0))
    this.size = size
  }

  getMoves ([i, j]) {
    // helper function to get the valid moves of the knight from the current position
    const moves = [
      [i + 2, j - 1],
      [i + 2, j + 1],
      [i - 2, j - 1],
      [i - 2, j + 1],
      [i + 1, j - 2],
      [i + 1, j + 2],
      [i - 1, j - 2],
      [i - 1, j + 2]
    ]

    return moves.filter(([y, x]) => y >= 0 && y < this.size && x >= 0 && x < this.size)
  }

  isComplete () {
    // helper function to check if the board is complete
    return !this.board.map(row => row.includes(0)).includes(true)
  }

  solve () {
    // function to find the solution for the given board
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.solveHelper([i, j], 0)) return true
      }
    }
    return false
  }

  solveHelper ([i, j], curr) {
    // helper function for the main computation
    if (this.isComplete()) return true

    for (const [y, x] of this.getMoves([i, j])) {
      if (this.board[y][x] === 0) {
        this.board[y][x] = curr + 1
        if (this.solveHelper([y, x], curr + 1)) return true
        // backtracking
        this.board[y][x] = 0
      }
    }
    return false
  }

  printBoard () {
    // utility function to display the board
    for (const row of this.board) {
      let string = ''
      for (const elem of row) {
        string += elem + '\t'
      }
      console.log(string)
    }
  }
}

function main () {
  const board = new OpenKnightTour(5)

  board.printBoard()
  console.log('\n')

  board.solve()

  board.printBoard()
}

main()
