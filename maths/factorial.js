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

function calc_range(num) {
    // Generate a range of numbers from 1 to `num`.
    var i = 1;
    var range = [];
    while (i <= num) {
        range.push(i);
        i += 1;
    }
    return range;
}

function calc_factorial(num) {
    var factorial;
    var range = calc_range(num);

    // Check if the number is negative, positive, null, undefined, or zero
    if (num < 0) {
        return "Sorry, factorial does not exist for negative numbers.";
    }
    if (num === null || num === undefined) {
        return "Sorry, factorial does not exist for null or undefined numbers.";
    }
    if (num === 0) {
        return "The factorial of 0 is 1.";
    }
    if (num > 0) {
        factorial = 1;
        range.forEach(function (i) {
            factorial = factorial * i;
        });
        return "The factorial of " + num + " is " + factorial;
    }
}

// Run `factorial` Function to find average of a list of numbers.
var num = prompt("Enter a number: ");
alert(calc_factorial(num));
