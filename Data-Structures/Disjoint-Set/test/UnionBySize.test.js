import { describe } from 'node:test'
import { expect, test } from 'vitest'
import DSU from '../UnionBySize'

describe('union_by_size', () => {
  const dsu = new DSU(5)

  dsu.union_by_size(0, 2)
  dsu.union_by_size(4, 2)
  dsu.union_by_size(3, 1)

  test('find parent of a particular node', () => {
    expect(dsu.find_parent(0)).toBe(2)
    expect(dsu.find_parent(4)).toBe(2)
  })

  test('finding if two nodes are in same component or not', () => {
    expect(dsu.find_parent(4) == dsu.find_parent(0)).toBeTruthy()
    expect(dsu.find_parent(3) == dsu.find_parent(2)).toBeFalsy()
  })

  test('finding size of a component', () => {
    expect(dsu.find_size(3)).toBe(2)

    // all nodes unnited in single component
    dsu.union_by_size(3, 0)
    expect(dsu.find_size(3)).toBe(5)
  })
})
