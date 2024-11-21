/*
    author: redfly1
    More about HCF:
        https://en.wikipedia.org/wiki/Greatest_common_divisor
 */
/**
 *
 * @param {Number} x
 * @param {Number} y
 * @returns {(string|number)}
 */
const findHCF = (x, y) => {
  // If the input numbers are less than 1 return an error message.
  if (x < 1 || y < 1) {
    return 'Please enter values greater than zero.'
  }

  // If the input numbers are not integers return an error message.
  if (x !== Math.round(x) || y !== Math.round(y)) {
    return 'Please enter whole numbers.'
  }

  // Now apply Euclid's algorithm to the two numbers.
  while (Math.max(x, y) % Math.min(x, y) !== 0) {
    if (x > y) {
      x %= y
    } else {
      y %= x
    }
  }

  // When the while loop finishes the minimum of x and y is the HCF.
  return Math.min(x, y)
}

export { findHCF }
