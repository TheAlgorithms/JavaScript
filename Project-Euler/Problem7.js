// https://projecteuler.net/problem=7

const num = 10001;

let primes = [2,3,5,7,11,13]; // given list of primes you start with

const calculatePrime = (num) => {
  let count = primes.length; // count number of primes calculated
  let current = primes[count-1] + 1; // current number being assessed if prime
  while (count < num) { // repeat while we haven't reached goal number of primes
    // go through each prime and see if divisible by the previous primes
    let prime = false;
    primes.some((n, i) => {
      if (current % n === 0) {
        return true;
      }
      if (i === count-1) {
        prime = true;
      }
    })
    if (prime) {
      primes.push(current);
      count += 1;
    }
    current += 1;
  }
  return primes[num-1];
}

console.log(calculatePrime(num));