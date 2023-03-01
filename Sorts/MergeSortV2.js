/*
-----------Merge Sort------------
Merge sort is similar to the quick sort 
algorithm as it uses the divide and conquer 
approach to sort the elements. It is one of the most popular and
efficient sorting algorithm. It divides the given list into 
two equal halves, calls itself for the two halves and
then merges the two sorted halves. 
We have to define the merge() function to perform the merging.
*/
//merging two arrays appropriately.
function merge(arr1, arr2) {
    //make a new array and have two value pointers
    let res = [],
      i = 0,
      j = 0;
  
    //sorting the first array.
    if (arr1.length > 1) {
      let min = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (i !== min) {
          if (arr1[i] < arr1[min]) {
            //also swap the elements
            [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
            //change the minimum
            min = i;
          }
        }
      }
    }
  
    //sorting the second array.
    if (arr2.length > 1) {
      let min = 0;
      for (let i = 0; i < arr2.length; i++) {
        if (i !== min) {
          if (arr2[i] < arr2[min]) {
            //also swap the elements
            [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
            //change the minimum
            min = i;
          }
        }
      }
    }
  
    //Value comparison.
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }
  
    //pushing the rest of arr1.
    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }
  
    //pushing the rest of arr2.
    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }
  
    return res;
  }
  
  //merge sort
  function mergeSort(arr) {
    //Best case
    if (arr.length <= 1) return arr;
  
    //splitting into halves
    let mid = Math.ceil(arr.length / 2);
  
    let arr1 = arr.slice(0, mid);
  
    let arr2 = arr.slice(mid);
  
    let arr1_subarrays = [],
      sorted_arr1_subarrays = [];
  
    let arr2_subarrays = [],
      sorted_arr2_subarrays = [];
  
    //loop through array 1 making subarrays of two elements
    for (let i = 0; i < arr1.length; i += 2) {
      arr1_subarrays.push(arr1.slice(i, i + 2));
    }
  
    //loop through array 2 making subarrays of two elements.
    for (let i = 0; i < arr2.length; i += 2) {
      arr2_subarrays.push(arr2.slice(i, i + 2));
    }
  
    // sorting each subarray of arr1.
    for (let i = 0; i < arr1_subarrays.length; i += 2) {
      let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
      result.forEach((value) => sorted_arr1_subarrays.push(value));
    }
  
    // sorting each subarray of arr2.
    for (let i = 0; i < arr2_subarrays.length; i += 2) {
      let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
      result.forEach((value) => sorted_arr2_subarrays.push(value));
    }
  
    let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);
  
    return result;
  }
  
  console.log(mergeSort([70, 50, 30, 10, 20, 40, 60]));
