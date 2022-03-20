/**
 * @function fibonacciCache
 * @description - this is a cached variant of fib number
 * @param {number} n  - Real number (n > -1)
 * @param {Object} cache
 * @returns {number}
 */
export const fibonacciCache = (n, cache = null) => {
  if (cache) {
    const value = cache.get(n)

    if (value !== null) {
      return value
    }
  }

  if (n === 1 || n === 2) {
    return 1
  }

  const result = fibonacciCache(n - 1, cache) + fibonacciCache(n - 2, cache)

  cache && cache.set(n, result)

  return result
}

/**
 * @title implementation of union function
 * @param {Set} sets
 * @return {new Set}
 */
export const union = (...sets) => {
  return new Set(
    sets.reduce((flatArray, set) => [...flatArray, ...set], [])
  )
}
