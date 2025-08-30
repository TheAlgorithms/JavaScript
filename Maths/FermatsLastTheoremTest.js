/*
 * Fermat's Last Theorem states:
 *
 *   For every integer n >= 3, the equation
 *
 *       x^n + y^n = z^n
 *
 *   has no nontrivial integer solutions (x, y, z > 0).
 *
 * In contrast, for n = 2 there are infinitely many solutions (the famous
 * Pythagorean triples like 3^2 + 4^2 = 5^2).
 *
 * While Andrew Wiles proved this theorem in 1994 using advanced mathematics
 * (elliptic curves and modular forms), we can illustrate the theorem in JavaScript
 * by brute-force checking ranges of x, y, z for small exponents n.
 *
 * within checked ranges, no counterexamples exist for n >= 3.
 */

/**
 * Check for counterexamples to Fermat's Last Theorem within a bounded range.
 *
 * This function uses BigInt arithmetic to handle large ranges safely.
 *
 * @param {number} maxValue - The maximum integer to check for x and y
 * @param {number} exponent - The power n (>= 3)
 * @returns {Array} - Array of counterexamples found (should be empty)
 */

const checkFermatLastTheorem = (maxValue, exponent) => {
  if (exponent < 3) {
    throw new Error("Fermat's Last Theorem only applies for n >= 3")
  }

  const counterexamples = []
  const exponentBigInt = BigInt(exponent)

  for (let baseX = 1; baseX <= maxValue; baseX++) {
    const baseXPowerN = BigInt(baseX) ** exponentBigInt

    for (let baseY = baseX; baseY <= maxValue; baseY++) {
      const baseYPowerN = BigInt(baseY) ** exponentBigInt
      const sumOfPowers = baseXPowerN + baseYPowerN

      // compute integer nth root of sumOfPowers using binary search
      let lowerBound = 1n
      let upperBound = sumOfPowers
      let potentialZ = 0n

      while (lowerBound <= upperBound) {
        const middle = (lowerBound + upperBound) >> 1n
        const middlePowerN = middle ** exponentBigInt

        if (middlePowerN === sumOfPowers) {
          potentialZ = middle
          break
        } else if (middlePowerN < sumOfPowers) {
          lowerBound = middle + 1n
        } else {
          upperBound = middle - 1n
        }
      }

      // exact check
      if (potentialZ > 0n && potentialZ ** exponentBigInt === sumOfPowers) {
        counterexamples.push({
          x: baseX,
          y: baseY,
          z: potentialZ.toString(),
          n: exponent
        })
      }
    }
  }

  return counterexamples
}

export default checkFermatLastTheorem
