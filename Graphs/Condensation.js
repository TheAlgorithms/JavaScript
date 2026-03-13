/**
 * Condensation via Kosaraju's algorithm
 *
 * @see https://cp-algorithms.com/graph/strongly-connected-components.html
 * This file computes the strongly connected components (SCCs) and the
 * condensation (component DAG) for a directed graph given as an edge list.
 * It uses the project's existing Kosaraju implementation (Kosaraju.js).
 */

import { kosaraju } from './Kosaraju.js'

/**
 * Compute SCCs and the condensation graph (component DAG) for a directed graph.
 * @param {Array<Array<number>>} graph edges as [u, v]
 * @returns {{sccs: Array<Array<number>>, condensation: Array<Array<number>>}}
 */

function condensation(graph) {
  // Using Kosaraju implementation to compute SCCs
  const sccs = kosaraju(graph)

  // Build adjacency map to include isolated nodes
  const g = {}
  const addNode = (n) => {
    if (!(n in g)) g[n] = new Set()
  }
  for (const [u, v] of graph) {
    addNode(u)
    addNode(v)
    g[u].add(v)
  }

  // Map node -> component index (string keys)
  const compIndex = {}
  for (let i = 0; i < sccs.length; i++) {
    for (const node of sccs[i]) compIndex[String(node)] = i
  }

  // Build condensation adjacency list (component graph)
  const condensationSets = Array.from({ length: sccs.length }, () => new Set())
  for (const u of Object.keys(g)) {
    const ci = compIndex[u]
    if (ci === undefined) continue
    for (const v of g[u]) {
      const cj = compIndex[String(v)]
      if (cj === undefined) continue
      if (ci !== cj) condensationSets[ci].add(cj)
    }
  }

  const condensation = condensationSets.map((s) => Array.from(s))

  return { sccs, condensation, compIndex }
}

export { condensation }

/**
 * Time and Space Complexity
 *
 * Kosaraju's algorithm (finding SCCs) and condensation graph construction:
 *
 * - Time complexity: O(V + E)
 *   - Building the adjacency list from the input edge list: O(E)
 *   - Running Kosaraju's two DFS passes over all vertices and edges: O(V + E)
 *   - Building the component index and condensation edges: O(V + E)
 *   Overall: O(V + E), where V is the number of vertices and E is the number of edges.
 *
 * - Space complexity: O(V + E)
 *   - Adjacency lists (graph): O(V + E)
 *   - Kosaraju bookkeeping (stacks, visited sets, topo order, sccs, compIndex): O(V)
 *   - Condensation adjacency structures: O(C + E') where C <= V and E' <= E, so
 *     bounded by O(V + E).
 *   Overall: O(V + E).
 *
 * Notes:
 * - Recursion may use O(V) call-stack space in the worst case during DFS.
 * - Constants depend on the data-structures used (Sets/Arrays), but the
 *   asymptotic bounds above hold for this implementation.
 */

/**
 * Visual diagram and usage
 *
 * Consider the directed edge list:
 *
 *   edges = [
 *     [1,2], [2,3], [3,1], // cycle among 1,2,3
 *     [2,4],               // edge from the first cycle to node 4
 *     [4,5], [5,6], [6,4]  // cycle among 4,5,6
 *   ]
 *
 * Original graph (conceptual):
 *
 *     1 --> 2 --> 4 --> 5
 *     ^     |           |
 *     |     v           v
 *     3 <-- -          6
 *
 * Strongly connected components (SCCs) in this graph:
 *
 *   SCC A: [1, 2, 3]   // a cycle 1->2->3->1
 *   SCC B: [4, 5, 6]   // a cycle 4->5->6->4
 *
 * Condensation graph (component DAG):
 *
 *   [A] ---> [B]
 *
 * Where each node in the condensation is a whole SCC from the original graph.
 *
 * Example return values from `condensation(edges)`:
 *
 *   {
 *     sccs: [[1,2,3], [4,5,6]],
 *     condensation: [[1], []], // component 0 has an edge to component 1
 *     compIndex: { '1': 0, '2': 0, '3': 0, '4': 1, '5': 1, '6': 1 }
 *   }
 *
 * Usage:
 *
 *   const edges = [[1,2],[2,3],[3,1],[2,4],[4,5],[5,6],[6,4]]
 *   const { sccs, condensation, compIndex } = condensation(edges)
 *
 * Interpretation summary:
 * - `sccs` is an array of components; each component is an array of original nodes.
 * - `condensation` is the adjacency list of the component DAG; indices refer to `sccs`.
 * - `compIndex` maps an original node (string key) to its component index.
 *
 * This ASCII diagram and mapping should make it easy to visualize how the
 * condensation function groups cycles and produces a DAG of components.
 */
