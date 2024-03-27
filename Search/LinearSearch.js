/**
 * Linear search or sequential search is a method for finding a target value within a list.
 * It sequentially checks each element of the list for the target value until a match is found
 * or until all the elements have been searched.
 * @function SearchArray
 * @param {number} searchNum - The number to search for in the array.
 * @param {number[]} ar - The array in which to search for the number.
 * @param {(output: string) => void} [output=(v) => console.log(v)] - Optional callback function to handle output messages.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * SearchArray(3, ar) // Output: The element was found at 3
 * SearchArray(4, ar) // Output: The element was found at 4
 * SearchArray(11, ar) // Output: The element not found
 */
function SearchArray(searchNum, ar, output = (v) => console.log(v)) {
  const position = Search(ar, searchNum)
  if (position !== -1) {
    output('The element was found at ' + (position + 1))
  } else {
    output('The element not found')
  }
}

/**
 * Search for a key in an array using linear search.
 * @function Search
 * @param {number[]} theArray - The array to search.
 * @param {number} key - The key to search for in the array.
 * @returns {number} - The index of the key in the array if found, otherwise -1.
 *
 * @example
 * const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const index1 = Search(ar, 3) // index1 will be 2
 * const index2 = Search(ar, 10) // index2 will be -1
 */
function Search(theArray, key) {
  for (let n = 0; n < theArray.length; n++) {
    if (theArray[n] === key) {
      return n
    }
  }
  return -1
}

export { SearchArray, Search }
