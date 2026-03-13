import { kahnTopologicalSort } from '../KahnsAlgorithm.js'

describe("Kahn's Algorithm - Topological Sort", () => {
  test('returns a valid topological order for a DAG', () => {
    const V = 6
    const edges = [
      [5, 2],
      [5, 0],
      [4, 0],
      [4, 1],
      [2, 3],
      [3, 1]
    ]

    const order = kahnTopologicalSort(V, edges)
    expect(order.length).toBe(V)

    // verify topological property
    const pos = new Array(V)
    for (let i = 0; i < order.length; i++) pos[order[i]] = i

    for (const [u, v] of edges) {
      expect(pos[u]).toBeLessThan(pos[v])
    }
  })

  test('returns empty array when graph contains a cycle', () => {
    const V = 3
    const edges = [
      [0, 1],
      [1, 2],
      [2, 0] // cycle
    ]
    const order = kahnTopologicalSort(V, edges)
    expect(order).toEqual([])
  })

  test('includes isolated nodes', () => {
    const V = 4
    const edges = [
      [0, 1],
      [2, 3]
    ]

    const order = kahnTopologicalSort(V, edges)
    expect(order.length).toBe(V)

    const pos = new Array(V)
    for (let i = 0; i < order.length; i++) pos[order[i]] = i

    for (const [u, v] of edges) {
      expect(pos[u]).toBeLessThan(pos[v])
    }
  })

  test('works with empty graph', () => {
    const V = 0
    const edges = []
    const order = kahnTopologicalSort(V, edges)
    expect(order).toEqual([])
  })
})
