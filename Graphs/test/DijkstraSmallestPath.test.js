import { solve } from '../DijkstraSmallestPath.js'

// Graph represented as adjacency object where graph[u][v] = weight
// Example graph:
// A --1-- B --2-- C
//  \3               \
//    \              5
//      \--4-- D -----
// Shortest distances from A: A:0, B:1, C:3 (A->B->C), D:4 (A->D)

test('DijkstraSmallestPath returns shortest distances and paths', () => {
  const graph = {
    A: { B: 1, D: 4 },
    B: { A: 1, C: 2 },
    C: { B: 2, D: 5 },
    D: { A: 4, C: 5 }
  }

  const res = solve(graph, 'A')

  expect(res.A.dist).toBe(0)
  expect(res.B.dist).toBe(1)
  expect(res.C.dist).toBe(3)
  expect(res.D.dist).toBe(4)

  // Path arrays exclude the source by implementation (solutions[s] = [])
  expect([...res.B]).toEqual(['B'])
  expect([...res.C]).toEqual(['B', 'C'])
  expect([...res.D]).toEqual(['D'])
})
