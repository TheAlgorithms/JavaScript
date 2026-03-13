/**
 * This version of Jump Search works for both ascending and descending sorted arrays.
 *
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 *
 * Example:
 *   jumpSearchOptimized([1, 3, 5, 7, 9, 11], 7)  -> 3
 *   jumpSearchOptimized([20, 15, 10, 5, 0], 10) -> 2
 */

function jumpSearchOptimized(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return -1

  const n = arr.length
  const step = Math.floor(Math.sqrt(n))
  let prev = 0

  // Detect array order
  const isAscending = arr[0] < arr[n - 1]

  // Jump in blocks based on order
  while (prev < n) {
    const next = Math.min(prev + step, n)
    const value = arr[next - 1]

    if ((isAscending && value >= target) || (!isAscending && value <= target)) {
      // Linear search in the found block
      for (let i = prev; i < next; i++) {
        if (arr[i] === target) return i
      }
      return -1
    }

    prev = next
  }

  return -1
}

module.exports = { jumpSearchOptimized }

/* -----------------------------------------
   Quick local test: run `node Search/JumpSearchOptimized.js`
   ----------------------------------------- */
if (require.main === module) {
  const tests = [
    { arr: [1, 3, 5, 7, 9, 11], target: 7 },
    { arr: [20, 15, 10, 5, 0], target: 10 },
    { arr: [2, 4, 6, 8, 10, 12], target: 11 },
    { arr: [], target: 3 }
  ]

  tests.forEach(({ arr, target }) => {
    console.log(
      `Array: [${arr}] | Target: ${target} | Index: ${jumpSearchOptimized(arr, target)}`
    )
  })
}
