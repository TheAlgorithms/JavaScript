// program to find sum of digits of a number

// function which would calculate sum and return it
function digitSum (num) {
  // sum will store sum of digits of a number
  let sum = 0
  // while will run untill num become 0
  while (num) {
    sum += (num % 10)
    num = parseInt(num / 10)
  }

  return sum
}

// assigning number
const num = 12345
console.log(digitSum(num))
