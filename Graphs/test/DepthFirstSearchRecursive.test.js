import { GraphUnweightedUndirected } from '../DepthFirstSearchRecursive.js'

test('DFSRecursive finds existing value and rejects non-existing', () => {
  const g = new GraphUnweightedUndirected()
  g.addEdge(1, 2)
  g.addEdge(2, 3)
  g.addEdge(2, 4)
  g.addEdge(3, 5)

  expect(g.DFSRecursive(5, 1)).toBe(true) // path 5->3->2->1 exists
  expect(g.DFSRecursive(5, 100)).toBe(false) // 100 not in graph
})
