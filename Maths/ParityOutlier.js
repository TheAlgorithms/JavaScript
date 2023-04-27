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
  let odds = []; //store odd number(s)
  let evens = []; // store even number(s)

  for (let i = 0; i < integers.length; i++) {
    if (!Number.isInteger(integers[i])) { // detect non-integer elements
      return null;
    } else if (integers[i] % 2 === 0) { // an even number
      evens.push(integers[i]);
    } else { // an odd number
      odds.push(integers[i]);
    }
  }

  if (odds.length === 0 || evens.length === 0) return null;

  return odds.length === 1 ? odds[0] : evens[0];
}

export { parityOutlier };