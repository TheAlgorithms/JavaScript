import { TopoSortIterative } from '../TopoSortIterative'

describe('Iterative Topological Sorting', () => {
  test('Graph without cycle', () => {
    const graph = [[], [], [3], [1], [0, 1], [0, 2]]

    expect(TopoSortIterative(graph, 6)).toEqual([4, 5, 0, 2, 3, 1])
  })
  test('Graph with cycle', () => {
    const graph = [[2], [], [3, 5], [0, 1], [0, 2]]

    expect(TopoSortIterative(graph, 6)).toBe(null)
  })
})
