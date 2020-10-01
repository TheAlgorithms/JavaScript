// Resource: https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php

function factorial(x) {
  /*
    Calculates Factorial of a numbers 
    :param : number for which you want to find factorial 
    :return: Factorial of the numbers
    */
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));
