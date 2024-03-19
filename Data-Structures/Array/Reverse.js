/**
 * This function accepts an array and reverses its elements.
 * @param {Array} arr - Array with elements of any data type.
 * @returns {Array} - Array with reversed elements.
 */
const reverseArray = (arr) => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export default reverseArray;
