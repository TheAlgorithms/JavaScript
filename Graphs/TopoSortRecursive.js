function TopoSort(graph) {
  const n = graph.length
  const result = []
  const path = Array(n).fill(0)
  const visited = Array(n).fill(0)
  function preorder(vertex) {
    visited[vertex] = 1
    path[vertex] = 1
    for (const neighbor of graph[vertex]) {
      if (visited[neighbor] === 0) {
        preorder(neighbor)
      } else if (path[neighbor] === 1) {
        throw new Error('Graph contsins a cycle')
      }
    }
    path[vertex] = 0
    result.push(vertex)
  }
  return function () {
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
        try {
          preorder(i)
        } catch (err) {
          console.log(err)
          return null
        }
      }
    }
    return result.reverse()
  }
}
/**
 *
 * @author {RaviSadam}
 * @name TopoSortRecursive
 * @description -
 * Topological sorting algorithm implementation in JavaScript
 * @summary
 * Topological sorting for Directed Acyclic Graph is a linear ordering of vertices
 * such that for every directed edge u-v, vertex u comes before v in the ordering.
 *
 * @param graph - Graph (adjacency list)
 * @returns {Array} - Gives null if graph has cycle otherwise result array
 *
 */
export function TopoSortRecursive(graph) {
  const topoSort = TopoSort(graph)
  return topoSort()
}
