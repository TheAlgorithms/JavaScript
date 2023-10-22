/*
  Problem: M Coloring Problem
  Given a graph represented as an adjacency matrix and a number M (number of colors), 
  determine if the graph can be colored with up to M colors such that no two adjacent 
  vertices share the same color.

  What is the M Coloring Problem?
  - This problem is about coloring a graph's vertices with at most M different colors 
    such that no two adjacent vertices have the same color.

  Example:
  - Consider a triangle (3 nodes connected cyclically). We'd need 3 colors to color each vertex 
    without adjacent vertices having the same color.

  Solution:
  - We will be using backtracking to solve this question.
  - Color a vertex, then move to an adjacent vertex and try all colors. If a color is valid, 
    continue to the next vertex, else backtrack.
*/

class MColoring {
    constructor(graph, m) {
      this.graph = graph; // adjacency matrix representation
      this.m = m; 
      this.colors = new Array(graph.length).fill(0);
    }
  
    isSafe(vertex, color) {
      for (let i = 0; i < this.graph.length; i++) {
        if (this.graph[vertex][i] && this.colors[i] === color) {
          return false;
        }
      }
      return true;
    }
  
    solveColoring(vertex = 0) {
      if (vertex === this.graph.length) {
        return true;
      }
  
      for (let color = 1; color <= this.m; color++) {
        if (this.isSafe(vertex, color)) {
          this.colors[vertex] = color;
  
          if (this.solveColoring(vertex + 1)) {
            return true;
          }
  
          this.colors[vertex] = 0; // backtrack
        }
      }
      return false;
    }
  
    getSolution() {
      if (this.solveColoring()) {
        return this.colors;
      }
      return [];
    }
  }
  
  export { MColoring }
  