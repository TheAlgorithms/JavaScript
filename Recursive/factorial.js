// function to find factorial using recursion
// example :
//    5! = 1*2*3*4*5 = 120
//    2! = 1*2 = 2

const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

// testing
console.log(factorial(4))
console.log(factorial(15))
console.log(factorial(0))
