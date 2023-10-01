/**
 * @author mrmagic2020
 * @description The function will find the parity outlier from an array of integers.
 * @see https://en.wikipedia.org/wiki/Parity_(mathematics)
 * @param {number[]} integers - An array of integers.
 * @returns {number} - The parity outlier.
 * @example parityOutlier([1, 3, 5, 8, 9]) = 8
 */
const parityOutlier = (integers) => {
  let oddsCount = 0 // define counter for odd number(s)
  let evensCount = 0 // define counter for even number(s)
  let odd, even

  for (const e of integers) {
    if (!Number.isInteger(e)) {
      // detect non-integer elements
      return null
    }
    if (e % 2 === 0) {
      // an even number
      even = e
      evensCount++
    } else {
      // an odd number
      odd = e
      oddsCount++
    }
  }

  if (oddsCount === 0 || evensCount === 0) return null // array has only odd/even number(s)
  if (oddsCount > 1 && evensCount > 1) return null // array has more than one even and odd number

  return oddsCount === 1 ? odd : even
}

export { parityOutlier }
