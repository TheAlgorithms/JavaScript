/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exp_mod.py

  Explaination:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

const modularBinaryExponentiation = (a, n, m) => {
  // input: a: int, n: int, m: int
  // returns: (a^n) % m: int
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return (modularBinaryExponentiation(a, n - 1, m) * a) % m
  } else {
    const b = modularBinaryExponentiation(a, n / 2, m)
    return (b * b) % m
  }
}

const main = () => {
  // binary_exponentiation(2, 10, 17)
  // > 4
  console.log(modularBinaryExponentiation(2, 10, 17))
  // binary_exponentiation(3, 9, 12)
  // > 3
  console.log(modularBinaryExponentiation(3, 9, 12))
}

main()
