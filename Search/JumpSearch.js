/* The Jump Search algorithm allows to combine a linear search with a speed optimization.
  * This means that instead of going 1 by 1, we will increase the step of √n and increase that
  * step of √n which make the step getting bigger and bigger.
  * The asymptotic analysis of Jump Search is o(√n). Like the binary search, it needs to be sorted.
  * The advantage against binary search is that Jump Search traversed back only once.
 */

const jumpSearch = (arr, value) => {
  const length = arr.length
  let step = Math.floor(Math.sqrt(length))
  let lowerBound = 0
  while (arr[Math.min(step, length) - 1] < value) {
    lowerBound = step
    step += step
    if (lowerBound >= length) {
      return -1
    }
  }

  const upperBound = Math.min(step, length)
  while (arr[lowerBound] < value) {
    lowerBound++
    if (lowerBound === upperBound) {
      return -1
    }
  }
  if (arr[lowerBound] === value) {
    return lowerBound
  }
  return -1
}

export { jumpSearch }
