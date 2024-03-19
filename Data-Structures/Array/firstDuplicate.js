/**
 * Given an array containing integers, strings, or a mixture of data types,
 * find the first duplicate element in the array for which the second occurrence has
 * the minimal index.
 *      If there are multiple duplicates in the array, return the element for which the second
 *      occurrence has a smaller index than the other duplicated elements second occurrence.
 *
 * Example:
 *     given an array: [1, 2, 3, 4, 3, 2, 4];
 *   2, 3, and 4 all have duplicate values
 *      But the second occurrence of 3 has a lower index than any other duplicate value,
 *      so return (3);
 * @params {array} - array of integers, possibly containing duplicate values
 * @returns {integer} - the value of which had the quickest duplicate occurrence
 *                      If no duplicate values exist in the array, return (-1);
 */

const firstDuplicate = (array) => {
  if (Array.isArray(array)) {
    const elementSet = new Set()

    for (let i = 0; i < array.length; i++) {
      if (elementSet.has(array[i])) {
        return array[i]
      } else {
        elementSet.add(array[i])
      }
    }
    return -1
  } else {
    throw new Error('Invalid data type')
  }
}

export default firstDuplicate
