import { NQueens } from '../NQueens'

describe('NQueens', () => {
  it('should return 2 solutions for 4x4 size board', () => {
    const _4Queens = new NQueens(4)
    _4Queens.solve()
    expect(_4Queens.solutionCount).toEqual(2)
  })

  it('should return 92 solutions for 8x8 size board', () => {
    const _8Queens = new NQueens(8)
    _8Queens.solve()
    expect(_8Queens.solutionCount).toEqual(92)
  })

  it('should throw RangeError for negative size board', () => {
    expect(() => {
      return new NQueens(-1)
    }).toThrow(RangeError)
  })
})
