/**
 * Memoize
 * @param {Function} fn
 * @returns
 */
export const memoize = (func) => {
  // Initializing new cache
  const cache = {}

  return (...args) => {
    const [arg] = args

    if (arg in cache) {
      // Reading cache by argument
      return cache[arg]
    }

    // Updating cache by argument
    const result = func(arg)
    cache[arg] = result
    return result
  }
}
