/*
    Author:           Sahil Kumar
    Last Modified on: 7th Oct 2023
    Description:      In this implementation, we have a sleepSort function that takes an array as input.
                      It iterates through the elements of the input array and uses setTimeout to add each element to 
                      the sortedArray after a delay equal to its value. The maximum element in the array is used to 
                      calculate the overall delay.
*/

function sleepSort(arr) {
    const sortedArray = [];
  
    function sleepSortElement(element) {
      setTimeout(function () {
        sortedArray.push(element);
      }, element);
    }
  
    arr.forEach(function (element) {
      sleepSortElement(element);
    });
  
    // Sleep for an additional time to allow all elements to be sorted
    const maxElement = Math.max(...arr);
    setTimeout(function () {
      console.log(sortedArray);
    }, maxElement + 10); // Adding a little extra time for safety
  }
  
  // Example usage:
  const unsortedArray = [5, 3, 1, 7, 2, 4];
  sleepSort(unsortedArray);
  