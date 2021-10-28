import { Combinations } from '../AllCombinationsOfSizeK'

describe('AllCombinationsOfSizeK', () => {
  it('should return 3x2 matrix solution for n = 3 and k = 2', () => {
    const test1 = new Combinations(3, 2)
    expect(test1.findCombinations()).toEqual([[1, 2], [1, 3], [2, 3]])
  })

  it('should return 6x2 matrix solution for n = 4 and k = 2', () => {
    const test2 = new Combinations(4, 2)
    expect(test2.findCombinations()).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
  })
})
