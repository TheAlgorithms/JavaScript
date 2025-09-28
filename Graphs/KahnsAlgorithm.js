// Kahn's Algorithm for Topological Sort
function kahnTopologicalSort(vertices, edges) {
  const adj = new Map();
  const indegree = new Array(vertices).fill(0);

  // Build adjacency list & indegree count
  for (let [u, v] of edges) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < vertices; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const topo = [];
  while (queue.length > 0) {
    const node = queue.shift();
    topo.push(node);

    if (adj.has(node)) {
      for (let neigh of adj.get(node)) {
        indegree[neigh]--;
        if (indegree[neigh] === 0) queue.push(neigh);
      }
    }
  }

  if (topo.length !== vertices) {
    throw new Error("Graph has a cycle, topological sort not possible");
  }

  return topo;
}

// Example usage
const vertices = 6;
const edges = [[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]];
console.log("Topological Sort:", kahnTopologicalSort(vertices, edges));
