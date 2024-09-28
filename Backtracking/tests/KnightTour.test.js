import { OpenKnightTour } from '../KnightTour'

describe('OpenKnightTour', () => {
  it('OpenKnightTour(5)', () => {
    const KT = new OpenKnightTour(5)
    expect(KT.board).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])

    expect(KT.solve()).toBe(true)
    expect(KT.board).toEqual([
      [19, 4, 15, 10, 25],
      [14, 9, 18, 5, 16],
      [1, 20, 3, 24, 11],
      [8, 13, 22, 17, 6],
      [21, 2, 7, 12, 23]
    ])
  })

  it('OpenKnightTour(2)', () => {
    const KT = new OpenKnightTour(2)
    expect(KT.board).toEqual([
      [0, 0],
      [0, 0]
    ])

    expect(KT.solve()).toBe(false)
    expect(KT.board).toEqual([
      [0, 0],
      [0, 0]
    ])
  })
})
