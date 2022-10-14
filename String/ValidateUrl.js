/**
 * @function ValidateURL
 * @description validate the URL.
 * @param {String} url - The input URL string
 * @return {Boolean}
 */
const validateURL = (url) => {
  /**
   * Explaination:
   * 1. (http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)
   *    a. http://
   *    b. https://
   *    c. https://www.
   *    d. http://www.
   *
   * 2. [a-z0-9]+([-.]{1}[a-z0-9]+)
   *    a. my-example
   *    b. myexample.com
   *
   * 3. \.[a-z]{2,5}
   *    a. '.com'
   */
  const URL_PATTERN = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/gi

  return URL_PATTERN.test(url)
}

export { validateURL }
