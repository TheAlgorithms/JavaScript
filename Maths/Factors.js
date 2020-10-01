/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/factors.py

  Complexity:
    O(n)
*/

const Factors = (n) => {
  // input: n: int
  // output: res: Array of all positive factors of n
  const factors = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

const main = () => {
  // Factors(12)
  // > [ 1, 2, 3, 4, 6, 12 ]
  console.log(Factors(12))
  // Faxtors(15)
  // > [ 1, 3, 5, 15 ]
  console.log(Factors(15))
}

main()
