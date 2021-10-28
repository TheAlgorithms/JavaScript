/*
  Source:
    https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm

  Complexity:
    O(|V|^3) where V is the set of vertices
*/

const FloydWarshall = (dist) => {
  // Input:- dist: 2D Array where dist[i][j] = edge weight b/w i and j
  // Output:- dist: 2D Array where dist[i][j] = shortest dist b/w i and j
  const n = dist.length
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          // dist from i to j via k is lesser than the current distance
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }
  return dist
}

export { FloydWarshall }

// For the following graph (edge weights are shown in brackets)
//  4       1       dist[1][2] = dist[2][1] = 1
//   \  (2)/ \      dist[1][3] = dist[3][1] = 2
//    \   /   \(1)  dist[1][4] = dist[4][1] = Infinity
//  (1)\ /     \    dist[3][4] = dist[4][3] = 1
//      3       2   dist[2][4] = dist[4][2] = Infinity
//                  dist[2][3] = dist[3][2] = Infinity
// Output should be:
// [ [0, 1, 2, 3],
//   [1, 0, 3, 4],
//   [2, 3, 0, 1],
//   [3, 4, 1, 0] ]

// FloydWarshall(
//     [[0, 1, 2, Infinity],
//       [1, 0, Infinity, Infinity],
//       [2, Infinity, 0, 1],
//       [Infinity, Infinity, 1, 0]
//     ]
//   )
