/**
 * @function powOn
 * @description - The powOn function is a power function with Linear O(n) complexity
 * @param {number} base 
 * @param {number} power 
 * @returns {number}
 * @example - powOn(2, 2) => 4 --> 2 * 2
 * @example - powOn(3, 3) => 27 --> 3 * 3 *
 */
const powOn = (base, power) => {
  if (power < 0) {
    base = 1 / base
    power = -power
  }
  
  let result = 1

  while (power--) { // Break the execution while the power will 0 
    result *= base
  }

  return result
}

export { powOn }
