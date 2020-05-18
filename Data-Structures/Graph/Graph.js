class Graph {
  constructor () {
    this.adjacencyMap = {}
  }

  addVertex (v) {
    this.adjacencyMap[v] = []
  }

  containsVertex (vertex) {
    return typeof (this.adjacencyMap[vertex]) !== 'undefined'
  }

  addEdge (v, w) {
    let result = false
    if (this.containsVertex(v) && this.containsVertex(w)) {
      this.adjacencyMap[v].push(w)
      this.adjacencyMap[w].push(v)
      result = true
    }
    return result
  }

  printGraph () {
    const keys = Object.keys(this.adjacencyMap)
    for (const i of keys) {
      const values = this.adjacencyMap[i]
      let vertex = ''
      for (const j of values) { vertex += j + ' ' }
      console.log(i + ' -> ' + vertex)
    }
  }

  /**
   * Prints the Breadth first traversal of the graph from source.
   *
   * @param {number} source The source vertex to start BFS.
   */
  bfs (source) {
    const queue = []
    const visited = new Set()
    queue.unshift([source, 0]) // level of source is 0
    visited.add(source)
    while (queue.length) {
      const front = queue[0]
      const node = front[0]
      const level = front[1]
      queue.shift() // remove the front of the queue
      console.log(`Visited node ${node} at level ${level}.`)
      for (const next of this.adjacencyMap[node]) {
        if (!visited.has(next)) { // not visited
          queue.unshift([next, level + 1]) // level 1 more than current
          visited.add(next)
        }
      }
    }
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
  console.log('Printing the adjacency list:\n')
  g.printGraph()

  // perform a breadth first search
  console.log('\nBreadth first search at node 1:\n')
  g.bfs(1)
}
example()
