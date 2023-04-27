/**
 * @author mrmagic2020
 * @description The function will find the parity outlier from an array of integers.
 * @see https://en.wikipedia.org/wiki/Parity_(mathematics)
 * @param {number[]} integers - An array of integers.
 * @returns {number} - The parity outlier.
 * @example parityOutlier([1, 3, 5, 8, 9]) = 8
 */
const parityOutlier = (integers) => {
  // define new containers
  let odds_count = 0 // define counter for odd number(s)
  let evens_count = 0 // define counter for even number(s)
  let odd, even

  for (let e of integers) {
    if (!Number.isInteger(e)) { // detect non-integer elements
      return null
    } else if (e % 2 === 0) { // an even number
      even = e
      evens_count++
    } else { // an odd number
      odd = e;
      odds_count++
    }
  }

  if (odds_count === 0 || evens_count === 0) return null // array has only odd/even number(s)
  else if (odds_count > 1 && evens_count > 1) return null // array has more than one even and odd number

  return odds_count === 1 ? odd : even
}

export { parityOutlier }
