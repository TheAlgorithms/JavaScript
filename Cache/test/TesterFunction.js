export const fibonacciCache = (num, cache = null) => {
  if (cache) {
    const value = cache.get(num)

    if (value !== null) {
      return value
    }
  }

  if (num === 1 || num === 2) {
    return 1
  }

  const result = fibonacciCache(num - 1, cache) + fibonacciCache(num - 2, cache)

  cache && cache.set(num, result)

  return result
}
