
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
}

const example = () => {
  const g = new Graph()
  g.addVertex(1)
  g.addVertex(2)
  g.addVertex(3)
  g.addEdge(1, 2)
  g.addEdge(1, 3)
  g.printGraph()
}
