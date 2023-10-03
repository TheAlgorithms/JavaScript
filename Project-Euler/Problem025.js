/**
* Problem 25 - 1000-digit Fibonacci number
*
* @see {@link https://projecteuler.net/problem=25}
*
* The Fibonacci sequence is defined by the recurrence relation:
*
* Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
*
* Hence the first 12 terms will be:
*
* F1 = 1
* F2 = 1
* F3 = 2
* F4 = 3
* F5 = 5
* F6 = 8
* F7 = 13
* F8 = 21
* F9 = 34
* F10 = 55
* F11 = 89
* F12 = 144
* The 12th term, F12, is the first term to contain three digits.

* What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

// brute force method

function fibonacciIndex(t = 1000) {
  const digits = 10n ** BigInt(t - 1)
  let fib0 = BigInt(0)
  let fib1 = BigInt(1)
  let index = 1
  while (fib1 < digits) {
    // using this to compare number of digits instead of .toString() significantly improved run time
    const tempfib = fib1
    fib1 = fib1 + fib0
    fib0 = tempfib
    index += 1
  }
  return index
}

export { fibonacciIndex }
