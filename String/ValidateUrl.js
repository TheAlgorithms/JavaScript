/**
 * @function ValidateURL
 * @description validate the URL.
 * @param {String} url - The input URL string
 * @return {Boolean}
 */
const validateURL = (url) => {
  const URL_PATTERN = /^(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/gi

  return URL_PATTERN.test(url)
}

export { validateURL }
