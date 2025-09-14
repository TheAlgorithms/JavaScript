/**
 * Digital Root of n by Recursive Approach
 * Time Complexity : O(1) - Mathematical Formula
 * Time Complexity : O(log n) - Recursive Approach
 * For more info: https://en.wikipedia.org/wiki/Digital_root
 * 
 * Mathematical Formula: DigitalRoot(n)= 1 + (n - 1) mod 9
 * Recursive Formula: DigitalRoot(n)= n if n<10 else if digitalRoot(sumOfDigits)
 * 
 * @param {number} n 
 * @returns {number}- digital root of n
 * @description
 * The digital root of a non-negative integer is the single digit value obtained by an iterative process of summing digits, on each iteration using the result from the previous iteration to compute a digit sum. The process continues until a single-digit number is reached.
 */


const digitalRoot = (n) => {
  if (n === 0) return 0;
  return 1 + (n - 1) % 9;
};

const recursiveDigitalRoot = (n) => {
  if (n < 10) return n;
  let sum = 0;
    while (n > 0) { 
        sum += n % 10;
        n = Math.floor(n / 10);
    }
  return recursiveDigitalRoot(sum);
}

export { digitalRoot,recursiveDigitalRoot };