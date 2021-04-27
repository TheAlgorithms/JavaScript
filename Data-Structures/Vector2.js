/**
 * In mathematics and physics, a vector is an element of a vector space. The Vector2-class
 * implements 2-dimensional vectors together with various vector-operations (description adapted from
 * https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)).
 */

/*
Doctests

// Test equalsExactly-method
> new Vector2(1, 0).equalsExactly(new Vector2(1, 0))
true
> new Vector2(1.23, 4.56).equalsExactly(new Vector2(0, 0))
false

// Test equalsApproximately-method
> new Vector2(1, 0).equalsApproximately(new Vector2(1, 0.0000001), 0.000001)
true
> new Vector2(1.23, 4.56).equalsApproximately(new Vector2(1.24, 4.56), 0.000001)
false

// Test add-method
> new Vector2(1, 0).add(new Vector2(0, 1)).equalsApproximately(new Vector2(1, 1), 0.000001)
true
> new Vector2(-3.3, -9).add(new Vector2(-2.2, 3)).equalsApproximately(new Vector2(-5.5, -6), 0.000001)
true

// Test subtract-method
> new Vector2(1, 0).subtract(new Vector2(0, 1)).equalsApproximately(new Vector2(1, -1), 0.000001)
true
> new Vector2(234.5, 1.7).subtract(new Vector2(3.3, 2.7)).equalsApproximately(new Vector2(231.2, -1), 0.000001)
true

// Test multiply-method
> new Vector2(1, 0).multiply(5).equalsApproximately(new Vector2(5, 0), 0.000001)
true
> new Vector2(3.41, -7.12).multiply(-3.1).equalsApproximately(new Vector2(-10.571, 22.072), 0.000001)
true

// Test length-method
> new Vector2(1, 0).length()
1
> new Vector2(-1, 1).length()
Math.sqrt(2)

// Test normalize-method
> new Vector2(1, 0).normalize().equalsApproximately(new Vector2(1, 0), 0.000001)
true
> new Vector2(1, -1).normalize().equalsApproximately(new Vector2(Math.sqrt(2) / 2, -Math.sqrt(2) / 2), 0.000001)
true

// Test distance-method
> new Vector2(0, 0).distance(new Vector2(0, -1))
1
> new Vector2(1, 0).distance(new Vector2(0, 1))
Math.sqrt(2)

// Test dotProduct-method
> new Vector2(1, 0).dotProduct(new Vector2(0, 1))
0
> new Vector2(1, 2).dotProduct(new Vector2(3, 4))
1 * 3 + 2 * 4

// Test rotate-method
> new Vector2(0, -1).rotate(Math.PI / 2).equalsApproximately(new Vector2(1, 0), 0.000001)
true
> new Vector2(1.23, -4.56).rotate(Math.PI).equalsApproximately(new Vector2(-1.23, 4.56), 0.000001)
true

// Test angleBetween-method
> new Vector2(1, 0).angleBetween(new Vector2(0, 1))
Math.PI / 2
> new Vector2(1, 0).angleBetween(new Vector2(1, -1))
-Math.PI / 4
*/
class Vector2 { // eslint-disable-line no-unused-vars
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  /**
   * Check for exact vector equality.
   *
   * @param vector The vector to compare to.
   * @returns Whether they are exactly equal or not.
   */
  equalsExactly (vector) {
    return this.x === vector.x && this.y === vector.y
  }

  /**
   * Check for approximate vector equality.
   *
   * @param vector The vector to compare to.
   * @param epsilon The allowed discrepancy for the x-values and the y-values.
   * @returns Whether they are approximately equal or not.
   */
  equalsApproximately (vector, epsilon) {
    return (Math.abs(this.x - vector.x) < epsilon && Math.abs(this.y - vector.y) < epsilon)
  }

  /**
   * Vector length.
   *
   * @returns The length of the vector.
   */
  length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Normalization sets the vector to length 1 while maintaining its direction.
   *
   * @returns The normalized vector.
   */
  normalize () {
    const length = this.length()
    if (length === 0) {
      throw new Error('Cannot normalize vectors of length 0')
    }
    return new Vector2(this.x / length, this.y / length)
  }

  /**
   * Vector addition
   *
   * @param vector The vector to be added.
   * @returns The sum-vector.
   */
  add (vector) {
    const x = this.x + vector.x
    const y = this.y + vector.y
    return new Vector2(x, y)
  }

  /**
   * Vector subtraction
   *
   * @param vector The vector to be subtracted.
   * @returns The difference-vector.
   */
  subtract (vector) {
    const x = this.x - vector.x
    const y = this.y - vector.y
    return new Vector2(x, y)
  }

  /**
   * Vector scalar multiplication
   *
   * @param scalar The factor by which to multiply the vector.
   * @returns The scaled vector.
   */
  multiply (scalar) {
    const x = this.x * scalar
    const y = this.y * scalar
    return new Vector2(x, y)
  }

  /**
   * Distance between this vector and another vector.
   *
   * @param vector The vector to which to calculate the distance.
   * @returns The distance.
   */
  distance (vector) {
    const difference = vector.subtract(this)
    return difference.length()
  }

  /**
   * Vector dot product
   *
   * @param vector The vector used for the multiplication.
   * @returns The resulting dot product.
   */
  dotProduct (vector) {
    return this.x * vector.x + this.y * vector.y
  }

  /**
   * Vector rotation (see https://en.wikipedia.org/wiki/Rotation_matrix)
   *
   * @param angleInRadians The angle in radians by which to rotate the vector.
   * @returns The rotated vector.
   */
  rotate (angleInRadians) {
    const ca = Math.cos(angleInRadians)
    const sa = Math.sin(angleInRadians)
    const x = ca * this.x - sa * this.y
    const y = sa * this.x + ca * this.y
    return new Vector2(x, y)
  }

  /**
   * Measure angle between two vectors
   *
   * @param vector The 2nd vector for the measurement.
   * @returns The angle in radians.
   */
  angleBetween (vector) {
    return Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x)
  }
}
