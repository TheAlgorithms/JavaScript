/**
 * @function Matrix
 * @description Traverses/Unrolls array of arrays recursively until nothing is left.
 * @param {Array} matrix - The input array of arrays
 * @return {void}.
 */

const UnrollMatrix = (matrix) => {
  if (matrix.length === 0) return matrix

  // sweep top to right
  matrix.length > 0 ? console.log(...matrix.shift()) : null;
  // sweet top-right to bottom
  matrix.length > 0 ? console.log(...matrix.map((arr) => arr.pop())) : null;
  // sweep bottom in reverse
  matrix.length > 0 ? console.log(...matrix.reverse().pop()) : null;
  // sweep bottom-left to top
  matrix.length > 0 ? console.log(...matrix.map((arr) => arr.reverse().shift())) : null;

  return UnrollMatrix(matrix)
}

export { UnrollMatrix }
