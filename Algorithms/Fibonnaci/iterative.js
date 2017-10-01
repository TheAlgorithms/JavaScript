/**
 * an iterative fibonnaci solution
 *
 * @param {number} num the number to find
 *
 * @returns {number} the fibonnaci value of that number
 */
function fibonnaci(num) {
  let prev = 1;
  let pprev = 0;
  let swap;
  while (num > 0) {
    swap = prev;
    prev = pprev + prev;
    pprev = swap;
    num--;
  }
  return pprev;
}
