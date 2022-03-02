/**
 * @function powLinear
 * @description - The powLinear function is a power function with Linear O(n) complexity
 * @param {number} base 
 * @param {number} power 
 * @returns {number}
 * @example - powLinear(2, 2) => 4 --> 2 * 2
 * @example - powLinear(3, 3) => 27 --> 3 * 3
 */
const powLinear = (base, power) => {
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

/**
 * @function powFaster
 * @description - The powFaster function is a power function with Linear O(n) complexity
 * @param {number} base 
 * @param {number} power 
 * @returns {number}
 * @example - powFaster(2, 2) => 4 --> 2 * 2
 * @example - powFaster(3, 3) => 27 --> 3 * 3
 */
const powFaster = (base, power) => {
  if (power < 2) { // explanation below - 1
    return base && ([1, base][power] || powFaster(1 / base, -power))
  }

  if (power & 1) { // if the existing power is odd
    return base * powFaster(base * base, power >> 1) // explanation below - 2
  }

  return powFaster(base * base, power / 2)
}

/**
 * 1 - Magic of short circuit evaluation (&&, ||)
 * if the base is 0 then it returns 0 cause 0 is falsy
 * if the base is not 0 then it's must be truthy. after that, it will be executed the right portion of the && (AND) operator
 * Now it checks the power by the help array index, is it 0 or 1.
 * if the power is not 0 or 1 it's definitely less than 0, and a negative number is not a valid index number so it returns "undefined"
 * if the expression is undefined mean -> falsy, the || (OR) operator evaluates the right portion that is a recursive function.
 */

/**
 * 2 - Play with right shift bitwise operator (>>)
 * right shift with any odd numbers it returns the floor number instead of float.
 * E.g. if the number is 5, after right shifting with 1 it's will give us 2, not 2.5
 * cause the right shift formula is --> x >> y = |x| / 2^y
 */

export { powLinear, powFaster }
