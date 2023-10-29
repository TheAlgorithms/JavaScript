import { generateCombinations } from '../AllCombinationsOfSizeK'

describe('AllCombinationsOfSizeK', () => {
  it('should return 3x2 matrix solution for n = 3 and k = 2', () => {
    expect(generateCombinations(3,2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3]
    ])
  })

  it('should return 6x2 matrix solution for n = 4 and k = 2', () => {
    expect(generateCombinations(4,2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ])
  })
})
