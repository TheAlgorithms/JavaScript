/* In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal
 to n:
 n! = n*(n-1)*(n-2)*..........3*2*1.
 The value of 0! is 1, according to the convention for an empty product.
 For more information visit - https://en.wikipedia.org/wiki/Factorial
 */
function Factorial (n) {
  if (n === 0) {
    return 1
  }
  if (n < 3) {
    return n
  }
  return Factorial(n - 1) * n
}

console.log(Factorial(5))
console.log(Factorial(10))
console.log(Factorial(0))

/* OUTPUT
    120
    3628800
    1
*/
