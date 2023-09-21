class Graph {
  constructor() {
    this.adjacencyMap = {}
    this.numberOfVertex = 0
  }

  addVertex(vertex) {
    this.adjacencyMap[vertex] = []
    this.numberOfVertex++
  }

  containsVertex(vertex) {
    return typeof this.adjacencyMap[vertex] !== undefined
  }

  addEdge(vertex1, vertex2) {
    if (this.containsVertex(vertex1) && this.containsVertex(vertex2)) {
      this.adjacencyMap[vertex1].push(vertex2)
      this.adjacencyMap[vertex2].push(vertex1)
    }
  }

  printGraph(output = (value) => console.log(value)) {
    const keys = Object.keys(this.adjacencyMap)
    for (const i of keys) {
      const values = this.adjacencyMap[i]
      let vertex = ''
      for (const j of values) {
        vertex += j + ' '
      }
      output(i + ' -> ' + vertex)
    }
  }

  /**
   * Prints the Breadth first traversal of the graph from source.
   * @param {number} source The source vertex to start BFS.
   */
  bfs(source, output = (value) => console.log(value)) {
    const queue = [[source, 0]] // level of source is 0
    const visited = new Set()

    while (queue.length) {
      const [node, level] = queue.shift() // remove the front of the queue
      if (visited.has(node)) {
        // visited
        continue
      }

      visited.add(node)
      output(`Visited node ${node} at level ${level}.`)
      for (const next of this.adjacencyMap[node]) {
        queue.push([next, level + 1]) // level 1 more than current
      }
    }
  }

  /**
   * Prints the Depth first traversal of the graph from source.
   * @param {number} source The source vertex to start DFS.
   */
  dfs(source, visited = new Set(), output = (value) => console.log(value)) {
    if (visited.has(source)) {
      // visited
      return
    }

    output(`Visited node ${source}`)
    visited.add(source)
    for (const neighbour of this.adjacencyMap[source]) {
      this.dfs(neighbour, visited, output)
    }
  }

  _topologicalSort(neighbor, visited, stack) {
    // Mark the current node as visited.
    visited[neighbor] = true

    // Recur for all the vertices adjacent to thisvertex
    for (const i of this.adjacencyMap[neighbor]) {
      if (!visited[i]) {
        this._topologicalSort(i, visited, stack)
      }
    }

    // Push current vertex to stack which stores result
    stack.push(neighbor)
  }

  // The function to do Topological Sort. It uses recursive _topologicalSort()
  topologicalSort() {
    const stack = []

    // Mark all the vertices as not visited
    const visited = new Array(this.numberOfVertex)
    visited.fill(false)

    // Call the recursive helper function to store Topological Sort starting from all vertices one by one
    for (let i = 0; i < visited.length; i++) {
      if (visited[i] === false) {
        this._topologicalSort(i + 1, visited, stack)
      }
    }

    // Return stack in reverse order
    return stack.reverse()
  }
}

const example = () => {
  const g = new Graph()
  g.addVertex(1)
  g.addVertex(2)
  g.addVertex(3)
  g.addVertex(4)
  g.addVertex(5)
  g.addEdge(1, 2)
  g.addEdge(1, 3)
  g.addEdge(2, 4)
  g.addEdge(2, 5)

  // Graph
  // 1 -> 2 3
  // 2 -> 1 4 5
  // 3 -> 1
  // 4 -> 2
  // 5 -> 2

  // Printing the adjacency list
  // g.printGraph()

  // Breadth first search at node 1
  g.bfs(1)

  // Depth first search at node 1
  g.dfs(1)

  // Prints Topological sort of given graph
  g.topologicalSort()
}

export { Graph, example }
