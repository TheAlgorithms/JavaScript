/**
 * @function
 * Shell Sort sorts an array based on  insertion sort algorithm
 * @param {Array} items array to be sorted
 * @see [ShellSort](https://en.wikipedia.org/wiki/Shellsort)
 *
 */
function shellSort (items) {
  let interval = 1

  while (interval < items.length / 3) {
    interval = interval * 3 + 1
  }

  while (interval > 0) {
    for (let outer = interval; outer < items.length; outer++) {
      const value = items[outer]
      let inner = outer

      while (inner > interval - 1 && items[inner - interval] >= value) {
        items[inner] = items[inner - interval]
        inner = inner - interval
      }
      items[inner] = value
    }
    interval = (interval - 1) / 3
  }
  return items
}

(
  /**
   * @example Test function
   */
  function demo () {
    const ar = [5, 6, 7, 8, 1, 2, 12, 14]
    console.log(ar)
    shellSort(ar)
    console.log(ar)
  }
)()
