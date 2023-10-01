/*
https://en.wikipedia.org/wiki/Pigeonhole_sort

*Pigeonhole sorting is a sorting algorithm that is suitable
* for sorting lists of elements where the number of elements
* (n) and the length of the range of possible key values (N)
* are approximately the same.
 */
export function pigeonHoleSort(arr) {
  let min = arr[0]
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  const range = max - min + 1
  const pigeonhole = Array(range).fill(0)

  for (let i = 0; i < arr.length; i++) {
    pigeonhole[arr[i] - min]++
  }

  let index = 0

  for (let j = 0; j < range; j++) {
    while (pigeonhole[j]-- > 0) {
      arr[index++] = j + min
    }
  }
  return arr
}
