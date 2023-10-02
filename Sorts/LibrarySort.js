

/** Library sort or gapped insertion sort is a sorting algorithm that uses an insertion sort, but with gaps in the array to accelerate subsequent insertions

For more information:-
Wikipedia:https://en.wikipedia.org/wiki/Library_sort

**/

// Define a function called gappedInsertionSort that takes an array arr and a gap size gap as parameters.
function gappedInsertionSort(arr, gap) {
  // Get the length of the array.
  const len = arr.length;

  // Start iterating from the gap index to the end of the array.
  for (let i = gap; i < len; i++) {
    // Store the current element to be inserted into the sorted subarray.
    const currentElement = arr[i];
    
    // Initialize j to the index just before the current element.
    let j = i - gap;

    // Use a while loop to compare and move elements that are gap positions apart.
    // If an element is greater than the current element and is within the gap,
    // move it to the right to create space for the current element.
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + gap] = arr[j]; // Move the element to the right by the gap distance.
      j -= gap; // Decrement j by the gap to continue comparing with previous elements.
    }

    // Insert the current element at the correct position in the sorted subarray.
    arr[j + gap] = currentElement;
  }
}

// Example array of numbers to be sorted.
const numbers = [5, 2, 9, 3, 1, 6];

// Set the gap size. Adjusting this parameter can impact the sorting performance.
const gap = 2;

// Call the gappedInsertionSort function to sort the array with the specified gap.
gappedInsertionSort(numbers, gap);

// Print the sorted array.
console.log(numbers); // Output: [1, 2, 3, 5, 6, 9]
