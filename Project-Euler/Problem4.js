// https://projecteuler.net/problem=4
/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
   Find the largest palindrome made from the product of two 3-digit numbers.
*/
const largestPalindromic = (digits) => {
  let i, n, m, d, inf, sup, limit, number = 0;
  for (i = 1; i < digits; i++) {
    number = 10 * number + 9; //
  }
  inf = number; // highest (digits - 1) number, in this example highest 2 digit number
  sup = 10 * number + 9; // highest (digits) number, in this example highest 3 digit number

  function isPalindromic(n) {
    let p = 0, q = n, r;
    while (n > 0) {
      r = n % 10;
      p = 10 * p + r;
      n = Math.floor(n / 10);
    }
    return p === q; // returning whether the number is palindromic or not
  }

  for (n = sup * sup, m = inf * inf; n > m; n--) {
    if (isPalindromic(n)) {
      limit = Math.ceil(Math.sqrt(n));
      d = sup;
      while (d >= limit) {
        if (n % d === 0 && n / d > inf) {
          return n;
        }
        d -= 1;
      }
    }
  }
  return NaN; // returning not a number, if any such case arise
}

console.log(largestPalindromic(3));