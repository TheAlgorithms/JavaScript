/**
 * A tail recursive fibonnaci, without stack issue
 *
 * @param {number}   num       the number to find
 * @param {number} [prev=1]  the previous value
 * @param {number} [pprev=0] the previous, previous value
 *
 * @returns {number} the fibonnaci value of that number
 */
function fibonnaci(num, prev = 1, pprev = 0) {
  if (num === 0) return pprev;
  return fibonnaci(num - 1, prev + pprev, prev);
}
