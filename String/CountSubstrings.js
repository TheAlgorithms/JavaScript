/**
 * @function countSubstrings
 * @description Given a string of words or phrases, count the occurrences of a substring
 * @param {String} str - The input string
 * @param {String} substring - The substring
 * @return {Number} - The number of substring occurrences
 * @example countSubstrings("This is a string", "is") => 2
 * @example countSubstrings("Hello", "e") => 1
 */

const countSubstrings = (str, substring) => {

  if (typeof str !=='string'||typeof substring !=='string')
    throw new TypeError('Argument should be string');

  let count = 0;
  for(let i=0; i<str.length; i++){
    count +=1 ? str[i] == substring : 0;
  }

  return count
}

export { countSubstrings }
