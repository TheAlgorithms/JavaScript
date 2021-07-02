/* Even Number: https://simple.wikipedia.org/wiki/Even_number
 *
 * function to check if number is even
 * return true if number is even
 * else false
 */

/**
 * @param {number} number
 * @return {boolean}
 */

const isEven = (number) => {
  return (number & 1) === 0
}

// testing
console.log(isEven(4))
console.log(isEven(7))
