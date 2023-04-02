import { Graph } from '../Graph'

describe('Test Graph', () => {
  const vertices = [1, 2, 3, 4, 5]
  const graph = new Graph()

  // adding vertices
  for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
  }

  // adding edges
  graph.addEdge(1, 2)
  graph.addEdge(1, 3)
  graph.addEdge(2, 4)
  graph.addEdge(2, 5)

  //testing Topological Sort
  it('topological sort', () => {
    expect(graph.topologicalSort()).toEqual([1, 3, 2, 5, 4])
  })

})
