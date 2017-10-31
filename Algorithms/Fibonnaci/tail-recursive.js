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

fibonnaci(10) // = 55
fibonnaci(9) // = 34
fibonnaci(8) // = 21
fibonnaci(7) // = 13
fibonnaci(6) // = 8
fibonnaci(5) // = 5
fibonnaci(4) // = 3
fibonnaci(3) // = 2
fibonnaci(2) // = 1
fibonnaci(1) // = 1
fibonnaci(0) // = 0
