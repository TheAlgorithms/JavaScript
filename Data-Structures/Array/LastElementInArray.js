/**This function will accept an array and Return its last element 
 * @param {Array} arr array with elements of any data type
 * @returns {*} The last element of the array.
 * @complexity O(1) (Best case, Average case, worst case)
 */

const findLastElement = (arr) => {
    // If arr is not an array or its length is zero then the function will throw Error
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array.");
    }

    // Calculate the length of the input array
    const array_lenght = arr.length;

    // Calculate the index of the last element of the array
    const LastElementIndex = array_lenght - 1;

    return arr[LastElementIndex];
}

export { findLastElement };

