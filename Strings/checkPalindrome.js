// JavaScript implementation of palindrome check
// More details: https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
/**
 * @description Check if the input is a palindrome
 * 
 * @param {string|number} input
 * @returns {boolean} is input a palindrome?
 */
function checkPalindrome(input) {
    // Only strings and numbers can be palindrome
    if (typeof input !== 'string' && typeof input !== 'number') {
        return null;
    }

    // Convert given number to string
    if (typeof input === 'number') {
        input = String(input);
    }

    return input === input.split('').reverse().join('');
}

// Test
let input = 'ABCDCBA';
console.log(checkPalindrome(input)); // true

input = 12321;
console.log(checkPalindrome(input)); // true

input = 123.321;
console.log(checkPalindrome(input)); // true

input = 'ABCD';
console.log(checkPalindrome(input)); // false

input = 123.4;
console.log(checkPalindrome(input)); // false

input = {};
console.log(checkPalindrome(input)) // null