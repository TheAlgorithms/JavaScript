// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    this.adjacencyList = new Map()
  }

  // functions to be implemented

  // addVertex(v)
  // addEdge(v, w)
  // printGraph()

  // bfs(v)
  // dfs(v)

  // add vertex to the graph
  addVertex(v) {
    // initialize the adjacent list with a
    // null array

    this.adjacencyList.set(v, [])
  }

  // add edge to the graph
  addEdge(vertex1, vertex2) {
    // get the list for vertex1 and push the
    // vertex2 denoting edge between vertex1 and vertex2
    this.adjacencyList.get(vertex1).push(vertex2)

    // Since graph is undirected,
    // add an edge from vertext2 to vertex1 as well
    this.adjacencyList.get(vertex2).push(vertex1)
  }

  // Prints the graph's adjacency list
  printGraph(outputFn = (value) => console.log(value)) {
    // get all the vertices
    const vertices = this.adjacencyList.keys()

    // iterate over the vertices
    for (const vertex of vertices) {
      // get the corresponding adjacency list
      // for the vertex
      const neighbors = this.adjacencyList.get(vertex)
      const concatenatedNeighbors = neighbors.join(' ')

      // print the vertex and its adjacency list
      outputFn(`${vertex} -> ${concatenatedNeighbors}`)
    }
  }
}

export { Graph }

// Example of usage:
const graph = new Graph(5);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.printGraph();
// output console output
// A -> B C
// B -> A
// C -> A