/**
 * @function ackermann
 * @description function to calculate the Ackermann function using recursion
 * @param {integer} m - first number
 * @param {integer} n - second number
 * @returns {integer} - result of the Ackermann function
 * @see https://en.wikipedia.org/wiki/Ackermann_function
 * @example  ackermann(3, 4) = 125
 */


function ackermann(m, n) {
    if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}
