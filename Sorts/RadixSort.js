/*
 * Radix sorts an integer array without comparing the integers.
 * It groups the integers by their digits which share the same
 * significant position.
 * For more information see: https://en.wikipedia.org/wiki/Radix_sort
 */
export function radixSort(items, RADIX) {
  // default radix is then because we usually count to base 10
  if (RADIX === undefined || RADIX < 1) {
    RADIX = 10
  }

  let maxLength = false
  let placement = 1

  while (!maxLength) {
    maxLength = true
    const buckets = []

    for (let i = 0; i < RADIX; i++) {
      buckets.push([])
    }

    for (let j = 0; j < items.length; j++) {
      const tmp = items[j] / placement
      buckets[Math.floor(tmp % RADIX)].push(items[j])
      if (maxLength && tmp > 0) {
        maxLength = false
      }
    }

    let a = 0
    for (let b = 0; b < RADIX; b++) {
      const buck = buckets[b]
      for (let k = 0; k < buck.length; k++) {
        items[a] = buck[k]
        a++
      }
    }
    placement *= RADIX
  }
  return items
}
