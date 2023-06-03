function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array is already sorted
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursive calls to mergeSort() for both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two sorted arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append remaining elements from left or right (if any)
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

// Export the mergeSort() function
module.exports = mergeSort;
