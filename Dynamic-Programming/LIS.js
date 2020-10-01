/**
 * Algorithm for Longest Increasing Subsequence
 * Given an array consisting of integers,
 * Determine the longest increasing subsequence 
 * Time Complexity: O(n * n)
 * Space Complexity : O(n)
 */

/* This function returns the length of the LIS */

function LIS (arr) {
  const lis = Array(arr.length).fill(1);

  for (let i = 1; i < lis.length; i++) {
  	for (let j = 0; j < i; j++) {
  		if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  let lengthOfLIS = 0;
  
  for (let i = 0; i < lis.length; i++) {
    if (lis[i] > lengthOfLIS) {
      lengthOfLIS = lis[i];
    }
  }

  return lengthOfLIS;
}

function main () {
  const arr = [1, 3, 2, 6, 7, 10];
  const result = LIS(arr);
  console.log(result);
}

main()
