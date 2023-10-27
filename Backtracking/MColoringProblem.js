/**
 * Colors a graph using up to m colors such that no two adjacent vertices share the same color.
 * @param {number[][]} graph - Adjacency matrix of the graph, using 0 for no edge.
 * @param {number} m - The number of colors to use.
 * @returns {?Array.<number>} A valid M-coloring of the graph using colors 1 to m, or null if none exists.
 * @see https://en.wikipedia.org/wiki/Graph_coloring
 */
function mColoring(graph, m) {
  const colors = new Array(graph.length).fill(0)

  // Check if it's safe to color a vertex with a given color.
  function isSafe(vertex, color) {
    for (let i = 0; i < graph.length; i++) {
      if (graph[vertex][i] && colors[i] === color) {
        return false
      }
    }
    return true
  }

  // Use backtracking to try and color the graph.
  function solveColoring(vertex = 0) {
    if (vertex === graph.length) {
      return true
    }

    for (let color = 1; color <= m; color++) {
      if (isSafe(vertex, color)) {
        colors[vertex] = color

        if (solveColoring(vertex + 1)) {
          return true
        }

        // If no solution, backtrack.
        colors[vertex] = 0
      }
    }
    return false
  }

  // If coloring is possible, return the colors.
  if (solveColoring()) {
    return colors
  }
  return null
}

export { mColoring }
