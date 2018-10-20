// JS algorithm of Integer Reversal

const reverse = integer =>
  parseInt(integer 
    .toString()
    .split("")
    .reverse()
    .join("")
  ) * Math.sign(integer);
    
// Test
console.log(reverse(4729));
console.log(reverse(-270));