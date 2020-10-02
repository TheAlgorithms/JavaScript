/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/prime_check.py

  Complexity:
    O(sqrt(n))
*/

const PrimeCheck = (n) => {
  // input: n: int
  // output: boolean
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const main = () => {
  // PrimeCheck(1000003)
  // > true
  console.log(PrimeCheck(1000003))
  // PrimeCheck(1000001)
  // > false
  console.log(PrimeCheck(1000001))
}

main()
