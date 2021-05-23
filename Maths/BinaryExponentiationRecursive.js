/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exponentiation.py

  Explaination:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

const binaryExponentiation = (a, n) => {
  // input: a: int, n: int
  // returns: a^n: int
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return binaryExponentiation(a, n - 1) * a
  } else {
    const b = binaryExponentiation(a, n / 2)
    return b * b
  }
}

const main = () => {
  // binary_exponentiation(2, 10)
  // > 1024
  console.log(binaryExponentiation(2, 10))
  // binary_exponentiation(3, 9)
  // > 19683
  console.log(binaryExponentiation(3, 9))
}

main()
