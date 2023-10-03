/*
  Returns the sum of a geometric progression
  Article on Geometric Progression: https://en.wikipedia.org/wiki/Geometric_series
  Examples:
  > sumOfGeometricProgression(2, 0.5, 6)
  3.9375
  > sumOfGeometricProgression(0.5, 10, 3)
  55.5
  > sumOfGeometricProgression(0.5, 10, Infinity)
  Error: The geometric progression is diverging, and its sum cannot be calculated
*/

/**
 *
 * @param {Number} firstTerm The first term of the geometric progression
 * @param {Number} commonRatio The common ratio of the geometric progression
 * @param {Number} numOfTerms The number of terms in the progression
 */
function sumOfGeometricProgression(firstTerm, commonRatio, numOfTerms) {
  if (!Number.isFinite(numOfTerms)) {
    /*
      If the number of Terms is Infinity, the common ratio needs to be less than 1 to be a convergent geometric progression
      Article on Convergent Series: https://en.wikipedia.org/wiki/Convergent_series
    */
    if (Math.abs(commonRatio) < 1) return firstTerm / (1 - commonRatio)
    throw new Error(
      'The geometric progression is diverging, and its sum cannot be calculated'
    )
  }

  if (commonRatio === 1) return firstTerm * numOfTerms

  return (
    (firstTerm * (Math.pow(commonRatio, numOfTerms) - 1)) / (commonRatio - 1)
  )
}

export { sumOfGeometricProgression }
