class Graph {
  constructor () {
    this.adjacencyObject = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyObject[vertex]) this.adjacencyObject[vertex] = []
  }

  addEdge (vertex1, vertex2) {
    this.adjacencyObject[vertex1].push(vertex2)
    this.adjacencyObject[vertex2].push(vertex1)
  }

  removeEdge (vertex1, vertex2) {
    this.adjacencyObject[vertex1] = this.adjacencyObject[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyObject[vertex2] = this.adjacencyObject[vertex2].filter(
      (v) => v !== vertex1
    )
  }

  removeVertex (vertex) {
    while (this.adjacencyObject[vertex].length) {
      const adjacentVertex = this.adjacencyObject[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
  }

  /**
   * Return DFS (Depth First Search) List Using Recursive Method
   */
  DFS (start) {
    if (!start) return null

    const result = []
    const visited = {}
    const adjacencyObject = this.adjacencyObject

    function dfs (vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyObject[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      })
    }

    dfs(start)
    return result
  }

  /**
   * Return DFS(Depth First Search) List Using Iteration
   */
  DFSIterative (start) {
    if (!start) return null

    const stack = [start]
    const visited = {}
    visited[start] = true

    const result = []
    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyObject[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }

  BFS (start) {
    if (!start) return null

    const queue = [start]
    const visited = {}
    visited[start] = true

    let currentVertex
    const result = []

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyObject[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

export { Graph }
