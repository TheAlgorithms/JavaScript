/**
 * @function ValidateURL
 * @description validate the URL.
 * @param {String} url - The input URL string
 * @return {Boolean}
 */
const validateURL = (url) => {
  let valid = null;
  try {
    valid = new URL(url);
  }catch(err) {
    valid = false;
  }

  return valid;
}

export { validateURL }
