/**
 * @function calcHypothenuse
 * @description Calculate the length of hypothenuse of triangle
 * @param {Integer} side1 - Integer
 * @param {Integer} side2 - Integer
 * @return {Integer} - hypothenuse
 * @see [calcHypothenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcHypothenuse(2, 3) = 4
 */
const calcHypothenuse = (side1, side2) => {
  const hypothenuse = Math.sqrt((side1 ** 2) + (side2 ** 2))
  return hypothenuse
}
/**
 * @function calcOtherSide
 * @description Calculate the length of other sides of triangle
 * @param {Integer} hypothenuse - Integer
 * @param {Integer} side1 - Integer
 * @return {Integer} - side2
 * @see [calcOtherSide](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcOtherSide(4, 3) = 2
 */
const calcOtherSide = (hypothenuse, side1) => {
  if (side1 >= hypothenuse) {
    return 'Length of side1 must be smaller than hypothenuse'
  }
  const side2 = Math.sqrt((hypothenuse ** 2) - (side1 ** 2))
  return side2
}

export {
  calcHypothenuse,
  calcOtherSide,
}
