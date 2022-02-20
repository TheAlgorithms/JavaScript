/**
 * @function agm
 * @description This finds the Arithmetic-Geometric Mean between any 2 numbers.
 * @param {Number} a - 1st number, also used to store Arithmetic Mean.
 * @param {Number} g - 2nd number, also used to store Geometric Mean.
 * @return {Number} - AGM of both numbers.
 * @see [AGM](https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean)
 */

 export const agm = (a, g) => {
  if (a === g) return a; //avoid rounding errors, and increase efficiency
  let x; //temp var, for detecting rounding differences between `sqrt` and division
  do {
    [a, g, x] = [(a + g) / 2, Math.sqrt(a * g), a]
  } while (a !== x && !isNaN(a));
  /*
  `x !== a` ensures the return value has full precision,
  and prevents infinite loops caused by rounding errors (no need for "epsilon").
  Precision is not the same as accuracy, but they're related.
  This function isn't always 100% accurate (round-errors), but at least is more than 95% accurate.
  `!isNaN(x)` prevents infinite loops caused by invalid inputs like: negatives, NaNs and both Infinities.
  */
	return a
}
