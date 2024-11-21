/**
 * A Dynamic Programming based solution for calculating Zero One Knapsack
 * https://en.wikipedia.org/wiki/Knapsack_problem
 *
 * Time and Space Complexity: O(n*cap)
 * @param {Array<[number, number]>} arr - An array of tuples representing the weights and values of items.
 * @param {number} n - The number of items available.
 * @param {number} cap - The capacity of the thief's bag.
 * @param {Array<Array<number>>} cache - A 2D array to cache computed values for dynamic programming.
 * @returns {number} The maximum value that can be stolen.
 */
const zeroOneKnapsack = (arr, n, cap, cache) => {
  // Base Case: No capacity or no items
  if (cap === 0 || n === 0) {
    cache[n][cap] = 0
    return cache[n][cap]
  }

  // Lookup (value already calculated)
  if (cache[n][cap] !== -1) {
    return cache[n][cap]
  }

  // Profit when excluding the nth item
  let notPick = zeroOneKnapsack(arr, n - 1, cap, cache)

  // Profit when including the nth item
  let pick = 0
  if (arr[n - 1][0] <= cap) {
    // If weight of the nth item is within the capacity
    pick =
      arr[n - 1][1] + zeroOneKnapsack(arr, n - 1, cap - arr[n - 1][0], cache)
  }

  cache[n][cap] = Math.max(pick, notPick) // maximize profit
  return cache[n][cap]
}

const example = () => {
  /*
  Problem Statement:
  You are a thief carrying a single bag with limited capacity S. The museum you stole had N artifact that you could steal. Unfortunately you might not be able to steal all the artifact because of your limited bag capacity.
  You have to cherry pick the artifact in order to maximize the total value of the artifacts you stole.

  Link for the Problem: https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack
  */
  let input = `1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`

  input = input.trim().split('\n')
  input.shift()
  const length = input.length

  const output = []

  let i = 0
  while (i < length) {
    const cap = Number(input[i].trim().split(' ')[0])
    const currlen = Number(input[i].trim().split(' ')[1])
    let j = i + 1
    const arr = []
    while (j <= i + currlen) {
      arr.push(input[j])
      j++
    }
    const newArr = arr.map((e) => e.trim().split(' ').map(Number))
    const cache = []
    for (let i = 0; i <= currlen; i++) {
      const temp = []
      for (let j = 0; j <= cap; j++) {
        temp.push(-1)
      }
      cache.push(temp)
    }
    const result = zeroOneKnapsack(newArr, currlen, cap, cache)
    output.push(result)
    i += currlen + 1
  }

  return output
}

export { zeroOneKnapsack, example }
