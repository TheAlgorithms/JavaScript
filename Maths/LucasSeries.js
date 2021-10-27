/*
  Program to get the Nth Lucas Number
  Article on Lucas Number: https://en.wikipedia.org/wiki/Lucas_number
  Examples:
    > loopLucas(1)
    1
    > loopLucas(20)
    15127
    > loopLucas(100)
    792070839848372100000
*/

/**
 * @param {Number} index The position of the number you want to get from the Lucas Series
 */
function lucas (index) {
  // index can't be negative
  if (index < 0) throw new TypeError('Index cannot be Negative')

  // index can't be a decimal
  if (Math.floor(index) !== index) throw new TypeError('Index cannot be a Decimal')

  let a = 2
  let b = 1
  for (let i = 0; i < index; i++) {
    const temp = a + b
    a = b
    b = temp
  }
  return a
}

export { lucas }
