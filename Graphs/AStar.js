/**
 * A* Search Algorithm
 * https://en.wikipedia.org/wiki/A*_search_algorithm
 *
 * A* finds the shortest path from a start node to a goal node
 * using f(n) = g(n) + h(n).
 */

export function aStar(graph, start, goals, heuristic) {
  const goalSet =
    goals instanceof Set
      ? goals
      : new Set(Array.isArray(goals) ? goals : [goals])

  if (!Object.prototype.hasOwnProperty.call(graph, start)) {
    throw new RangeError('Start node not found in graph')
  }

  if (heuristic[start] === undefined) {
    throw new RangeError('Heuristic value missing for start node')
  }

  const costs = { [start]: 0 }
  const parent = { [start]: null }
  const priorityQueue = [{ f: heuristic[start], g: 0, node: start }]

  while (priorityQueue.length > 0) {
    let minIndex = 0
    for (let i = 1; i < priorityQueue.length; i++) {
      if (
        priorityQueue[i].f < priorityQueue[minIndex].f ||
        (priorityQueue[i].f === priorityQueue[minIndex].f &&
          priorityQueue[i].g < priorityQueue[minIndex].g)
      ) {
        minIndex = i
      }
    }

    const { g: currentCost, node: currentNode } = priorityQueue.splice(
      minIndex,
      1
    )[0]

    if (currentCost > costs[currentNode]) {
      continue
    }

    if (goalSet.has(currentNode)) {
      const path = []
      let node = currentNode
      while (node !== null) {
        path.push(node)
        node = parent[node]
      }
      path.reverse()
      return path
    }

    for (const [neighbor, edgeCost] of graph[currentNode]) {
      if (heuristic[neighbor] === undefined) {
        throw new RangeError('Heuristic value missing for neighbor node')
      }

      const newCost = currentCost + edgeCost

      if (newCost < (costs[neighbor] ?? Infinity)) {
        costs[neighbor] = newCost
        parent[neighbor] = currentNode
        priorityQueue.push({
          f: newCost + heuristic[neighbor],
          g: newCost,
          node: neighbor
        })
      }
    }
  }

  return null
}
