/*    Multiples of 3 and 5
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesThreeAndFive (num) {
  let total = 0
  // total for calculating the sum
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i
    }
  }
  return total
}

var num = console.log('Enter a number: ')
console.log(multiplesThreeAndFive(num)) // multiples3_5 function to calculate the sum of multiples of 3 and 5 within num
