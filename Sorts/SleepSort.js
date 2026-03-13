/**
 * Implementation of the sleep sort algorithm.
 *
 * This sorting algorithm delays each input element by an amount of time
 * proportional to its value before adding it to the result
 *
 * @see https://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort
 */
export function sleepSort(arr) {
  return new Promise((resolve) => {
    const result = []
    let count = 0

    arr.forEach((num) => {
      // Use setTimeout proportional to the number
      setTimeout(() => {
        result.push(num)
        count++
        if (count === arr.length) {
          resolve(result)
        }
      }, num)
    })
  })
}
