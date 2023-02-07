/**
 * @function memoize
 * @description ->
 * From [Wikipedia](https://en.wikipedia.org/wiki/Memoization),
 * memoization is an optimization technique
 * used primarily to speed up computer programs,
 * by storing the results of expensive function calls
 * and returning the cached result when the same inputs occur again
 * This function is a first class objects,
 * which lets us use it as [Higher-Order Function](https://eloquentjavascript.net/05_higher_order.html)
 * and return another function
 * @param {Function} func Original function
 * @param {Map} cache - it's receive any cache DS which have get, set & has method
 * @returns {Function} Memoized function
 */
const memoize = (func, cache = new Map()) => {
  const jsonReplacer = (_, value) => {
    if (value instanceof Set) { // if the value is Set it's converted to Array cause JSON.stringify can't convert Set
      return [...value]
    }

    if (value instanceof Map) { // if the value is Map it's converted to Object cause JSON.stringify can't convert Map
      return Object.fromEntries(value)
    }

    return value
  }

  return (...args) => {
    /**
     * Arguments converted to JSON string for use as a key of Map - it's easy to detect collections like -> Object and Array
     * If the args input is -> [new Set([1, 2, 3, 4]), {name: 'myName', age: 23}]
     * Then the argsKey generate to -> '[[1,2,3,4],{"name":"myName","age":23}]' which is JSON mean string
     * Now it's ready to be a perfect key for Map
     */
    const argsKey = JSON.stringify(args, jsonReplacer)

    /**
     * Checks if the argument is already present in the cache,
     * then return the associated value / result
     */
    if (cache.has(argsKey)) {
      return cache.get(argsKey)
    }

    /**
     * If the argument is not yet present in the cache,
     * execute original function and save its value / result in cache,
     * finally return it
     */
    const result = func(...args) // spread all args
    cache.set(argsKey, result)

    return result
  }
}

export { memoize }
