import { GraphWeightedUndirectedAdjacencyList } from '../KruskalMST.js'

function totalWeight(graph) {
  // connections: { u: { v: w, ... }, ... }
  let sum = 0
  const seen = new Set()
  for (const u of Object.keys(graph.connections)) {
    for (const v of Object.keys(graph.connections[u])) {
      const key = u < v ? `${u}-${v}` : `${v}-${u}`
      if (!seen.has(key)) {
        seen.add(key)
        sum += graph.connections[u][v]
      }
    }
  }
  return sum
}

test('KruskalMST builds a minimum spanning tree', () => {
  const g = new GraphWeightedUndirectedAdjacencyList()
  // Graph:
  // 1-2(1), 2-3(2), 3-4(1), 3-5(100), 4-5(5)
  g.addEdge('1', '2', 1)
  g.addEdge('2', '3', 2)
  g.addEdge('3', '4', 1)
  g.addEdge('3', '5', 100) // heavy edge to be excluded
  g.addEdge('4', '5', 5)

  const mst = g.KruskalMST()

  // MST should have nodes: 1,2,3,4,5
  expect(Object.keys(mst.connections).sort()).toEqual(['1', '2', '3', '4', '5'])

  // It should have exactly nodes-1 = 4 edges
  let edgeCount = 0
  const seen = new Set()
  for (const u of Object.keys(mst.connections)) {
    for (const v of Object.keys(mst.connections[u])) {
      const key = u < v ? `${u}-${v}` : `${v}-${u}`
      if (!seen.has(key)) {
        seen.add(key)
        edgeCount++
      }
    }
  }
  expect(edgeCount).toBe(4)

  // Total weight should be 1 (1-2) + 2 (2-3) + 1 (3-4) + 5 (4-5) = 9
  // (Edge 3-5 with weight 100 must not be selected)
  expect(totalWeight(mst)).toBe(9)

  // Ensure excluded heavy edge is not present
  expect(mst.connections['3']['5']).toBeUndefined()
  expect(mst.connections['5']['3']).toBeUndefined()
})
