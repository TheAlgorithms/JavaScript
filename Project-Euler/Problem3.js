// https://projecteuler.net/problem=3
const problem = 600851475143

const largestPrime = (number) => {
  let largestFact = 0
  let counter = 2

  while (counter ** 2 <= number || number > largestFact) {
    if (number % counter == 0) {
      number /= counter
    } else {
      counter++
    }

    largestFact = number
  }

  return largestFact
}
console.log(largestPrime(problem))
