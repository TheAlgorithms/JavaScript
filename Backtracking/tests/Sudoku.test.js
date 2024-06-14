import { Sudoku } from '../Sudoku'

const data = [
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

const solved = [
  [3, 1, 6, 5, 7, 8, 4, 9, 2],
  [5, 2, 9, 1, 3, 4, 7, 6, 8],
  [4, 8, 7, 6, 2, 9, 5, 3, 1],
  [2, 6, 3, 4, 1, 5, 9, 8, 7],
  [9, 7, 4, 8, 6, 3, 1, 2, 5],
  [8, 5, 1, 7, 9, 2, 6, 4, 3],
  [1, 3, 8, 9, 4, 7, 2, 5, 6],
  [6, 9, 2, 3, 5, 1, 8, 7, 4],
  [7, 4, 5, 2, 8, 6, 3, 1, 9]
]

describe('Sudoku', () => {
  it('should create a valid board successfully', () => {
    // we deliberately want to check whether this constructor call fails or not
    expect(() => {
      new Sudoku(data)
    }).not.toThrow()
  })

  it('should find an empty cell', () => {
    const board = new Sudoku(data)
    const emptyCell = board.findEmptyCell()
    expect(emptyCell).not.toEqual([-1, -1])
  })

  it('should solve the board successfully', () => {
    const board = new Sudoku(data)
    board.solve()

    // should not have empty cells anymore
    const emptyCell = board.findEmptyCell()
    expect(emptyCell).toEqual([-1, -1])

    // solved board should match our expectation
    for (let i = 0; i < 9; i++) {
      const section = board.getSection(i, [0, 9])
      expect(section).toEqual(solved[i])
    }
  })
})
