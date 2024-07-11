function TopoSortRecursiveFunction(graph, visited, stack, path, vertex) {
  //marking current vertex as visited
  visited.add(vertex)

  //marking current vertex as being part of current path
  path[vertex] = 1
  if (graph[vertex] && graph[vertex].length !== 0) {
    for (const neighbor of graph[vertex]) {
      //if neighbor is not visited then visit else continue
      if (!visited.has(neighbor)) {
        TopoSortRecursiveFunction(graph, visited, stack, path, neighbor)
      } else if (path[neighbor] == 1) return
    }
  }

  //unmarking vertex
  path[vertex] = 0

  //visited all vertex coming after the current vertex
  //so added to stack
  stack.push(vertex)
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
  const n = graph.length
  const stack = []
  //visited set for keep tracking of visited vertises
  const visited = new Set()

  //path array for keep tacking of vertices
  //visited in current path

  const path = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      TopoSortRecursiveFunction(graph, visited, stack, path, i)
    }
  }
  for (const value of path) {
    if (value === 1) return null
  }
  //reverse the stack for getting exact topological order
  stack.reverse()
  return stack
}
