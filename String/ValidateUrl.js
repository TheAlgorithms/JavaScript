/**
 * @function ValidateURL
 * @description validate the URL.
 * @param {String} url - The input URL string
 * @return {Boolean}
 */
const validateURL = (url) => {
  const URL_PATTERN = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/gi

  return URL_PATTERN.test(url)
}

export { validateURL }
