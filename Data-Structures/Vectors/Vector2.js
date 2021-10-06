/**
 * In mathematics and physics, a vector is an element of a vector space.
 *
 * The Vector2-class implements 2-dimensional vectors together with various vector-operations.
 * @see https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics).
 */

class Vector2 {
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

export { Vector2 }
