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
