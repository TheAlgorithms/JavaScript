/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

export const findSmallestMultiple = (maxDivisor) => {
  const divisors = Array.from({ length: maxDivisor }, (_, i) => i + 1)
  let num = maxDivisor + 1
  let result

  while (!result) {
    const isDivisibleByAll = divisors.every((divisor) => num % divisor === 0)
    if (isDivisibleByAll) result = num
    else num++
  }

  return result
}
