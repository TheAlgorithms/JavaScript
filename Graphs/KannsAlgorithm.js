/**
 * @author {RaviSadam}
 * @name kannsAlgorithm
 * @description -
 * Kann's Algorithm implementation in JavaScript
 * @summary
 * Kann's Algorithm is used for topological sorting in directed acyclic graphs
 *
 * @param graph - Graph [[v1,v2],[v3,v4,v5]..]
 * @param n - number of vertices
 * @returns {Array} - Empty array if cycle is detected or else result array;
 *
 */

export function kannsAlgorithm(graph, n) {
  if (n === null || n === undefined) throw Error('Invalid n was given')
  const inorder = Array(n).fill(0)
  const result = []
  for (let entry of graph) {
    for (let edge of entry) {
      inorder[edge] += 1
    }
  }
  const queue = []
  console.log(inorder)
  for (let i = 0; i < n; i++) {
    if (inorder[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length != 0) {
    const node = queue[0]
    result.push(node)
    queue.splice(0, 1)
    for (let nei of graph[node]) {
      inorder[nei] -= 1
      if (inorder[nei] == 0) {
        queue.push(nei)
      }
    }
  }
  if (result.length != n) return []
  return result
}
