// https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm
function fordFulkerson(capacity, source, sink) {
  const V = capacity.length;
  const residualCapacity = capacity.map((arr) => arr.slice());
  const parent = Array(V).fill(-1);
  let maxFlow = 0;
  
  function bfs(source, sink) {
    const visited = Array(V).fill(false);
    const queue = [source];
    visited[source] = true;
    parent[source] = -1;
  
    while (queue.length > 0) {
      const u = queue.shift();
  
      for (let v = 0; v < V; v++) {
        if (!visited[v] && residualCapacity[u][v] > 0) {
          if (v === sink) {
            parent[v] = u;
            return true;
          }
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }
    return false;
  }
  
  while (bfs(source, sink)) {
    let pathFlow = Infinity;
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      pathFlow = Math.min(pathFlow, residualCapacity[u][v]);
    }
  
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      residualCapacity[u][v] -= pathFlow;
      residualCapacity[v][u] += pathFlow;
    }
  
    maxFlow += pathFlow;
  }
  
  return maxFlow;
}
  
export { fordFulkerson };
  