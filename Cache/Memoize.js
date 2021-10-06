/**
 * Memoize
 *
 * From [Wikipedia](https://en.wikipedia.org/wiki/Memoization),
 * memoization is an optimization technique
 * used primarily to speed up computer programs,
 * by storing the results of expensive function calls
 * and returning the cached result when the same inputs occur again
 *
 * This function is a first class objects,
 * which lets us use it as [Higher-Order Function](https://eloquentjavascript.net/05_higher_order.html)
 * and return another function
 *
 * @param {Function} func Original function
 * @returns {Function} Memoized function
 */
export const memoize = (func) => {
  // Initialization of a slot to store the function result
  const cache = {}

  return (...args) => {
    // Retrieving the first argument of the function
    const [arg] = args

    /**
     * Checks if the argument is already present in the cache,
     * then return the associated value / result
     */
    if (arg in cache) {
      return cache[arg]
    }

    /**
     * If the argument is not yet present in the cache,
     * execute original function and save its value / result in cache,
     * finally return it
     */
    const result = func(arg)
    cache[arg] = result
    return result
  }
}
