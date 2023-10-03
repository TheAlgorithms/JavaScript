import { zeroOneKnapsack } from '../ZeroOneKnapsack'

describe('ZeroOneKnapsack', () => {
  it('zeroOneKnapsack when capacity is 4 and 5 items', () => {
    expect(
      zeroOneKnapsack(
        [
          [1, 8],
          [2, 4],
          [3, 0],
          [2, 5],
          [2, 3]
        ],
        5,
        4,
        [
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1]
        ]
      )
    ).toBe(13)
  })

  it('zeroOneKnapsack when capacity is 1 and 1 items', () => {
    expect(
      zeroOneKnapsack([[1, 80]], 1, 1, [
        [-1, -1],
        [-1, -1]
      ])
    ).toBe(80)
  })

  it('zeroOneKnapsack when capacity is 0 and 1 items', () => {
    expect(zeroOneKnapsack([[1, 80]], 1, 0, [[-1], [-1]])).toBe(0)
  })
})
