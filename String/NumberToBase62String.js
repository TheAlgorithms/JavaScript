/*
  Problem Source & Explanation: https://stackoverflow.com/questions/1119722/base-62-conversion

  In this method, we have followed the different approaches to convert a single numeric
  value to a base62 value because most of the time all the base36 it means the use
  only lower case alphabetic value so the have created lot's of the collision, but
  if we add some more alphabetic value in it so we can decrease the collision.
*/

/**
 * NumberToBase62String the method converts any numeric value to correspond base62 string value.
 * @param {Number} inputValue input numeric value.
 * @returns `String` return Base62 string value.
 */
const NumberToBase62String = (inputValue) => {
  // firstly, check that input is a number or not.
  if (typeof inputValue !== 'number') {
    return new TypeError('Argument is not a number.')
  }
  // create a base62 char-set.
  const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const base62Result = []
  // convert the number to the alphabet using the above explanation.
  while (inputValue > 0) {
    base62Result.push(charSet[inputValue % 62])
    inputValue = Math.floor(inputValue / 62)
  }
  // reverse and join all characters and return to the user.
  return base62Result.reverse().join('')
}

module.exports = NumberToBase62String
