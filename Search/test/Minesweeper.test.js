import { minesweeper } from '../Minesweeper'

describe('Testing minesweeper function', () => {
  it('should return the expected 3x3 array', () => {
    const input = [
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ]
    const expectedOutput = [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1]
    ]
    expect(minesweeper(input)).toStrictEqual(expectedOutput)
  })

  it('should return the expected 3x4 array', () => {
    const input = [
      [true, false, false, true],
      [false, false, true, false],
      [true, true, false, true]
    ]
    const expectedOutput = [
      [0, 2, 2, 1],
      [3, 4, 3, 3],
      [1, 2, 3, 1]
    ]
    expect(minesweeper(input)).toStrictEqual(expectedOutput)
  })

  it('should return the expected 5x2 array', () => {
    const input = [
      [true, false],
      [true, false],
      [false, true],
      [false, false],
      [false, false]
    ]
    const expectedOutput = [
      [1, 2],
      [2, 3],
      [2, 1],
      [1, 1],
      [0, 0]
    ]
    expect(minesweeper(input)).toStrictEqual(expectedOutput)
  })

  it('should return the correct result when there are no mines', () => {
    const input = [
      [false, false, false],
      [false, false, false]
    ]
    const expectedOutput = [
      [0, 0, 0],
      [0, 0, 0]
    ]
    expect(minesweeper(input)).toStrictEqual(expectedOutput)
  })

  it('should return the correct result when there are mines in every cell', () => {
    const input = [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]
    const expectedOutput = [
      [3, 5, 3],
      [5, 8, 5],
      [3, 5, 3]
    ]
    expect(minesweeper(input)).toStrictEqual(expectedOutput)
  })
})
