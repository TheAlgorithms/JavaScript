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
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export { PrimeCheck }
