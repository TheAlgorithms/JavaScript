/*
Wikipedia -> https://en.wikipedia.org/wiki/Matrix_multiplication

Q. -> Given two matrices `A` and `B`, find the product of both matrices.
Matrix multiplication is only possible when the number of columns in A equals the number of rows in B.

Formula -> 
If A is of size (n × m) and B is of size (m × p),
then the result matrix C will be of size (n × p),
where each element C[i][j] = Σ (A[i][k] * B[k][j]) for k = 0 to m-1.

Algorithm details ->
time complexity - O(n * m * p)
space complexity - O(n * p)
*/

const matrixMultiplication = (A, B) => {
  const n = A.length;           // rows in A
  const m = A[0].length;        // columns in A (and rows in B)
  const p = B[0].length;        // columns in B

  // Check if multiplication is possible
  if (m !== B.length) {
    throw new Error('Matrix multiplication not possible: columns of A must equal rows of B');
  }

  // Create a result matrix filled with 0s of size (n × p)
  const result = new Array(n).fill(0).map(() => new Array(p).fill(0));

  /*
    Perform matrix multiplication:
    For each row in A and column in B,
    multiply and sum corresponding elements.
  */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < m; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
};

// Example usage
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log(matrixMultiplication(A, B));
// Output: [ [ 58, 64 ], [ 139, 154 ] ]

export { matrixMultiplication };
