import { permutations } from '../GeneratePermutations'

describe('Permutations', () => {
  it('Permutations of [1, 2, 3]', () => {
    expect(permutations([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ])
  })
})
