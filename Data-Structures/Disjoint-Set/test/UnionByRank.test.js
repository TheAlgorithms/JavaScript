import { expect, test } from 'vitest'
import DSU from '../UnionByRank.js'
import { describe } from 'node:test'

describe('union_by_rank', () => {
  const dsu = new DSU(5)

  dsu.union_by_rank(0, 2)
  dsu.union_by_rank(4, 2)
  dsu.union_by_rank(3, 1)

  test('find parent of a particular node', () => {
    expect(dsu.find_parent(0)).toBe(2)
    expect(dsu.find_parent(4)).toBe(2)
  })

  test('finding if two nodes are in same component or not', () => {
    expect(dsu.find_parent(4) == dsu.find_parent(0)).toBeTruthy()
    expect(dsu.find_parent(3) == dsu.find_parent(2)).toBeFalsy()
  })
})
