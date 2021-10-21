// function to find factorial using recursion
// example :
//    5! = 1*2*3*4*5 = 120
//    2! = 1*2 = 2

export const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
