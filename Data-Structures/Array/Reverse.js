/** https://www.geeksforgeeks.org/write-a-program-to-Reverse-an-array-or-string/
 * This function will accept an array and
 * Reverse its elements and returns the inverted array
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with inverted elements
 */

const Reverse = (arr) => {
  // limit specifies the amount of Reverse actions
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}
export { Reverse }
