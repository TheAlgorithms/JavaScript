/**
 * @function getDivisors
 * @description Generate all unique divisors of a number.
 * @param {Integer} num
 * @return{[]Integer} divisors
 * @example{10-1,2,5,10}
 */
function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i * i <= num; i++) {
      if (num% i === 0) {
        if (num / i !== i) {
          divisors.push(i);
          const div = num/ i;
          divisors.push(div);
        } else {
          divisors.push(i);
        }
      }
    }
    divisors.sort((a, b) => a - b);
    return divisors;
  }
  
