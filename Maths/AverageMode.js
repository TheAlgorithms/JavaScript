/*
  A program to get the mode of the given array of data.

  In statistics, mode is the most often occurring value in a set of data values,
  it may or may not have the same numerical value as mean or median in a normal distribution, depending on how skewed the distribution is.
  Mode is not necessarily unique, since two values may appear the same number of times in a set of values, in which case, both shall be considered to be modes.

  Wikipedia: https://en.wikipedia.org/wiki/Mode_(statistics)
*/

/**
 * @param {Array<any>} data 
 */
const averageMode = (data) => {
  const counts = new Map()
  const mode = []
  let max = 0

  for(const entry of data) {
    const count = counts.get(entry) ?? 0
    counts.set(entry, count + 1)

    if(max < count + 1)
      max = count + 1
  }

  for(const [key, value] of counts.entries())
    if(max === value)
      mode.push(key)

  return mode.sort()
}

export { averageMode }
