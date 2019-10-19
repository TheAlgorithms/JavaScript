/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/factorial_python.py

    This script will find the factorial of a number provided by the user.

    More about factorials:
        https://en.wikipedia.org/wiki/factorial
*/

"use strict";

var f = [];
function calc_factorial(num) {
    if (num < 0) {
        return "Sorry, factorial does not exist for negative numbers.";
    }
    if (num === null || num === undefined) {
        return "Sorry, factorial does not exist for null or undefined numbers.";
    }
  if (num === 0 || num === 1)
    return 1;
    
  if (f[num] > 0)
    return f[num];
    
  return f[num] = factorial(num-1) * num;
} 


// Run `factorial` Function to find average of a list of numbers.
var num = prompt("Enter a number: ");
alert(calc_factorial(num));
