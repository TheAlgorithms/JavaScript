class Graph {
  constructor() {
    this.adjacencyObject = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyObject[vertex]) this.adjacencyObject[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyObject[vertex1] && this.adjacencyObject[vertex2]) {
      this.adjacencyObject[vertex1].push(vertex2)
      this.adjacencyObject[vertex2].push(vertex1)
    } else {
      return undefined
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyObject[vertex1] && this.adjacencyObject[vertex2]) {
      this.adjacencyObject[vertex1] = this.adjacencyObject[vertex1].filter(
        (v) => v !== vertex2
      )
      this.adjacencyObject[vertex2] = this.adjacencyObject[vertex2].filter(
        (v) => v !== vertex1
      )
    } else {
      return undefined
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyObject[vertex]) {
      while (this.adjacencyObject[vertex].length) {
        const adjacentVertex = this.adjacencyObject[vertex].pop()
        this.removeEdge(vertex, adjacentVertex)
      }
    } else {
      return undefined
    }
  }

  /**
   * Return DFS(Depth First Search) List Using Recursive Method
   */
  DFS(start) {
    const result = []
    const visited = {}
    const adjacencyObject = this.adjacencyObject

    function dfs(vertex) {
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
  DFS_iterative(start) {
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

  BFS(start) {
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

// example
// const g = new Graph()
// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')
// g.addVertex('D')
// g.addVertex('E')
// g.addVertex('F')

// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('B', 'D')
// g.addEdge('C', 'E')
// g.addEdge('D', 'E')
// g.addEdge('D', 'F')
// g.addEdge('E', 'F')

// g.removeVertex('B')

// console.log(g.BFS('A'))

export { Graph }
