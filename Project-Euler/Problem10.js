// https://projecteuler.net/problem=10

const isPrime = (number) => {
  let flag = true
  for (let j = number - 1; j >= 2; j--) {
    if (number % j === 0) {
      flag = false
    }
  }
  return flag
}

const calculateSumOfPrimeNumbers = (maxNumber) => {
  let sum = 0
  for (let i = maxNumber - 1; i >= 2; i--) {
    if (isPrime(i) === true) {
      sum += i
    }
  }
  return sum
}
export { calculateSumOfPrimeNumbers }
