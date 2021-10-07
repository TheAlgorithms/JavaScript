/**
 * The Koch snowflake is a fractal curve and one of the earliest fractals to have been described.
 *
 * The Koch snowflake can be built up iteratively, in a sequence of stages. The first stage is an equilateral triangle,
 * and each successive stage is formed by adding outward bends to each side of the previous stage, making smaller
 * equilateral triangles. This can be achieved through the following steps for each line:
 * 1. divide the line segment into three segments of equal length.
 * 2. draw an equilateral triangle that has the middle segment from step 1 as its base and points outward.
 * 3. remove the line segment that is the base of the triangle from step 2.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Koch_snowflake)
 * (for a more detailed explanation and an implementation in the Processing language, see
 * https://natureofcode.com/book/chapter-8-fractals/ #84-the-koch-curve-and-the-arraylist-technique).
 */

/** Class to handle the vector calculations. */
export class Vector2 {
  constructor (x, y) {
    this.x = x
    this.y = y
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
   * Vector rotation (see https://en.wikipedia.org/wiki/Rotation_matrix)
   *
   * @param angleInDegrees The angle by which to rotate the vector.
   * @returns The rotated vector.
   */
  rotate (angleInDegrees) {
    const radians = angleInDegrees * Math.PI / 180
    const ca = Math.cos(radians)
    const sa = Math.sin(radians)
    const x = ca * this.x - sa * this.y
    const y = sa * this.x + ca * this.y
    return new Vector2(x, y)
  }
}

/**
 * Go through the number of iterations determined by the argument "steps".
 *
 * Be careful with high values (above 5) since the time to calculate increases exponentially.
 *
 * @param initialVectors The vectors composing the shape to which the algorithm is applied.
 * @param steps The number of iterations.
 * @returns The transformed vectors after the iteration-steps.
 */
export function iterate (initialVectors, steps) {
  let vectors = initialVectors
  for (let i = 0; i < steps; i++) {
    vectors = iterationStep(vectors)
  }

  return vectors
}

/**
 * Loops through each pair of adjacent vectors.
 *
 * Each line between two adjacent vectors is divided into 4 segments by adding 3 additional vectors in-between the
 * original two vectors. The vector in the middle is constructed through a 60 degree rotation so it is bent outwards.
 *
 * @param vectors The vectors composing the shape to which the algorithm is applied.
 * @returns The transformed vectors after the iteration-step.
 */
function iterationStep (vectors) {
  const newVectors = []
  for (let i = 0; i < vectors.length - 1; i++) {
    const startVector = vectors[i]
    const endVector = vectors[i + 1]
    newVectors.push(startVector)
    const differenceVector = endVector.subtract(startVector).multiply(1 / 3)
    newVectors.push(startVector.add(differenceVector))
    newVectors.push(startVector.add(differenceVector).add(differenceVector.rotate(60)))
    newVectors.push(startVector.add(differenceVector.multiply(2)))
  }

  newVectors.push(vectors[vectors.length - 1])
  return newVectors
}
