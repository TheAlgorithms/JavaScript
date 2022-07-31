/**
 * @function calcHypothenuse
 * @description Calculate the length of hypothenuse of triangle
 * @param {Integer} base - Integer
 * @param {Integer} adjacent - Integer
 * @return {Integer} - hypothenuse
 * @see [findHypothenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcHypothenuse(2, 3) = 4
 */
const calcHypothenuse = (side1, side2) => {
  const hypothenuse = Math.sqrt((adjacent ** 2) + (base ** 2))
  return hypothenuse
}

/**
 * @function calcAdjacent
 * @description Calculate the length of adjacent of triangle
 * @param {Integer} hypothenuse - Integer
 * @param {Integer} base - Integer
 * @return {Integer} - adjacent
 * @see [findHypothenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcAdjacent(4, 3) = 2
 */
const calcOtherSides = (hypothenuse, side1) => {
  if (side1 >= hypothenuse) {
    return 'Length of side1 must be smaller than hypothenuse'
  }
  const side2 = Math.sqrt((hypothenuse ** 2) - (side1 ** 2))
  return side2
}

export {
calcHypothenuse, 
calcOtherSides,
}
