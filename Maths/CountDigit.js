/*

    1. This program will ask a user to enter a number
    2. Then it will count the number of digits present in the given number
    3. Will print the number of digits in console

*/

function CountDigit (number) {
    var digits = Math.floor(Math.log10(number) + 1);
    return digits;
}

console.log('The number of digits in the number: ' + CountDigit(parseInt(prompt('Enter the number: '))));