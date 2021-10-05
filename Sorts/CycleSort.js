/**
 * Cycle sort is an in-place, unstable sorting algorithm,
 * a comparison sort that is theoretically optimal in terms of the total
 * number of writes to the original array, unlike any other in-place sorting
 * algorithm. It is based on the idea that the permutation to be sorted can
 * be factored into cycles, which can individually be rotated to give a sorted result.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Cycle_sort
 */

/**
 * cycleSort takes an input array of numbers and returns the array sorted in increasing order.
 *
 * @param {number[]} list An array of numbers to be sorted.
 * @return {number[]} An array of numbers sorted in increasing order.
 */
function cycleSort (list) {
  for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
    let value = list[cycleStart]
    let position = cycleStart

    // search position
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < value) {
        position++
      }
    }
    // if it is the same, continue
    if (position === cycleStart) {
      continue
    }
    while (value === list[position]) {
      position++
    }

    const oldValue = list[position]
    list[position] = value
    value = oldValue

    // rotate the rest
    while (position !== cycleStart) {
      position = cycleStart
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < value) {
          position++
        }
      }
      while (value === list[position]) {
        position++
      }
      const oldValueCycle = list[position]
      list[position] = value
      value = oldValueCycle
    }
  }
  return list
}

export { cycleSort }
