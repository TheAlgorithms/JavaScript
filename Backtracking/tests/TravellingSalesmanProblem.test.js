import { tsp } from '../TravellingSalesmanProblem'

describe('Traveling Salesman Problem (TSP)', () => {
  it('should find the optimal tour for a given distance graph', () => {
    const distanceGraph = [
      [0, 29, 20, 21],
      [29, 0, 15, 18],
      [20, 15, 0, 23],
      [21, 18, 23, 0]
    ]

    const result = tsp(distanceGraph)

    // The optimal tour for the provided graph is [0, 2, 1, 3, 0].
    expect(result.tour).toEqual([0, 2, 1, 3, 0])

    // The minimum tour cost for the provided graph is 59.
    expect(result.cost).toBe(59)
  })
})
