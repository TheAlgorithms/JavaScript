// https://projecteuler.net/problem=15
/* Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

// A lattice path is composed of horizontal and vertical lines that pass through lattice points.

export const latticePath = (gridSize) => {
  let paths
  for (let i = 1, paths = 1; i <= gridSize; i++) {
    paths = paths * (gridSize + i) / i
  }
  // The total number of paths can be found using the binomial coefficient (b+a)/a.
  return paths
}

// > latticePath(20))
// 137846528820
