/*
    How to design a system that takes big URLs like
    “https://www.geeksforgeeks.org/count-sum-of-digits-in-numbers-from-1-to-n/”
    and converts them into a short 6 character URL. It is given that URLs are
    stored in the database and every URL has an associated integer id.

    Problem Source & Explanation: https://www.geeksforgeeks.org/how-to-design-a-tiny-url-or-url-shortener/
*/

/**
 * URLShortener method converts any numeric id to a unique string
 * @param {Number} id input id.
 * @returns `String` Shorter or tiny id(url).
 */
const URLShortener = (id) => {
  // firstly, check that input is a number or not.
  if (typeof id !== 'number') {
    return new TypeError('Argument is not a number.')
  }
  // create a base62 char-set.
  const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const urlList = []
  // convert the number to the alphabet using the above explanation.
  while (id > 0) {
    urlList.push(charSet[id % 62])
    id = Math.floor(id / 62)
  }
  // reverse and join all characters and return to the user.
  return urlList.reverse().join('')
}

module.exports = URLShortener
