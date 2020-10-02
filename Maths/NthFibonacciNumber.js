/*
  Description of Algo:
    Finds the nth Fibonacci Number using Matrix Exponentiation

  Source:
    https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

  Complexity:
    O(log n)
*/

const Identity = (n) => {
  // Input: n: int
  // Output: res: Identity matrix of size n x n
  // Complexity: O(n^2)
  const res = []
  for (let i = 0; i < n; i++) {
    res[i] = []
    for (let j = 0; j < n; j++) {
      res[i][j] = i === j ? 1 : 0
    }
  }
  return res
}

const MatMult = (matA, matB) => {
  // Input: matA: 2D Array of Numbers of size n x n
  //        matB: 2D Array of Numbers of size n x n
  // Output: matA x matB: 2D Array of Numbers of size n x n
  // Complexity: O(n^3)
  const n = matA.length
  const matC = []
  for (let i = 0; i < n; i++) {
    matC[i] = []
    for (let j = 0; j < n; j++) {
      matC[i][j] = 0
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        matC[i][j] += matA[i][k] * matB[k][j]
      }
    }
  }
  return matC
}

const MatrixExponentiationRecursive = (mat, m) => {
  // Input: mat: 2D Array of Numbers of size n x n
  // Output: mat^n: 2D Array of Numbers of size n x n
  // Complexity: O(n^3 log m)
  if (m === 0) {
    // return identity matrix of size n x n
    return Identity(mat.length)
  } else if (m % 2 === 1) {
    // tmp = mat ^ m-1
    const tmp = MatrixExponentiationRecursive(mat, m - 1)
    /// return tmp * mat = (mat ^ m-1) * mat = mat ^ m
    return MatMult(tmp, mat)
  } else {
    // tmp = mat ^ m/2
    const tmp = MatrixExponentiationRecursive(mat, m >> 1)
    // return tmp * tmp = (mat ^ m/2) ^ 2 = mat ^ m
    return MatMult(tmp, tmp)
  }
}

const NthFibonacciNumber = (n) => {
  // | f(n)   | = | f(n - 1) | x | 1 1 |
  // | f(n-1) |   | f(n - 2) |   | 1 0 |
  const mat = [[1, 1], [1, 0]]
  return MatrixExponentiationRecursive(mat, n - 1)[0][0]
}

const main = () => {
  // fib(1) = 1
  console.log(NthFibonacciNumber(1))
  // fib(2) = 1
  console.log(NthFibonacciNumber(2))
  // fib(3) = 2
  console.log(NthFibonacciNumber(3))
  // fib(4) = 3
  console.log(NthFibonacciNumber(4))
  // fib(5) = 5
  console.log(NthFibonacciNumber(5))
  // fib(50) = 12586269025
  console.log(NthFibonacciNumber(50))
}

main()
