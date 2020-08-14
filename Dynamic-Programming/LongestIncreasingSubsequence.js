// input is an array of integers
function LongestIncreasingSubsequence( nums ) {
  let length = nums.length
  if (length === 0) {
    return 0
  }
  // create the dp array, initially made up of all ones, because minimum length of LIS is 1
  let dp = []
  for ( let i = 0; i < length; i++ ) {
    dp.push(1)
  }
  // variable to keep track of the length
  let longest = 1

  for ( let i = 1; i < length; i++ ) {
    // inner loop that checks every element before nums[i] to see if it is smaller than nums[i]
    for ( let j = 0; j < i; j++ ) {
      if ( nums[j] < nums[i] ) {
        if ( dp[j] + 1 > dp[i] ) {
          dp[i] = dp[j] + 1
          // if current value greater than previous maximum length
          if ( dp[i] > longest ) {
            longest = dp[i]
          }
        }
      }
    }
  }
  return longest
}

console.log( LongestIncreasingSubsequence([10,9,2,5,3,7,101,18]) )
console.log( LongestIncreasingSubsequence([2,5,3,5,4,7,10,91]) )
