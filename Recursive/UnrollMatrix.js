/**
 * @function Matrix
 * @description Traverses/Unrolls array of arrays recursively until nothing is left.
 * @param {Array} matrix - The input array of arrays
 * @return {void}.
 * @see https://chortle.ccsu.edu/vectorlessons/vmch13/vmch13_2.html
 */

const UnrollMatrix = (matrix) => {
  if (matrix.length === 0) return matrix

  // sweep top to right
  if (matrix.length > 0) {
    console.log(...matrix.shift())
  }

  // sweet top-right to bottom
  if (matrix.length > 0) {
    console.log(...matrix.map((arr) => arr.pop()))
  }

  // sweep bottom in reverse
  if (matrix.length > 0) {
    console.log(...matrix.reverse().pop())
  }

  // sweep bottom-left to top
  if (matrix.length > 0) {
    console.log(...matrix.map((arr) => arr.reverse().shift()))
  }

  return UnrollMatrix(matrix)
}

export { UnrollMatrix }
