class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Array(vertices);
      for (let i = 0; i < vertices; i++) {
        this.adjList[i] = [];
      }
    }
  
    addEdge(v, w) {
      this.adjList[v].push(w);
      this.adjList[w].push(v);//Creating Adjacency list.
    }
  
    isCyclic() {
      const visited = new Array(this.vertices).fill(false);
  
      for (let i = 0; i < this.vertices; i++) {
        if (!visited[i]) {
          if (this.isCyclicUtil(i, -1, visited)) {//Checking if graph contains a cycle.
            return true;
          }
        }
      }
  
      return false;
    }
  
    isCyclicUtil(v, parent, visited) {
      visited[v] = true;
  
      for (const neighbor of this.adjList[v]) {
        if (!visited[neighbor]) {
          if (this.isCyclicUtil(neighbor, v, visited)) {
            return true;
          }
        } else if (neighbor !== parent) {
          return true;
        }
      }
  
      return false;
    }
  }
  
  /*const graph = new Graph(4);
  graph.addEdge(0, 1);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  
  if (graph.isCyclic()) {
    console.log("The graph contains a cycle.");
  } else {
    console.log("The graph does not contain a cycle.");
  }
  **/