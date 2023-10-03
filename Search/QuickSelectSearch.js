/*
 * Places the `k` smallest elements in `array` in the first `k` indices: `[0..k-1]`
 * Modifies the passed in array *in place*
 * Returns a slice of the wanted elements for convenience
 * Efficient mainly because it never performs a full sort.
 *
 * The only guarantees are that:
 *
 * - The `k`th element is in its final sort index (if the array were to be sorted)
 * - All elements before index `k` are smaller than the `k`th element
 *
 * [Reference](http://en.wikipedia.org/wiki/Quickselect)
 */
export function quickSelectSearch(array, k) {
  if (!array || array.length <= k) {
    throw new Error('Invalid arguments')
  }

  let from = 0
  let to = array.length - 1
  while (from < to) {
    let left = from
    let right = to
    const pivot = array[Math.ceil((left + right) * 0.5)]

    while (left < right) {
      if (array[left] >= pivot) {
        const tmp = array[left]
        array[left] = array[right]
        array[right] = tmp
        --right
      } else {
        ++left
      }
    }

    if (array[left] > pivot) {
      --left
    }

    if (k <= left) {
      to = left
    } else {
      from = left + 1
    }
  }
  return array
}

/* ---------------------------------- Test ---------------------------------- */

// const arr = [1121111, 21, 333, 41, 5, 66, 7777, 28, 19, 11110]
// quickSelectSearch(arr, 5) // [ 19, 21, 28, 41, 5, 66, 333, 11110, 1121111, 7777 ]
// quickSelectSearch(arr, 2) // [ 19, 5, 21, 41, 28, 333, 11110, 1121111, 7777, 66 ]
// quickSelectSearch(arr, 7) // [ 19, 5, 21, 41, 28, 66, 333, 7777, 11110, 1121111 ]
