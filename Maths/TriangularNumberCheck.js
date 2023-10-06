/**
 *   github author: chrdek
 *   license: GPL-3.0 or later
 *
 *   @param {number} n = number to be determined whether is a triangular or not
 *   
 *   The function below is a mathematical algorithm to check if a given number n is a triangular number.
 *   A triangular number is one that can be represented 
 *   in the form of the sum of consecutive positive integers starting from 1.
 *
 *   Returns -1 for error input or negative numerical input, 0 for non-triangular
 *   and an integer value if the number is triangular.
 *   
 *   The variable discriminant is calculated as the square root of (1 + 8 * n) and then its square root is taken again.
 *   The expression Math.sqrt(1 + 8 * n) is the discriminant of the quadratic equation that represents triangular numbers.
 *   
 **/

function TriangularNumberCheck(n) {
  // Ensure the input n is a non-negative integer, retrurn -1 to indicate error.
  if (!Number.isInteger(n) || n < 0) {
    return -1;
    }

  // Calculate the discriminant of the quadratic equation
  const discriminant = Math.sqrt(1 + 8 * n);

  // Check if the discriminant is an integer
  if (discriminant % 1 === 0) {

    // Return half of the integer value of the discriminant
    return Math.floor(discriminant / 2);
    } else {
    // If not a triangular number, return 0
    return 0;
  }
}

export { TriangularNumberCheck }
