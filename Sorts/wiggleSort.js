/*
* Wiggle sort sorts the array into a wave like array.
* An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
*
*/

Array.prototype.wiggleSort = function() {
  for (let i = 0; i < this.length; ++i) {
    const shouldNotBeLessThan = i % 2;
    const isLessThan = this[i] < this[i + 1];
    if (shouldNotBeLessThan && isLessThan) {
      [this[i], this[i + 1]] = [this[i + 1], this[i]];
    }
  }
  return this;
};

//Implementation of wiggle sort

var arr = [3, 5, 2, 1, 6, 4];
//Array before Wiggle Sort
console.log(arr); //[3, 5, 2, 1, 6, 4]

arr.wiggleSort()
//Array after wiggle sort
console.log(arr); // [ 3, 5, 2, 6, 1, 4 ]
