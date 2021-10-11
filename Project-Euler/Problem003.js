// https://projecteuler.net/problem=3

export const largestPrime = (num = 600851475143) => {
  let newnumm = num
  let largestFact = 0
  let counter = 2
  while (counter * counter <= newnumm) {
    if (newnumm % counter === 0) {
      newnumm = newnumm / counter
    } else {
      counter++
    }
  }
  if (newnumm > largestFact) {
    largestFact = newnumm
  }
  return largestFact
}
