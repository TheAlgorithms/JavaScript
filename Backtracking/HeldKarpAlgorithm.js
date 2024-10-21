/*
Held-karp algorithm  (https://en.wikipedia.org/wiki/Held-Karp_algorithm)

- Held-karp algorithm solves the TSP problem using a dynamic programming paradigm.
- It computes the minimum cost to visit each city exactly once & return to the start point,
  considering all subsets of cities & using memoization.
- Comparing it with the Hamiltonian algorithm vs Held-karp algorithm ( n! vs ~2^n), this is more efficient.
*/

function heldKarp(dist) {
    const n = dist.length
    const memo = Array.from({ length: n }, () => Array(1 << n).fill(null))

    // Base case: distance from the starting point to itself is 0
    for (let i = 0; i < n; i++) {
        memo[i][1 << i] = dist[i][0]
    }

    // Iterate through all subsets of vertices
    for (let mask = 0; mask < (1 << n); mask++) {
        for (let u = 0; u < n; u++) {
            if (!(mask & (1 << u))) continue  // u must be in the subset
            // Iterate through all vertices to find the minimum cost
            for (let v = 0; v < n; v++) {
                if (mask & (1 << v) || u === v) continue;  // v must not be in the subset
                const newMask = mask | (1 << v)
                const newCost = memo[u][mask] + dist[u][v]

                if (memo[v][newMask] === null || newCost < memo[v][newMask]) {
                    memo[v][newMask] = newCost
                }
            }
        }
    }

    let minCost = Infinity
    for (let u = 1; u < n; u++) {
        const cost = memo[u][(1 << n) - 1] + dist[u][0]
        minCost = Math.min(minCost, cost)
    }

    return minCost
}

export { heldKarp }
