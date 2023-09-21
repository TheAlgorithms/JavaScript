import { Graph } from '../Graph'

describe('Graph', () => {
  const graph = new Graph()

  for (let v = 1; v <= 5; v++) {
    graph.addVertex(v)
  }

  graph.addEdge(1, 2)
  graph.addEdge(1, 3)
  graph.addEdge(2, 4)
  graph.addEdge(2, 5)

  it('returns any valid topological sort', () => {
    expect([
      [1, 2, 3, 4, 5],
      [1, 3, 2, 4, 5],
      [1, 3, 2, 5, 4],
      [1, 2, 4, 3, 5],
      [1, 2, 5, 3, 4],
      [1, 2, 4, 5, 3],
    ]).toContain(graph.topologicalSort())
  })
})
