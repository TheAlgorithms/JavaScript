import { expect } from 'vitest'
import { latticePath } from '../Problem015'

describe('Finding total numbers of Lattice Paths', () => {
  test.each([
    [2, 6],
    [4, 70],
    [5, 252],
    [10, 184756],
    [20, 137846528820]
  ])('If Grid Size: %i, then Lattice Paths count: %i', (a, expected) => {
    expect(latticePath(a)).toBe(expected)
  })
})
