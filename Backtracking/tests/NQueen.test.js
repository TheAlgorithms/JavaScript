import { NQueen } from '../NQueen'

describe('NQueen', () => {
  it('should return 2 solutions for 4x4 size board', () => {
    const _4Queen = new NQueen(4)
    _4Queen.solve()
    expect(_4Queen.solutionCount).toEqual(2)
  })

  it('should return 92 solutions for 8x8 size board', () => {
    const _8Queen = new NQueen(8)
    _8Queen.solve()
    expect(_8Queen.solutionCount).toEqual(92)
  })
})
