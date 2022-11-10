import { permutations } from '../GeneratePermutations'

describe('Permutations', () => {
  it('Permutations of [a]', () => {
    const perms = permutations(['a'])
    expect(perms).toHaveLength(1)
    expect(perms).toContainEqual(['a'])
  })

  it('Permutations of [true, false]', () => {
    const perms = permutations([true, false])
    expect(perms).toHaveLength(2 * 1)
    expect(perms).toContainEqual([true, false])
    expect(perms).toContainEqual([false, true])
  })

  it('Permutations of [1, 2, 3]', () => {
    const perms = permutations([1, 2, 3])
    expect(perms).toHaveLength(3 * 2 * 1)
    expect(perms).toContainEqual([1, 2, 3])
    expect(perms).toContainEqual([1, 3, 2])
    expect(perms).toContainEqual([2, 1, 3])
    expect(perms).toContainEqual([2, 3, 1])
    expect(perms).toContainEqual([3, 1, 2])
    expect(perms).toContainEqual([3, 2, 1])
  })

  it('Permutation counts across larger input arrays', () => {
    expect(permutations([1, 2, 3, 4, 5, 6])).toHaveLength(720)
    expect(permutations([1, 2, 3, 4, 5, 6, 7])).toHaveLength(5040)
  })
})
