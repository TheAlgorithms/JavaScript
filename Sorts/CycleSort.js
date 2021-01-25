/**
 * Cycle sort is an in-place, unstable sorting algorithm,
 * a comparison sort that is theoretically optimal in terms of the total
 * number of writes to the original array, unlike any other in-place sorting
 * algorithm. It is based on the idea that the permutation to be sorted can
 * be factored into cycles, which can individually be rotated to give a sorted result.
 * 
 * Wikipedia: https://en.wikipedia.org/wiki/Cycle_sort
 */

function cycleSort (list) {
  let writes = 0
  for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
    let value = list[cycleStart]
    let position = cycleStart

    // search position
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < value) {
        position++
      }
    }
    // if its the same continue
    if (position === cycleStart) {
      continue
    }

    while (value === list[position]) {
      position++
    }

    const oldValue = list[position]
    list[position] = value
    value = oldValue
    writes++

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
      writes++
    }
  }
  return writes
}

/**
* Implementation of Cycle Sort
*/
const array = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation of Cycle Sort -')
console.log(array)
// After Sort
console.log('- After Sort | Implementation of Cycle Sort -')
console.log(countingSort(array))
console.log('\n')
