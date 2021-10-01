/*
 *
 *  Sum of Subset problem
 *
 *  Given an ordered set W of non-negative integers and a value K,
 *  determine all possible subsets from the given set W whose sum
 *  of its elemets equals to the given value K.
 *
 */

/*
 * @param {number[]} set Original set of numbers
 * @param {number[]} subset Subset being evaluated
 * @param {number} setIndex Index from set of last element in subset
 * @param {sum} Sum of elements from subset
 * @param {targetSum} The target sum on which the subset sum is compared to
 */
const subsetSum = (set, subset, setindex, sum, targetSum) => {
    // Base case where the subset sum is equal to target sum
    // Evaluation of following subsets on this path will always add up to
    // greater than targetSum, so no need to continue
    if (sum === targetSum) return [subset];
  
    // This and following subsets on this path will always add up to
    // greater than targetSum, so no need to continue
    if (sum > targetSum) return [];
  
    // Initialize results array. Will contain only valid subsets
    let results = [];
  
    // Slice gets from the set all the elements at the right of the last element
    // to be evaluated (last element of subset)
    // forEach iterated on the resulting array
    set.slice(setindex).forEach((num, index) => {
      // The next subset to be evaluated, current subset plus next element
      const nextSubset = [...subset, num];
      
      // Next index from the set. Current set index plus iteration index
      // index starts at 0, so a + 1 is required 
      const nextSetIndex = setindex + index + 1;
  
      // Sum of elements from the next subset to be evaluated
      const nextSum = sum + num;
  
      // Call recursively the subsetSum for the nextSubset
      const subsetResult = subsetSum(
        set,
        nextSubset,
        nextSetIndex,
        nextSum,
        targetSum
      );
  
      // Concat the recursive result with current result arary
      results = [...results, ...subsetResult];
    });
  
    //Return results
    return results;
  };
  
  /*
   * Example with ordered array
   *   W = [2, 5, 7, 8, 12, 16, 23, 40]
   *   K = 25
   *  
   *   resulting subsets = [ 2, 7, 16 ], [ 2, 23 ], [ 5, 8, 12 ]
   */
  
  const nums = [2, 5, 7, 8, 12, 16, 23, 40];
  
  const subsets = subsetSum(nums, [], 0, 0, 25);
  
  console.log(subsets);
  