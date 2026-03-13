class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Array(vertices);
      this.inDegree = new Array(vertices).fill(0);
  
      for (let i = 0; i < vertices; i++) {
        this.adjList[i] = [];
      }
    }
  
    addEdge(v, w) {
      this.adjList[v].push(w);
      this.inDegree[w]++;//Creating adjacency list
    }
  
    topologicalSort() {
      const result = [];
      const queue = [];
  
      for (let i = 0; i < this.vertices; i++) {
        if (this.inDegree[i] === 0) {
          queue.push(i);
        }
      }
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);//Topological Sorting
  
        for (const neighbor of this.adjList[vertex]) {
          this.inDegree[neighbor]--;
          if (this.inDegree[neighbor] === 0) {
            queue.push(neighbor);
          }
        }
      }
  
      if (result.length !== this.vertices) {
        // The graph has a cycle
        return null;
      }
  
      return result;
    }
  }
  
  
  /*const graph = new Graph(6);
  graph.addEdge(5, 2);
  graph.addEdge(5, 0);
  graph.addEdge(4, 0);
  graph.addEdge(4, 1);
  graph.addEdge(2, 3);
  graph.addEdge(3, 1);
  
  const topologicalOrder = graph.topologicalSort();
  
  if (topologicalOrder) {
    console.log("Topological Ordering:", topologicalOrder);
  } else {
    console.log("The graph contains a cycle.");
  }
  **/