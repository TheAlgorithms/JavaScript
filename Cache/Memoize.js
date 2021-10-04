/**
 * Memoize
 * @param {Function} fn
 * @returns
 */
export const memoize = (func) => {
  // eslint-disable-next-line no-console
  console.log(`Creating cache for function '${func.name}'`)

  const cache = {}

  return (...args) => {
    const [arg] = args

    if (arg in cache) {
      // eslint-disable-next-line no-console
      console.log(`Reading cache with argument ${arg}`)

      return cache[arg]
    }

    // eslint-disable-next-line no-console
    console.log(`Updating cache with argument ${arg}`)

    const result = func(arg)
    cache[arg] = result
    return result
  }
}
