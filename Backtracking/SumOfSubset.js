/*
 *
 *  Sum of Subset problem
 *
 *  Given an ordered set W of non-negative integers and a value K,
 *  determine all possible subsets from the given set W whose sum
 *  of its elements equals to the given value K.
 *
 *  More info: https://www.geeksforgeeks.org/subset-sum-backtracking-4/
 */

/*
 * @param {number[]} set Original set of numbers
 * @param {number[]} subset Subset being evaluated
 * @param {number} setIndex Index from set of last element in subset
 * @param {number} Sum of elements from subset
 * @param {targetSum} The target sum on which the subset sum is compared to
 * @returns {number[][]} Subsets whose elements add up to targetSum
 */
const sumOfSubset = (set, subset, setindex, sum, targetSum) => {
  // Base case where the subset sum is equal to target sum
  // Evaluation of following subsets on this path will always add up to
  // greater than targetSum, so no need to continue
  if (sum === targetSum) return [subset]

  // This and following subsets on this path will always add up to
  // greater than targetSum, so no need to continue
  if (sum > targetSum) return []

  // Initialize results array. Will contain only valid subsets
  let results = []

  // Slice gets from the set all the elements at the right of the last element
  // to be evaluated (last element of subset)
  // forEach iterated on the resulting array
  set.slice(setindex).forEach((num, index) => {
    // The next subset to be evaluated, current subset plus next element
    const nextSubset = [...subset, num]

    // Next index from the set. Current set index plus iteration index
    // index starts at 0, so a + 1 is required
    const nextSetIndex = setindex + index + 1

    // Sum of elements from the next subset to be evaluated
    const nextSum = sum + num

    // Call recursively the sumOfSubset for the nextSubset
    const subsetResult = sumOfSubset(
      set,
      nextSubset,
      nextSetIndex,
      nextSum,
      targetSum
    )

    // Concat the recursive result with current result array
    results = [...results, ...subsetResult]
  })

  // Return results
  return results
}

export { sumOfSubset }
