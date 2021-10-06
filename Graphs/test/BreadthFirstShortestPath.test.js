import { breadthFirstShortestPath } from '../BreadthFirstShortestPath'

describe('BreadthFirstShortestPath', () => {
  const graph = {
    A: ['B', 'D'],
    B: ['E'],
    C: ['D'],
    D: ['A'],
    E: ['D'],
    F: ['G'],
    G: []
  }
  /*
        A <-> B
        ʌ     |
        |     |
        v     v
  C --> D <-- E

  F --> G
  */

  it('should return the visited nodes', () => {
    expect(breadthFirstShortestPath(graph, 'C', 'E')).toEqual(['C', 'D', 'A', 'B', 'E'])
    expect(breadthFirstShortestPath(graph, 'E', 'B')).toEqual(['E', 'D', 'A', 'B'])
    expect(breadthFirstShortestPath(graph, 'F', 'G')).toEqual(['F', 'G'])
    expect(breadthFirstShortestPath(graph, 'A', 'G')).toEqual([])
  })
})
