export function kahnTopologicalSort(V, edges) {
  const adj = Array.from({ length: V }, () => [])
  const indegree = new Array(V).fill(0)

  for (const [u, v] of edges) {
    adj[u].push(v)
    indegree[v]++
  }

  const queue = []
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) queue.push(i)
  }

  const topoOrder = []
  let idx = 0
  while (idx < queue.length) {
    const node = queue[idx++]
    topoOrder.push(node)

    for (const nei of adj[node]) {
      indegree[nei]--
      if (indegree[nei] === 0) queue.push(nei)
    }
  }

  if (topoOrder.length !== V) return []
  return topoOrder
}
