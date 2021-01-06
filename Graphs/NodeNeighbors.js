class Graph{
  // Generic graph: the algorithm works regardless of direction or weight
  constructor(){
    this.edges = []
  }

  addEdge(node1, node2){
    // Adding edges to the graph
    this.edges.push({
      node1,
      node2
    })
  }

  nodeNeighbors(node){
    // Returns an array with all of the node neighbors
    let neighbors = []
    for (let i = 0; i < this.edges.length; i++) {
      // Checks if they have an edge between them and if the neighbor is not
      // already in the neighbors array
      if (this.edges[i].node1 === node && !(neighbors.includes(this.edges[i].node2))) {
        neighbors.push(this.edges[i].node2)
      }
      else if (this.edges[i].node2 === node && !(neighbors.includes(this.edges[i].node1))) {
        neighbors.push(this.edges[i].node1)
      }
    }
    return neighbors
  }
}

(() => {
  let graph = new Graph()
  graph.addEdge(1, 2)
  graph.addEdge(2, 3)
  graph.addEdge(3, 5)
  graph.addEdge(1, 5)
  console.log(graph.nodeNeighbors(1))
})()
