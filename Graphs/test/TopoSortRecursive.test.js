import { TopoSortRecursive } from '../TopoSortRecursive'

describe('Recursive Topological Sorting', () => {
  test('Graph without cycle', () => {
    const graph = [[], [], [3], [1], [0, 1], [0, 2]]

    expect(TopoSortRecursive(graph, 6)).toEqual([5, 4, 2, 3, 1, 0])
  })
  test('Graph with cycle', () => {
    const graph = [[2], [], [3, 5], [0, 1], [0, 2]]

    expect(TopoSortRecursive(graph, 6)).toBe(null)
  })
  test('Graph with disconnected components', () => {
    const graph = [[1, 2], [3], [3], [], [5], []]
    expect(TopoSortRecursive(graph, 6)).toEqual([4, 5, 0, 2, 1, 3])
  })
})
