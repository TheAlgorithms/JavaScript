//https://en.wikipedia.org/wiki/Edge_coloring

// M Coloring Problem
// Given an adjacency matrix representation of a graph and a number M, 
// determine if the graph can be colored with up to M colors such that 
// no two adjacent vertices share the same color.

function mColoring(graph, m) {
  const colors = new Array(graph.length).fill(0);

  // Check if it's safe to color a vertex with a given color.
  function isSafe(vertex, color) {
    for (let i = 0; i < graph.length; i++) {
      if (graph[vertex][i] && colors[i] === color) {
        return false;
      }
    }
    return true;
  }

  // Use backtracking to try and color the graph.
  function solveColoring(vertex = 0) {
    if (vertex === graph.length) {
      return true;
    }

    for (let color = 1; color <= m; color++) {
      if (isSafe(vertex, color)) {
        colors[vertex] = color;
        
        if (solveColoring(vertex + 1)) {
          return true;
        }

        // If no solution, backtrack.
        colors[vertex] = 0;
      }
    }
    return false;
  }

  // If coloring is possible, return the colors.
  if (solveColoring()) {
    return colors;
  }
  return null;
}

export { mColoring };
