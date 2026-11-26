import { aStar } from '../AStar'

describe('AStar', () => {
  const graph = {
    S: [
      ['A', 3],
      ['B', 1],
      ['C', 5]
    ],
    A: [
      ['G1', 10],
      ['E', 7]
    ],
    B: [
      ['C', 2],
      ['F', 2]
    ],
    C: [['G3', 11]],
    D: [
      ['S', 6],
      ['B', 4],
      ['G2', 5]
    ],
    E: [['G1', 2]],
    F: [['D', 1]],
    G1: [],
    G2: [],
    G3: [['F', 0]]
  }

  const heuristic = {
    S: 8,
    A: 9,
    B: 1,
    C: 3,
    D: 4,
    E: 1,
    F: 5,
    G1: 0,
    G2: 0,
    G3: 0
  }

  it('should find the shortest path to the nearest goal', () => {
    expect(aStar(graph, 'S', new Set(['G1', 'G2', 'G3']), heuristic)).toEqual([
      'S',
      'B',
      'F',
      'D',
      'G2'
    ])
  })

  it('should return null when no path exists', () => {
    const isolatedGraph = { S: [], G1: [] }
    const isolatedHeuristic = { S: 1, G1: 0 }
    expect(
      aStar(isolatedGraph, 'S', new Set(['G1']), isolatedHeuristic)
    ).toBeNull()
  })

  it('should throw RangeError for unknown start node', () => {
    expect(() => aStar(graph, 'X', new Set(['G1']), heuristic)).toThrow(
      RangeError
    )
  })
})
