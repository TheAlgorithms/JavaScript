/**
 * @see https://www.cuemath.com/algebra/roots-of-quadratic-equation/
 * @author Dibya Debayan Dash
 * Calculates the roots of a quadratic equation of the form ax^2 + bx + c = 0.
 *
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @param {number} c - Constant term.
 * @returns {number[]} - An array containing the roots if they are real,
 *                      or an empty array indicating no real roots.
 *
 * @example
 * // Find the roots of the quadratic equation: 2x^2 - 4x + 2 = 0
 * const roots = quadraticRoots(2, -4, 2);
 * // Expected output: [1]
 */
const quadraticRoots = (a, b, c) => {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c

  // Check if roots are real
  if (discriminant < 0) {
    return []
  } else if (discriminant === 0) {
    // One real root
    return [-b / (2 * a)]
  } else {
    // Two real roots
    const sqrtDiscriminant = Math.sqrt(discriminant)
    return [
      (-b + sqrtDiscriminant) / (2 * a),
      (-b - sqrtDiscriminant) / (2 * a)
    ]
  }
}

export { quadraticRoots }
