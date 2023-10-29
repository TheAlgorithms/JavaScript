import { generateCombinations } from '../AllCombinationsOfSizeK'

describe('AllCombinationsOfSizeK', () => {
  it('should return 3x2 matrix solution for n = 3 and k = 2', () => {
    const res = generateCombinations(3, 2)
    expect(res).toEqual([
      [1, 2],
      [1, 3],
      [2, 3]
    ])
  })

  it('should return 6x2 matrix solution for n = 4 and k = 2', () => {
    const res = generateCombinations(4, 2)
    expect(res).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ])
  })
})
