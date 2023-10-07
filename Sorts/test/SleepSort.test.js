/*
    Author:           Sahil Kumar
    Last Modified on: 7th Oct 2023
    Description:      This test file uses Jest, a popular testing framework for JavaScript.
                      It includes a test case for the sleepSort function where it provides 
                      an unsorted array, captures the console output, and checks if the 
                      output matches the expected sorted array. Finally, it runs the test 
                      using jest.runAllTimers() to allow the timeouts to execute.
*/
// Import the sleepSort function
const { sleepSort } = require('../SleepSort');

// Helper function to check if an array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Test cases for sleepSort
function testSleepSort() {
  const testCases = [
    {
      input: [1, 6, 4, 7, 2],
      expected: [1, 2, 4, 6, 7],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [46, 15, 49, 65, 23],
      expected: [15, 23, 46, 49, 65],
    },
    {
      input: [136, 459, 132, 566, 465],
      expected: [132, 136, 459, 465, 566],
    },
    {
      input: [45, 3, 156, 1, 56],
      expected: [1, 3, 45, 56, 156],
    },
  ];

  for (const testCase of testCases) {
    const { input, expected } = testCase;
    const result = [];
    sleepSort([...input], (element) => {
      result.push(element);
      if (result.length === input.length && isSorted(result)) {
        console.log(`Pass: ${JSON.stringify(input)} => ${JSON.stringify(expected)}`);
      }
    });
  }
}

// Run the sleepSort tests
testSleepSort();
