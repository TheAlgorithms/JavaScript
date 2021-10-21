
// https://en.wikipedia.org/wiki/Binary_search_algorithm
// Search the integer inside the sorted integers array using Binary Search Algorithm

export const BinarySearch = (intArr, searchQuery) => {
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
