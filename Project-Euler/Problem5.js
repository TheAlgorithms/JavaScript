/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const findSmallestMultiple = () => {
  const divisors = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  let num = 21
  let result

  while (!result) {
    const isDivisibleByAll = divisors.every((divisor) => num % divisor === 0)
    if (isDivisibleByAll) result = num
    else num++
  }

  return result
}

console.log(findSmallestMultiple())
