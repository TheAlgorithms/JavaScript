/**
 * A* Search Algorithm
 *
 * Finds the shortest path between a start node and a target node in a
 * weighted graph, using a heuristic function to guide the search toward
 * the target, generally exploring fewer nodes than an uninformed search
 * such as Dijkstra's algorithm.
 *
 * The algorithm is only guaranteed to find the true shortest path if the
 * heuristic is admissible, i.e. it never overestimates the real cost from
 * a node to the target. Passing a heuristic that always returns 0 makes
 * A* behave exactly like Dijkstra's algorithm.
 *
 * For more info: https://en.wikipedia.org/wiki/A*_search_algorithm
 *
 * @param {Object<string, Array<[string, number]>>} graph - Adjacency list mapping each node to an array of [neighbor, weight] pairs.
 * @param {string} start - The node to start the search from.
 * @param {string} target - The node to search for.
 * @param {(node: string) => number} heuristic - Estimated cost from a node to the target.
 * @returns {{ path: string[], cost: number } | null} The shortest path from start to target and its total cost, or null if no path exists.
 *
 * @example
 * const graph = {
 *   A: [['B', 1], ['C', 4]],
 *   B: [['C', 1], ['D', 5]],
 *   C: [['D', 1]],
 *   D: []
 * }
 * const heuristic = (node) => ({ A: 2, B: 2, C: 1, D: 0 })[node]
 *
 * aStarSearch(graph, 'A', 'D', heuristic)
 * // => { path: ['A', 'B', 'C', 'D'], cost: 3 }
 */

import { KeyPriorityQueue } from '../Data-Structures/Heap/KeyPriorityQueue.js'

const reconstructPath = (cameFrom, current) => {
  const path = [current]
  while (cameFrom.has(current)) {
    current = cameFrom.get(current)
    path.unshift(current)
  }
  return path
}

function aStarSearch(graph, start, target, heuristic) {
  const gScore = new Map([[start, 0]])
  const cameFrom = new Map()

  const openSet = new KeyPriorityQueue()
  openSet.push(start, heuristic(start))

  while (!openSet.isEmpty()) {
    const current = openSet.pop()

    if (current === target) {
      return {
        path: reconstructPath(cameFrom, current),
        cost: gScore.get(current)
      }
    }

    const neighbors = graph[current] || []
    for (const [neighbor, weight] of neighbors) {
      const tentativeGScore = gScore.get(current) + weight

      if (tentativeGScore < (gScore.get(neighbor) ?? Infinity)) {
        cameFrom.set(neighbor, current)
        gScore.set(neighbor, tentativeGScore)
        openSet.update(neighbor, tentativeGScore + heuristic(neighbor))
      }
    }
  }

  return null
}

export { aStarSearch }
