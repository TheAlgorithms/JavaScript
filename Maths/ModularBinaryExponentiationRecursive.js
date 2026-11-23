/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exp_mod.py

  Explanation:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

const multiplyModulo = (a, b, m) => Number((BigInt(a) * BigInt(b)) % BigInt(m))

const modularBinaryExponentiation = (a, n, m) => {
  // input: a: int, n: int, m: int
  // returns: (a^n) % m: int
  if (n === 0) {
    return 1 % m
  } else if (n % 2 === 1) {
    return multiplyModulo(modularBinaryExponentiation(a, n - 1, m), a, m)
  } else {
    const b = modularBinaryExponentiation(a, n / 2, m)
    return multiplyModulo(b, b, m)
  }
}

export { modularBinaryExponentiation }
