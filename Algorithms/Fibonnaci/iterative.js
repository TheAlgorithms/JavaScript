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


fibonnaci(10) // = 55
fibonnaci(9) // = 34
fibonnaci(8) // = 21
fibonnaci(7) // = 13
fibonnaci(6) // = 8
fibonnaci(5) // = 5
fibonnaci(4) // = 3
fibonnaci(3)) // = 2
fibonnaci(2) // = 1
fibonnaci(1) // = 1
fibonnaci(0) // = 0
