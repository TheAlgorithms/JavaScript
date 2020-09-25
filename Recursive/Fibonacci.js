
//  Just enter the postion of the number you want to find in the fibonacci sequence and the below code will print the number.
//   Fibonacci sequence - 1 1 2 3 5 8 13 21 34 55 ............
//  This code find the answer to that term recursively.

function fibonacci (n) {
  if (n < 2)
  {
    return n
  }

  return fibonacci(n-1) + fibonacci(n-2)
}

console.log( fibonacci(3) )  //  prints the 3rd term in the sequence
console.log( fibonacci(10) )  //  prints the 10th term in the sequence
console.log( fibonacci(20) )  // prints the 20th term in the sequence


// OUTPUT
//  2
//  55
//  6765
