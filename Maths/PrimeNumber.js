/*
    author: Theepag
    license: GPL-3.0 or later

    This script will check weather given number is a prime number or not.

    More about prime number:
        https://en.wikipedia.org/wiki/Prime_number
*/

function test_prime(n) {
    // Check `n` is a prime number or not.
    'use strict'
    if (n===1) {
        return false;
    }
    else if(n === 2) {
        return true;
    }
    else {
        for(var x = 2; x < n; x++) {
            if(n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
// Initilizing number
num = 37;
if (test_prime(num)) {
    console.log(`${num} is a prime number!`);
} else {
    console.log(`${num} is not a prime number!`);
}
  