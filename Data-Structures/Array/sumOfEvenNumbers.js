/* 

**Question:**
Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.

For example, if the input array is `[1, 2, 3, 4, 5, 6]`, the function should return `12` (which is the sum of `2 + 4 + 6`).

Please provide the JavaScript code for this function.

**Hint:** You can use a loop to iterate through the array, check if each number is even, and then add it to a running sum if it is.*/

//Code 
function sumOfEvenNumbers(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    
    return sum;
  }
  

  