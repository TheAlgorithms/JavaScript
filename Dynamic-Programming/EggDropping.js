/**
 * Dynamic Programming solution for the Egg Dropping Puzzle
 * https://en.wikipedia.org/wiki/Dynamic_programming#Egg_dropping_puzzle
 */

// min trials with n eggs and m floors

function minTrials (n, m) {
  const eggFloor = new Array(n + 1)
  for (let i = 0; i < n + 1; i++) {
    eggFloor[i] = new Array(m + 1)
  }
  let result

  for (let i = 1; i <= n; i++) {
    eggFloor[i][0] = 0 // Zero trial for zero floor.
    eggFloor[i][1] = 1 // One trial for one floor
  }

  // j trials for only 1 egg

  for (let j = 1; j <= m; j++) { eggFloor[1][j] = j }

  // Using bottom-up approach in DP

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= m; j++) {
      eggFloor[i][j] = Number.MAX_SAFE_INTEGER
      for (let x = 1; x <= j; x++) {
        result = 1 + Math.max(eggFloor[i - 1][x - 1], eggFloor[i][j - x])

        // choose min of all values for particular x
        if (result < eggFloor[i][j]) { eggFloor[i][j] = result }
      }
    }
  }

  return eggFloor[n][m]
}

function main () {
  const n = 2
  const m = 4

  // result outputs min no. of trials in worst case for n eggs and m floors
  const result = minTrials(n, m)
  console.log(result)
}

main()
