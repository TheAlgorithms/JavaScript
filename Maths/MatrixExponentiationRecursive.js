/*
  Source:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring

  Complexity:
    O(d^3 log n)
    where: d is the dimension of the square matrix
           n is the power the matrix is raised to
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

const MatMult = (matrixA, matrixB) => {
  // Input: matrixA: 2D Array of Numbers of size n x n
  //        matrixB: 2D Array of Numbers of size n x n
  // Output: matrixA x matrixB: 2D Array of Numbers of size n x n
  // Complexity: O(n^3)
  const n = matrixA.length
  const matrixC = []
  for (let i = 0; i < n; i++) {
    matrixC[i] = []
    for (let j = 0; j < n; j++) {
      matrixC[i][j] = 0
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        matrixC[i][j] += matrixA[i][k] * matrixB[k][j]
      }
    }
  }
  return matrixC
}

export const MatrixExponentiationRecursive = (mat, m) => {
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

// const mat = [[1, 0, 2], [2, 1, 0], [0, 2, 1]]

// // mat ^ 0 = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
// MatrixExponentiationRecursive(mat, 0)

// // mat ^ 1 = [ [ 1, 0, 2 ], [ 2, 1, 0 ], [ 0, 2, 1 ] ]
// MatrixExponentiationRecursive(mat, 1)

// // mat ^ 2 = [ [ 1, 4, 4 ], [ 4, 1, 4 ], [ 4, 4, 1 ] ]
// MatrixExponentiationRecursive(mat, 2)

// // mat ^ 5 = [ [ 1, 4, 4 ], [ 4, 1, 4 ], [ 4, 4, 1 ] ]
// MatrixExponentiationRecursive(mat, 5)
