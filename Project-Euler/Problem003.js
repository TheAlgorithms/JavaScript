// https://projecteuler.net/problem=3

export const largestPrime = (num = 600851475143) => {
  let newnum = num
  let largestFactor = 0
  let counter = 2
  while (counter * counter <= newnum) {
    if (newnum % counter === 0) {
      newnum = newnum / counter
    } else {
      counter++
    }
  }
  if (newnum > largestFact) {
    largestFactor = newnum;
  }
  return largestFactor;
}
