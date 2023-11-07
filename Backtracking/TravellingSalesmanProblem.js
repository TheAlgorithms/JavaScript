/**
 * Solves the Traveling Salesman Problem (TSP) using backtracking.
 * @see https://www.geeksforgeeks.org/travelling-salesman-problem-implementation-using-backtracking/
 * @param {number[][]} graph - The adjacency matrix representing distances between cities.
 * @returns {Object} An object containing the optimal tour and its cost.
 */

function tsp(graph) {
  const numCities = graph.length
  const visited = new Array(numCities).fill(false)

  let minTourCost = Number.MAX_SAFE_INTEGER
  let bestTour = []

  function backtrack(currentCity, tour, tourCost) {
    if (tour.length === numCities) {
      if (graph[currentCity][tour[0]] !== 0) {
        tourCost += graph[currentCity][tour[0]]
        if (tourCost < minTourCost) {
          minTourCost = tourCost
          bestTour = [...tour, tour[0]]
        }
      }
      return
    }

    for (let nextCity = 0; nextCity < numCities; nextCity++) {
      if (!visited[nextCity] && graph[currentCity][nextCity] !== 0) {
        visited[nextCity] = true
        tour.push(nextCity)
        tourCost += graph[currentCity][nextCity]
        backtrack(nextCity, tour, tourCost)
        tour.pop()
        visited[nextCity] = false
        tourCost -= graph[currentCity][nextCity]
      }
    }
  }

  visited[0] = true
  backtrack(0, [0], 0)

  return { tour: bestTour, cost: minTourCost }
}

// Example usage:
const distanceGraph = [
  [0, 29, 20, 21],
  [29, 0, 15, 18],
  [20, 15, 0, 23],
  [21, 18, 23, 0]
]

const result = tsp(distanceGraph)
console.log('Optimal Tour:', result.tour)
console.log('Minimum Tour Cost:', result.cost)
