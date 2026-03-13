import { KahnsAlgorithm } from '../Kahn.js'

// Check if a given order is a valid topological sort
function isValidTopologicalOrder(order, numNodes, edges) {
  if (order.length !== numNodes) return false

  const position = new Map()
  order.forEach((node, idx) => position.set(node, idx))

  for (const [u, v] of edges) {
    // u must come before v in topo order
    if (position.get(u) > position.get(v)) return false
  }
  return true
}

test('Test Case 1', () => {
  const numNodes = 6
  const edges = [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1]
  ]
  const topoOrder = KahnsAlgorithm(numNodes, edges)

  expect(isValidTopologicalOrder(topoOrder, numNodes, edges)).toBe(true)
})

test('Test Case 2', () => {
  const numNodes = 4
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3]
  ]
  const topoOrder = KahnsAlgorithm(numNodes, edges)

  // Only one valid order exists
  expect(topoOrder).toStrictEqual([0, 1, 2, 3])
})

test('Test Case 3 (Cycle Detection)', () => {
  const numNodes = 3
  const edges = [
    [0, 1],
    [1, 2],
    [2, 0]
  ]
  const topoOrder = KahnsAlgorithm(numNodes, edges)

  expect(topoOrder).toStrictEqual([])
})
