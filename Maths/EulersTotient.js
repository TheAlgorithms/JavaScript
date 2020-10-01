/*
  Source:
    https://en.wikipedia.org/wiki/Euler%27s_totient_function

  EulersTotient(n) = n * product(1 - 1/p for all prime p dividing n)

  Complexity:
    O(sqrt(n))
*/

const EulersTotient = (n) => {
  // input: n: int
  // output: phi(n): count of numbers b/w 1 and n that are coprime to n
  let res = n
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      while (n % i === 0) {
        n = Math.floor(n / i)
      }
      // i is a prime diving n, multiply res by 1 - 1/i
      // res = res * (1 - 1/i) = res - (res / i)
      res = res - Math.floor(res / i)
    }
  }
  if (n > 1) {
    res = res - Math.floor(res / n)
  }
  return res
}

const main = () => {
  // EulersTotient(9) = 6 as 1, 2, 4, 5, 7, and 8 are coprime to 9
  // > 6
  console.log(EulersTotient(9))
  // EulersTotient(10) = 4 as 1, 3, 7, 9 are coprime to 10
  // > 4
  console.log(EulersTotient(10))
}

main()
