import { createGraph, djikstra } from '../Dijkstra.js'

// Undirected weighted graph
// 0 --2-- 1 --3-- 3 --4-- 4
//  |      |       \
// 5|      1        1
//  |      |          
//  2 ---- 2 ---------
// From source 0, shortest distances should be:
// 0:0, 1:2, 2:3 (0->1->2), 3:4 (0->1->2->3), 4:8 (0->1->2->3->4)

test('Dijkstra shortest distances from source 0', () => {
  const V = 5
  const E = [
    [0, 1, 2],
    [0, 2, 5],
    [1, 2, 1],
    [1, 3, 3],
    [2, 3, 1],
    [3, 4, 4]
  ]

  const graph = createGraph(V, E)
  const dist = djikstra(graph, V, 0)

  const expected = [0, 2, 3, 4, 8]
  for (let i = 0; i < V; i++) {
    expect(dist[i][0]).toBe(expected[i])
  }

  // parent of source should be -1 by implementation
  expect(dist[0][1]).toBe(-1)
})
