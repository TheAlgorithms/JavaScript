// Wikipedia URL for General Matrix Multiplication Concepts: https://en.wikipedia.org/wiki/Matrix_multiplication

// This algorithm has multiple functions that ultimately check if the inputs are actually matrices and if two Matrices (that can be different sizes) can be multiplied together. 
// If they can be, then the matrixMult function returns the product of the two matrices. I have included two test scenarios in the file. The first is the multiplication of two
// matrices that are of the same size [2x2]x[2x2], and the second is the multiplication of two matrices that are not the same size [2x3]x[3x2].

// MatrixCheck tests to see if all of the rows of the matrix inputted have similar size columns
const matrixCheck = (matrix) => {
  let columnNumb
  for (let index = 0; index < matrix.length; index++) {
    if (index === 0) {
      columnNumb = matrix[index].length
    } else if (matrix[index].length !== columnNumb) {
      console.log('The columns in this array are not equal')
    } else {
      return columnNumb
    }
  }
}

// tests to see if the matrices have a like side, i.e. the row length on the first matrix matches the column length on the second matrix, or vise versa.
const twoMatricesCheck = (first, second) => {
  const [firstRowLength, secondRowLength, firstColLength, secondColLength] = [first.length, second.length, matrixCheck(first), matrixCheck(second)]
  if (firstRowLength !== secondColLength || secondRowLength !== firstColLength) {
    console.log('These matrices do not have a common side')
    return false
  } else {
    return true
  }
}

// returns an empty array that has the same number of rows as the left matrix being multiplied.
// Uses Array.prototype.map() to loop over the first (or left) matrix and returns an empty array on each iteration.
const initiateEmptyArray = (first, second) => {
  if (twoMatricesCheck(first, second)) {
    const emptyArray = first.map(() => {
      return ['']
    })
    return emptyArray
  } else {
    return false
  }
}

// Finally, `matrixMult` uses `Array.prototype.push()`, multiple layers of nested `for` loops, the addition assignment `+=` operator and multiplication operator `*` to perform the dot product between two matrices of differing sizes.
// Dot product, takes the row of the first matrix and multiplies it by the column of the second matrix, the `twoMatricesCheck` tested to see if they were the same size already.
// The dot product for each iteration is then saved to its respective index into `multMatrix`.
const matrixMult = (firstArray, secondArray) => {
  const multMatrix = initiateEmptyArray(firstArray, secondArray)
  for (let rm = 0; rm < firstArray.length; rm++) {
    const rowMult = []
    for (let col = 0; col < firstArray[0].length; col++) {
      rowMult.push(firstArray[rm][col])
    }
    for (let cm = 0; cm < firstArray.length; cm++) {
      const colMult = []
      for (let row = 0; row < secondArray.length; row++) {
        colMult.push(secondArray[row][cm])
      }
      let newNumb = 0
      for (let index = 0; index < rowMult.length; index++) {
        newNumb += rowMult[index] * colMult[index]
      }
      multMatrix[rm][cm] = newNumb
    }
  }
  return multMatrix
}

const firstMatrix = [
  [1, 2],
  [3, 4]
]

const secondMatrix = [
  [5, 6],
  [7, 8]
]

console.log(matrixMult(firstMatrix, secondMatrix)) // [ [ 19, 22 ], [ 43, 50 ] ]

const thirdMatrix = [
  [-1, 4, 1],
  [7, -6, 2]
]
const fourthMatrix = [
  [2, -2],
  [5, 3],
  [3, 2]
]

console.log(matrixMult(thirdMatrix, fourthMatrix)) // [ [ 21, 16 ], [ -10, -28 ] ]
