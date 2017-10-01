/**
  * a recursive fibonnaci solution with growing call stack
  *
  * @param {number} num the number to find
  *
  * @returns {number} the fibonnaci value of that number
  */
function fibonnaci(num) {
 if (num === 0) return 0;
 else if (num === 1) return 1;
 return fibonnaci(num - 2) + fibonnaci(num - 1);
}
