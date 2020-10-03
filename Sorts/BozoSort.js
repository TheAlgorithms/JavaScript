/** Is the array sorted in ascending order? */
function isSorted (array) {
  for (let i = 0; i + 1 < array.length; i++) {
    if (array[i] > array[i + 1]) return false
  }
  return true
}

/** Given an array, return a random index into it */
function randomIndex (array) {
  return Math.floor(array.length * Math.random())
}

/** Mutate the array swapping a random pair of elements */
function swapRandomPair (array) {
  const i = randomIndex(array)
  const j = randomIndex(array)
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/*
 * Repeatedly swap random pairs of elements until the array is sorted.
 *
 * https://en.wikipedia.org/wiki/Bogosort#Related_algorithms
 */
function bozoSort (array) {
  while (!isSorted(array)) {
    swapRandomPair(array)
  }
  return array
}

// Example

const array = [2, 1, 10, 100, 30, 4, 38]
// Array before sort
console.log(array)
bozoSort(array)
// Array after sort
console.log(array)
