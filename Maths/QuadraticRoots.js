/**
 *
 * Author - Dibya Debayan Dash
 * Date: - 30/09/2023
 * Calculates the roots of a quadratic equation of the form ax^2 + bx + c = 0.
 *
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @param {number} c - Constant term.
 * @returns {number[]|string} - An array containing the roots if they are real,
 *                              or a string indicating no real roots.
 */

const quadraticRoots = (a, b, c) => {
  // Calculate the discriminant
  var discriminant = b * b - 4 * a * c

  // Check if roots are real
  if (discriminant < 0) {
    return 'No real roots'
  } else if (discriminant === 0) {
    // One real root
    var root = -b / (2 * a)
    return [root]
  } else {
    // Two real roots
    var sqrtDiscriminant = Math.sqrt(discriminant)
    var root1 = (-b + sqrtDiscriminant) / (2 * a)
    var root2 = (-b - sqrtDiscriminant) / (2 * a)
    return [root1, root2]
  }
}
export { quadraticRoots }

// Example usage
// var a = 1
// var b = -3
// var c = 2

// var roots = quadraticRoots(a, b, c)   [2,1]
