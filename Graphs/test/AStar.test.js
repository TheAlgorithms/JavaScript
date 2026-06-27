import { aStarSearch } from '../AStar.js'

const graph = {
  A: [
    ['B', 1],
    ['C', 4]
  ],
  B: [
    ['C', 1],
    ['D', 5]
  ],
  C: [['D', 1]],
  D: []
}

const heuristics = { A: 2, B: 2, C: 1, D: 0 }
const heuristic = (node) => heuristics[node]
const zeroHeuristic = () => 0

test('Finds the shortest path using an admissible heuristic', () => {
  expect(aStarSearch(graph, 'A', 'D', heuristic)).toEqual({
    path: ['A', 'B', 'C', 'D'],
    cost: 3
  })
})

test('Matches Dijkstra (zero heuristic) on the same graph', () => {
  expect(aStarSearch(graph, 'A', 'D', zeroHeuristic)).toEqual({
    path: ['A', 'B', 'C', 'D'],
    cost: 3
  })
})

test('Returns a path with cost 0 when start equals target', () => {
  expect(aStarSearch(graph, 'A', 'A', heuristic)).toEqual({
    path: ['A'],
    cost: 0
  })
})

test('Returns null when no path exists', () => {
  const disconnectedGraph = { A: [['B', 1]], B: [], C: [] }
  expect(aStarSearch(disconnectedGraph, 'A', 'C', zeroHeuristic)).toBeNull()
})

test('Finds the shortest path in a larger graph with multiple routes', () => {
  const largerGraph = {
    A: [
      ['B', 2],
      ['C', 5]
    ],
    B: [
      ['D', 4],
      ['E', 2]
    ],
    C: [['E', 1]],
    D: [['F', 1]],
    E: [['F', 4]],
    F: []
  }
  const largerHeuristic = () => 0

  expect(aStarSearch(largerGraph, 'A', 'F', largerHeuristic)).toEqual({
    path: ['A', 'B', 'D', 'F'],
    cost: 7
  })
})
