/**
 * (https://www.geeksforgeeks.org/get-the-first-and-last-item-in-an-array-using-javascript/)
 * This function will accept an array and
 * return the last element of the array.
 * If the array is empty, it will return undefined.
 * @param {Array} arr array with elements of any data type
 * @returns {*} last element of the array
 */
const FindLastElement = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
    return arr[arr.length - 1];
  };
  
  export { FindLastElement };
  