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

class Combinations {
  constructor(n, k) {
    this.n = n
    this.k = k
    this.current = [] // will be used for storing current combination
    this.combinations = []
    this.i = 1
  }

  findCombinations() {
   if (this.current.length == this.k) { //will add the array of size k to combinations array
        this.combinations.push([...this.current])
        return
      }
    if (this.i > this.n) //check for exceeding range
        return
    this.current.push(this.i++)
    this.findCombinations()
    this.current.pop()
    this.findCombinations()
    this.i--
    return this.combinations
  }
}

export { Combinations }
