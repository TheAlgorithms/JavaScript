/*Sleep sort is a sorting algorithm in which, for every element 
  to be sorted, we set a timeout for the value of that element.
  After the timeout is over, we print the value of the element. 
  Hence the output is printed in the sorted order.
*/

Array.prototype.sleepSort = function(callback_function) {
  const arr = [];
  for (let n of this)
    setTimeout(() => {
      arr.push(n);
      if (this.length === arr.length)
        callback_function(arr);
    }, n + 1);
  return arr;
};
 
[1, 9, 8, 7, 6, 5, 3, 4, 5, 2, 0].sleepSort(console.log);
