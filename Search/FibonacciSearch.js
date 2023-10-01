/****************************************************************************
 * Fibonacci Search JavaScript Implementation
 * Author   Alhassan Atama Isiaka
 * Version v1.0.0
 * Copyright 2020
 * https://github.com/komputarist
 *
 * This implementation is based on Generalizing the Fibonacci search we
 * define the Fibonacci search of degree K. Like the Fibonacci search,
 * which it reduces to for K = 2, the Fibonacci search of degree K
 * involves only addition and subtraction.
 *  Capocelli R.M. (1991) A Generalization of the Fibonacci Search. In:
 * Bergum G.E., Philippou A.N., Horadam A.F. (eds) Applications of Fibonacci
 * Numbers. Springer, Dordrecht. https://doi.org/10.1007/978-94-011-3586-3_9
 *
 * This snippet is free. Feel free to improve on it
 *
 * We define a function fibonacciSearch() that takes an array of numbers,
 * the item (number) to be searched for and the length of the items in the array
 ****************************************************************************/

export const fibonacciSearch = (arr, x, n) => {
  let fib2 = 0 // (K-2)'th Fibonacci Number
  let fib1 = 1 // (K-1)'th Fibonacci Number.
  let fibK = fib2 + fib1 // Kth Fibonacci

  /* We want to store the smallest fibonacci number smaller such that
    number is greater than or equal to n, we use fibK for this */
  while (fibK < n) {
    fib2 = fib1
    fib1 = fibK
    fibK = fib2 + fib1
  }
  //  This marks the eliminated range from front
  let offset = -1

  /* while there are elements to be checked. We compare arr[fib2] with x.
    When fibM becomes 1, fib2 becomes 0 */

  while (fibK > 1) {
    // Check if fibK is a valid location
    const i = Math.min(offset + fib2, n - 1)

    /*  If x is greater than the value at
      index fib2, Partition the subarray array
      from offset to i */
    if (arr[i] < x) {
      fibK = fib1
      fib1 = fib2
      fib2 = fibK - fib1
      offset = i
      /* If x is greater than the value at
            index fib2, cut the subarray array
            from offset to i */
    } else if (arr[i] > x) {
      fibK = fib2
      fib1 = fib1 - fib2
      fib2 = fibK - fib1
    } else {
      //  return index for found element
      return i
    }
  }

  //    comparing the last element with x */
  if (fib1 && arr[offset + 1] === x) {
    return offset + 1
  }
  //    element not found. return -1
  return -1
}

// Example
// const myArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
// const n = myArray.length
// const x = 90
// const fibFinder = fibonacciSearch(myArray, x, n)
