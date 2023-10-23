/*
  Problem: Given two numbers, n and k, make all unique combinations of k numbers from 1 to n and in sorted order

  What is combinations?
  - Combinations is selecting items from a collections without considering the order of selection

  Example:
  - We have an apple, a banana, and a jackfruit
  - We have three objects, and need to choose two items, then combinations will be

  1. Apple & Banana
  2. Apple & Jackfruit
  3. Banana & Jackfruit

  To read more about combinations, you can visit the following link:
  - https://betterexplained.com/articles/easy-permutations-and-combinations/

  Solution:
  - We will be using backtracking to solve this questions
  - Take one element, and make all them combinations for k-1 elements
  - Once we get all combinations of that element, pop it and do same for next element
*/

function generateCombinations(n, k) {
  let currentCombination = [] 
  let allCombinations = [] // will be used for storing all combinations
  let currentValue = 1

  function findCombinations() {
    if (currentCombination.length === k) {
      // Add the array of size k to the allCombinations array
      allCombinations.push([...currentCombination])
      return
    }
    if (currentValue > n) {
      // Check for exceeding the range
      return
    }
    currentCombination.push(currentValue++)
    findCombinations()
    currentCombination.pop()
    findCombinations()
    currentValue--
  }

  findCombinations()

  return allCombinations
}

export { generateCombinations }
