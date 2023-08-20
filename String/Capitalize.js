/**
 * @function capitalize
 * @description Will convert the first character of the string to uppercase
 * @param {String} str - The input string
 * @returns {String} Capitalized string
 * @example capitalize("hello") => Hello
 * @example capitalize("_ello") => _ello
 */
const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Argument should be string')
  }

  return str[0].toLocaleUpperCase() + str.slice(1)
}

export default capitalize
