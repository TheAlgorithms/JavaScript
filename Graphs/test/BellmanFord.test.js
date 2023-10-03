import { BellmanFord } from '../BellmanFord.js'

test('Test Case 1', () => {
  const V = 5
  const E = 8
  const destination = 3
  const graph = [
    [0, 1, -1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [1, 4, 2],
    [3, 2, 5],
    [3, 1, 1],
    [4, 3, -3]
  ]
  const dist = BellmanFord(graph, V, E, 0, destination)
  expect(dist).toBe(-2)
})
test('Test Case 2', () => {
  const V = 6
  const E = 9
  const destination = 4
  const graph = [
    [0, 1, 3],
    [0, 3, 6],
    [0, 5, -1],
    [1, 2, -3],
    [1, 4, -2],
    [5, 2, 5],
    [2, 3, 1],
    [4, 3, 5],
    [5, 4, 2]
  ]
  const dist = BellmanFord(graph, V, E, 0, destination)
  expect(dist).toBe(1)
})
test('Test Case 3', () => {
  const V = 4
  const E = 5
  const destination = 1
  const graph = [
    [0, 3, -1],
    [0, 2, 4],
    [3, 2, 2],
    [3, 1, 5],
    [2, 1, -1]
  ]
  const dist = BellmanFord(graph, V, E, 0, destination)
  expect(dist).toBe(0)
})
