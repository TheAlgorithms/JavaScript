/*
Given an array of non-negative integers and a value sum,
determine the total number of the subset with sum
equal to the given sum.
*/
/*
 Given solution is O(n*sum) Time complexity and O(sum) Space complexity
*/
function NumberOfSubsetSum (array, sum) {
  const dp = [] // create an dp array where dp[i] denote number of subset with sum equal to i
  for (let i = 1; i <= sum; i++) {
    dp[i] = 0
  }
  dp[0] = 1 // since sum equal to 0 is always possible with no element in subset

  for (let i = 0; i < array.length; i++) {
    for (let j = sum; j >= array[i]; j--) {
      if (j - array[i] >= 0) {
        dp[j] += dp[j - array[i]]
      }
    }
  }
  return dp[sum]
}

function main () {
  const array = [1, 1, 2, 2, 3, 1, 1]
  const sum = 4
  const result = NumberOfSubsetSum(array, sum)
  console.log(result)
}
main()
