/*
 * Test file for Bellman-Ford Negative Cycle Detection
 */

import { bellmanFordNegativeCycle } from '../BellmanFordNegativeCycle.js'

test('should find shortest distance without negative cycle', () => {
  const graph = [
    [0, 1, 4],
    [0, 2, 5],
    [1, 2, -3],
    [2, 3, 4]
  ]
  const result = bellmanFordNegativeCycle(graph, 4, 0)

  expect(result.hasNegativeCycle).toBe(false)
  expect(result.dist[3]).toBe(5) // shortest distance from 0 to 3
})

test('should detect negative cycle', () => {
  const graph = [
    [0, 1, 1],
    [1, 2, -1],
    [2, 0, -1]
  ]
  const result = bellmanFordNegativeCycle(graph, 3, 0)

  expect(result.hasNegativeCycle).toBe(true)
})
