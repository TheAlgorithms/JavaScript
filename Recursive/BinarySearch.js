
// https://en.wikipedia.org/wiki/Binary_search_algorithm
// Search the integer inside the sorted integers array using Binary Search Algorithm

const BinarySearch = (intArr, searchQuery) => {
  if (searchQuery === null || searchQuery === undefined || intArr.length === 0) {
    return false
  }

  const middleIndex = intArr.length === 1 ? 0 : Math.ceil(intArr.length / 2)

  if (intArr[middleIndex] === searchQuery) {
    return true
  } else if (intArr.length > 1) {
    return intArr[middleIndex] < searchQuery ? BinarySearch(intArr.slice(1, middleIndex)) : BinarySearch(intArr.slice(middleIndex))
  } else {
    return false
  }
}

// testing
(() => {
  console.log('Number Present with odd array length: 5 = ', BinarySearch([1, 2, 3, 4, 5, 6, 7], 5))
  console.log('Number Present with even array length: 5 = ', BinarySearch([1, 2, 4, 5, 6], 5))
  console.log('Number Present with only single element: 5 = ', BinarySearch([5], 5))
  console.log('Number Not Present: 0 = ', BinarySearch([1, 2, 3, 4, 5], 0))
  console.log('Undefined number search query = ', BinarySearch([1, 2, 3, 4, 5]))
  console.log('With Empty array = ', BinarySearch([], 1))
})()
