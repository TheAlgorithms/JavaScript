// https://projecteuler.net/problem=7

const num = 10001;

let primes = [2,3,5,7,11,13];

const calculatePrime = (num) => {
  let count = primes.length;
  let current = primes[count-1] + 1;
  while (count < num) {
    // go through each prime and see if divisible by the previous primes
    let prime = false;
    primes.some((n, i) => {
      if (current % n !== 0) {
        if (i === count-1) {
          prime = true;
        }
      } else {
        return true;
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