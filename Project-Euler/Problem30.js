/**
 * The function `digitnPowers` calculates the sum of all numbers that can be expressed as the sum of
 * their digits raised to the power of `n`.
 * @param n - The parameter `n` represents the number of digits in each number that we will be
 * considering.
 * @returns The function `digitnPowers` returns the sum of all numbers that can be expressed as the sum
 * of their digits raised to the power of `n`.
 */
function digitnPowers(n) {
    let max = parseInt(Array(n).fill(9).join(''));
    let s = 0;
    for (let i = 2; i <= 355000; i++) {
        s += decomposition(i, n);
    }
    return s;
}

/**
 * The function "decomposition" checks if the sum of the digits of a number raised to a given power is
 * equal to the original number.
 * @param n - The number to be decomposed into its digits and checked for a specific condition.
 * @param i - The parameter `i` represents the power to which each digit of the number `n` is raised
 * before summing them up.
 * @returns the sum of the digits of the number `n` raised to the power of `i`, if the sum is equal to
 * the original number `n`. Otherwise, it returns 0.
 */
function decomposition(n, i) {
    let arr = [];
    let temp = n;
    while (n !== 0) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    let somme = arr.reduce((acc, el) => acc + Math.pow(el, i), 0);
    return somme === temp ? somme : 0;
}

console.log(digitnPowers(5));
