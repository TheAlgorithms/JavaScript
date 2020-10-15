/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/prime_check.py

  Complexity:
    O(sqrt(n))
*/

const PrimeCheck = (n) => {
  // input: n: int
  // output: boolean
  if (n === 1) return false
  if (n === 0) return false

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export { PrimeCheck }
