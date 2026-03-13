import { KahnsAlgorithm } from '../KahnsAlgorithm'

/**
 * Helper function to verify if an array is a valid topological sort.
 * For every directed edge from node U to node V, U must come before V in the sort.
 * @param {object} graph - The adjacency list representation of the graph.
 * @param {string[]} sortedNodes - The topologically sorted array of nodes.
 * @returns {boolean} - True if the sort is valid, otherwise false.
 */
const isValidTopologicalSort = (graph, sortedNodes) => {
  const nodePositions = new Map()
  sortedNodes.forEach((node, index) => {
    nodePositions.set(node, index)
  })

  for (const node in graph) {
    if (!nodePositions.has(node)) {
      // This can occur if a cycle is present and not all nodes are sorted.
      continue
    }
    const u_pos = nodePositions.get(node)
    for (const neighbor of graph[node]) {
      // If a neighbor is missing or appears before its dependency, the sort is invalid.
      if (!nodePositions.has(neighbor) || nodePositions.get(neighbor) < u_pos) {
        return false
      }
    }
  }
  return true
}

describe('KahnsAlgorithm', () => {
  /**
   * Test Case 1: A standard Directed Acyclic Graph (DAG).
   * Graph:
   *   5 -> 2, 0
   *   4 -> 0, 1
   *   2 -> 3
   *   3 -> 1
   */
  test('should correctly sort a standard Directed Acyclic Graph', () => {
    const graph = {
      5: ['2', '0'],
      4: ['0', '1'],
      2: ['3'],
      3: ['1'],
      1: [],
      0: []
    }
    const result = KahnsAlgorithm(graph)
    // A topological sort isn't always unique, so we validate its properties.
    expect(result.length).toBe(Object.keys(graph).length)
    expect(isValidTopologicalSort(graph, result)).toBe(true)
  })

  /**
   * Test Case 2: A graph with a clear cycle.
   * Kahn's algorithm detects cycles by failing to process all nodes.
   * Graph: A -> B -> C -> A
   */
  test('should return an incomplete sort for a graph with a cycle', () => {
    const graph = {
      A: ['B'],
      B: ['C'],
      C: ['A']
    }
    const result = KahnsAlgorithm(graph)
    // No node has an in-degree of 0, so the queue is never populated.
    expect(result.length).toBeLessThan(Object.keys(graph).length)
    expect(result).toEqual([])
  })

  /**
   * Test Case 3: A disconnected graph.
   * Component 1: A -> B
   * Component 2: C -> D
   */
  test('should correctly sort a disconnected graph', () => {
    const graph = {
      A: ['B'],
      B: [],
      C: ['D'],
      D: []
    }
    const result = KahnsAlgorithm(graph)
    expect(result.length).toBe(Object.keys(graph).length)
    expect(isValidTopologicalSort(graph, result)).toBe(true)
  })

  /**
   * Test Case 4: An empty graph.
   */
  test('should return an empty array for an empty graph', () => {
    const graph = {}
    const result = KahnsAlgorithm(graph)
    expect(result).toEqual([])
  })

  /**
   * Test Case 5: A graph with a single node.
   */
  test('should return an array with the single node for a single-node graph', () => {
    const graph = { Z: [] }
    const result = KahnsAlgorithm(graph)
    expect(result).toEqual(['Z'])
  })

  /**
   * Test Case 6: A cycle within a larger graph component.
   * Graph: A -> B -> C -> D -> B (cycle: B-C-D)
   */
  test('should handle a cycle within a larger graph', () => {
    const graph = {
      A: ['B'],
      B: ['C'],
      C: ['D'],
      D: ['B']
    }
    const result = KahnsAlgorithm(graph)
    // Only 'A' can be processed before the algorithm stops at the cycle.
    expect(result.length).toBeLessThan(Object.keys(graph).length)
    expect(result).toEqual(['A'])
  })
})
