// Sleep Sort is a unique and unconventional sorting algorithm that sorts an array
// of integers by introducing time delays (sleeping) based on the values of the elements.
// Elements with smaller values "wake up" earlier, causing them to appear earlier in the sorted output.

function sleepSort(arr) {
  const sortedArray = [];

  // Define a sleep function that returns a Promise with a time delay based on the element's value
  function sleep(element) {
    return new Promise((resolve) => {
      setTimeout(() => {
        sortedArray.push(element); // Add the element to the sorted array
        resolve();
      }, element);
    });
  }

  // Asynchronously process each element in the input array and sort them based on the sleep time
  async function run() {
    const sleepPromises = arr.map((element) => sleep(element)); // Create sleep Promises
    await Promise.all(sleepPromises); // Wait for all Promises to complete
    console.log(sortedArray); // Print the sorted array
  }

  run(); // Start the sorting process
}

// Example usage
const numbersToSort = [5, 2, 9, 1, 5, 6];

console.log("Original Array:", numbersToSort);
console.log("Sleep-Sorted Array:");

sleepSort(numbersToSort);
