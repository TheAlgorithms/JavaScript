/*Program to find sum of all numbers between a range */
/* Since the numbers might not be always in order, using max() and min() will help organize.*/

function sumAll(arr) {
  /*  First create a variable to store the max number between two.
   The same as before for the Smallest number. */

   let max = Math.max(arr[0], arr[1]);
   let min = Math.min(arr[0], arr[1]);

   /* We create a temporary variable to add the numbers. */

    let temp = 0;
    for (var i = min; i <= max; i++) {
    temp += i;
  }
   return temp;
}

/* function call */

sumAll([1, 4]);

console.log(sumAll[1,4])  // result is 10
