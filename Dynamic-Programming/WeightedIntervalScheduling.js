/**
 * Solves the Weighted Interval Scheduling problem.
 *
 * Given intervals with start time, end time, and profit,
 * returns the maximum profit such that no intervals overlap.
 *
 * Uses Dynamic Programming + Binary Search.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {{start:number, end:number, profit:number}[]} intervals
 * @returns {number}
 */

const weightedIntervalScheduling = (intervals) => {
  if (!Array.isArray(intervals)) {
    throw new Error('Input must be an array of intervals')
  }

  if (intervals.length === 0) return 0

  // Sort intervals by end time
  intervals.sort((a, b) => a.end - b.end)

  const n = intervals.length
  const dp = Array(n).fill(0)

  dp[0] = intervals[0].profit

  // Binary search to find last non-overlapping interval
  const findLastNonOverlapping = (index) => {
    let left = 0
    let right = index - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (intervals[mid].end <= intervals[index].start) {
        if (intervals[mid + 1]?.end <= intervals[index].start) {
          left = mid + 1
        } else {
          return mid
        }
      } else {
        right = mid - 1
      }
    }

    return -1
  }

  for (let i = 1; i < n; i++) {
    let includeProfit = intervals[i].profit
    const lastIndex = findLastNonOverlapping(i)

    if (lastIndex !== -1) {
      includeProfit += dp[lastIndex]
    }

    dp[i] = Math.max(dp[i - 1], includeProfit)
  }

  return dp[n - 1]
}

export { weightedIntervalScheduling }