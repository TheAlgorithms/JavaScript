/*Exponential Search is a search performed on a sorted array by finding the internal in which
 * given number exists and then performing a binary search in the interval
 * We set the initial internal in multiples of 2. For exampe between 2 and 4, 4 and 8, 8 and 16
 * and so on.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sort the array if not already sorted
array.sort(function (a, b) { return a - b })

// the value to be searched(i.e, the index of the given number)
const value = 4
const index = exponentialSearch(array, value)

// printing the value of indes
console.log(index)

function exponentialSearch (arr, val) {
  const len = arr.length

  // if the required element is the first one return 0
  if (arr[0] === val) return 0

  let ind=1

  // while we dont find a suitable range, keep on changing the interval
  while (ind < len && arr[ind] <= val) ind*=2

  //upon finding the suitable interval, perform a binary search
  return binarySearch(arr, ind / 2, Math.min(ind, len), val)
}

// function for performing a binary search
function binarySearch (arr, left, right, val){
    if (left <= right) {
      let mid = Math.ceil((left + right) / 2)
      let mid_val = arr[mid]
      if (mid_val == val) {
        return mid
      } else if(val < mid_val){
        right = mid - 1;
      } else{
        left = mid + 1;
      }
        return binarySearch (arr, left, right, val)
    }
    return -1
}
