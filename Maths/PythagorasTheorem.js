/**
 * @function calcHypothenuse
 * @description Calculate the length of hypothenuse of triangle
 * @param {Integer} base - Integer
 * @param {Integer} adjacent - Integer
 * @return {Integer} - hypothenuse
 * @see [findHypothenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcHypothenuse(2, 3) = 4
 */

const calcHypothenuse = (adjacent, base) => {
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

const calcAdjacent = (hypothenuse, base) => {
  if(base >= hypothenuse){
    return "Length of base must be smaller than hypothenuse"
  }
  
  const adjacent = Math.sqrt((hypothenuse ** 2) - (base ** 2))
  return adjacent
}


/**
 * @function calcBase
 * @description Calculate the length of hypothenuse of triangle
 * @param {Integer} hypothenuse - Integer
 * @param {Integer} adjacent - Integer
 * @return {Integer} - base
 * @see [findHypothenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcBase(4, 2) = 3
 */

const calcBase = (hypothenuse, adjacent) => {
  
  if(adjacent >= hypothenuse){
    return "Length of adjacent must be smaller than hypothenuse"
  }
  
  const base = Math.sqrt((hypothenuse ** 2) - (adjacent ** 2))
  return base
}

export{
calcHypothenuse, 
calcAdjacent,
calcBase
}
