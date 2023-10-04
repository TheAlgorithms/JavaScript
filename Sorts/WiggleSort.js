// Wiggle Sort is a sorting algorithm that arranges the elements of an array
// in a "wiggle" pattern, where each element is alternately smaller and larger
// than its adjacent elements.

// Function to perform Wiggle Sort on an array
function wiggleSort(nums) {
  const n = nums.length;
  
  // Step 1: Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  
  // Step 2: Create a new array to store the result
  const result = new Array(n);
  
  // Initialize pointers and index variables
  let left = 0;
  let right = n - 1;
  let mid = Math.floor((n - 1) / 2);
  let i = 0;
  
  // Step 3: Fill the result array with the wiggle-sorted values
  while (i < n) {
    // Alternate between placing the larger values (right) and smaller values (mid) into the result array
    if (i % 2 === 0) {
      result[i] = nums[mid];
      mid--;
    } else {
      result[i] = nums[right];
      right--;
    }
    i++;
  }
  
  // Step 4: Copy the result back to the original array
  for (let j = 0; j < n; j++) {
    nums[j] = result[j];
  }
}

// Example usage
const nums = [3, 5, 2, 1, 6, 4];
console.log("Original Array:", nums);

// Perform Wiggle Sort on the array
wiggleSort(nums);

console.log("Wiggle-Sorted Array:", nums);
