/*
 * Problem Statement: Generate all distinct permutations of a string/array (all permutations should be in sorted order);
 *
 * What is permutations?
 * - Permutation means possible arrangements in a set (here it is string/array);
 *
 * Reference to know more about permutations:
 * - https://www.britannica.com/science/permutation
 *
 */

const swap = (arr, i, j) => {
  const newArray = [...arr];

  [newArray[i], newArray[j]] = [newArray[j], newArray[i]] // Swapping elements ES6 way

  return newArray
}

const permutations = (arr, low, high) => {
  if (low === high) {
    console.log(arr.join(' '))
    return
  }
  for (let i = low; i <= high; i++) {
    arr = swap(arr, low, i)
    permutations(arr, low + 1, high)
  }
}

// Driver Code
const input = [1, 2, 3]
permutations(input, 0, input.length - 1)
