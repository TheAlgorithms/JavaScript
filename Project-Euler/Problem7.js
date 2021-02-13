/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

const get10001stPrime = () => {
  let count = 0
  let num = 1

  while (count !== 10001) {
    num++
    if (isPrime(num)) {
      count++
    }
  }

  return num
}

console.log(get10001stPrime())
