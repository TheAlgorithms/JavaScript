/* 
* Find Second Largest is a real technical interview question.
* Chances are you will be asked to find the second largest value
* inside of an array of numbers. You must also be able to filter
* out duplicate values.  It's important to know how to do this with
* clean code that is also easy to explain.
* 
* Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
// Dummy data
const numberArray = [2, 5, 8, 4, 13, 6, 10, 10, 47, 24, 36, 1];
const removeRepeatedNumbers = (array) =>
    [...new Set(array)] // A value in a Set() can only appear once
// Implementation
const newSorted = removeRepeatedNumbers(numberArray).sort((a, b) => a-b);
console.log(newSorted[newSorted.length - 2]);