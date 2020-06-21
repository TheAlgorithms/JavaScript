/* In a sorted array, it uses the Fibonacci series to determine the index
* position to be searched in the array. The idea is it find the Fibonacci number(Fn)
* that is greater or equal to the size of the array. Then compare the item with the element
* at (Fn-1) position in the array. If they are equal, the search is successful, and the element is at (Fn-1 + 1).
* If the item is smaller, it is searched in the sublist left to (Fn-1).
* If the item is greater, it is searched in the sublist right to (Fn-1). If the item is not found, then again the
* Fibonacci number >= size of the sublist to be searched is taken, and the whole process is repeated
* until the desired element is found, or the sublist is reduced to a single element that is not equal to item.
*/

function minVal (x, y) {
  return (x <= y) ? x : y
}

function fiboNacciSearch (arr, x, size) {
  let fibTwo = 0
  let fibOne = 1
  let fibN = fibTwo + fibOne

  while (fibN < size) {
    fibTwo = fibOne
    fibOne = fibN
    fibN = fibTwo + fibOne
  }

  let offset = -1

  while (fibN > 1) {
    const i = minVal(offset + fibTwo, size - 1)

    if (arr[i] < x) {
      fibN = fibOne
      fibOne = fibTwo
      fibTwo = fibN - fibOne
      offset = i
    } else if (arr[i] > x) {
      fibN = fibTwo
      fibOne = fibOne - fibTwo
      fibTwo = fibN - fibOne
    } else {
      return i
    }

    if ((fibOne && arr[offset + 1]) === x) {
      return offset + 1
    }
    return -1
  }
}

const arr = [10, 22, 35, 40, 45, 50, 80, 82]
const size = arr.length
fiboNacciSearch(arr, 85, size)
fiboNacciSearch(arr, 50, size)
fiboNacciSearch(arr, 35, size)
