/**
 * Problem statement and explanation: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
 *
 * This algorithm plays an important role for modular arithmetic, and by extension for cyptography algorithms
 *
 * This implementation uses an iterative approach to calculate
 */

/**
 *
 * @param {Number} arg1 first argument
 * @param {Number} arg2 second argument
 * @returns Array with GCD and first and second Bézout coefficients
 */
const extendedEuclideanGCD = (arg1, arg2) => {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') throw new TypeError('Not a Number')
  if (arg1 < 1 || arg2 < 1) throw new TypeError('Must be positive numbers')

  // Make the order of coefficients correct, as the algorithm assumes r0 > r1
  if (arg1 < arg2) {
    const res = extendedEuclideanGCD(arg2, arg1)
    const temp = res[1]
    res[1] = res[2]
    res[2] = temp
    return res
  }

  // At this point arg1 > arg2

  // Remainder values
  let r0 = arg1
  let r1 = arg2

  // Coefficient1 values
  let s0 = 1
  let s1 = 0

  // Coefficient 2 values
  let t0 = 0
  let t1 = 1

  while (r1 != 0) {
    const q = Math.floor(r0 / r1)

    const r2 = r0 - r1 * q
    const s2 = s0 - s1 * q
    const t2 = t0 - t1 * q

    r0 = r1
    r1 = r2
    s0 = s1
    s1 = s2
    t0 = t1
    t1 = t2
  }
  return [r0, s0, t0]
}

export { extendedEuclideanGCD }
// ex
