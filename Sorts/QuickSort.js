/*
* Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
* For more information, see here: https://en.wikipedia.org/wiki/Quicksort
*/

const quickSort = (items) => {
  if (items.length <= 1) return items

  const LESSER = []
  const GREATER = []
  const PIVOT = items.shift()

  for (const i of items) {
    if (i > PIVOT) GREATER.push(i)
    else LESSER.push(items[i])
  }

  return quickSort(LESSER).concat(PIVOT, quickSort(GREATER))
}

// testing the algorithm

const testArray = [3, 0, 5, 2, 2, -1, 4, 1]
console.log('Input:', testArray)
console.time('Executed in')
console.log('Output:', quickSort(testArray))
console.timeEnd('Executed in')
