/**
* Problem 20 - 1000-digit Fibonacci number
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

function fibonacci(n) {
  // Creates an array of Fibonacci numbers using the Fibonacci formula. Returns the nth element of the array.
  if (n === 1) {
    return 0
  }
  else if (n === 2) {
    return 1
  }
  else {
    let series = [0,1]
    for (let i = 2; i <= n; i++) {
      series.push(series[i-1]+series[i-2])
    }
    return series[n]
  }
}

function fibonacciIndex(n = 1000) {
  // Computes incrementing Fibonacci numbers starting from 3 and checks if its length is equal to n. Returns the term of the sequence in which it happens first.
  let digits = 0
  let index = 2
  while (digits < n) {
    index += 1
    digits = fibonacci(index).toString().length
  }
  return index
}

export { fibonacciIndex }
