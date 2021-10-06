/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/prime_factors.py
*/

const PrimeFactors = (n) => {
  // input: n: int
  // output: primeFactors: Array of all prime factors of n
  const primeFactors = []
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      while (n % i === 0) {
        primeFactors.push(i)
        n = Math.floor(n / i)
      }
    }
  }
  if (n > 1) {
    primeFactors.push(n)
  }
  return primeFactors
}

const main = () => {
  // PrimeFactors(100)
  // > [ 2, 2, 5, 5 ]
  console.log(PrimeFactors(100))
  // PrimeFactors(2560)
  // > [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 5 ]
  console.log(PrimeFactors(2560))
}

main()
