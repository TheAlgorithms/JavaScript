// https://en.wikipedia.org/wiki/Neighbourhood_(graph_theory)

class Graph {
  // Generic graph: the algorithm works regardless of direction or weight
  constructor () {
    this.edges = []
  }

  addEdge (node1, node2) {
    // Adding edges to the graph
    this.edges.push({
      node1,
      node2
    })
  }

  nodeNeighbors (node) {
    // Returns an array with all of the node neighbors
    const neighbors = new Set()
    for (let edge of this.edges) {
      // Checks if they have an edge between them and if the neighbor is not
      // already in the neighbors array
      if (edge.node1 === node && !(neighbors.has(edge.node2))) {
        neighbors.add(edge.node2)
      } else if (edge.node2 === node && !(neighbors.has(edge.node1))) {
        neighbors.add(edge.node1)
      }
    }
    return neighbors
  }
}

(() => {
  const graph = new Graph()
  graph.addEdge(1, 2)
  graph.addEdge(2, 3)
  graph.addEdge(3, 5)
  graph.addEdge(1, 5)
  console.log(graph.nodeNeighbors(1))
})()
