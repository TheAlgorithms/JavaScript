/**
 * Returns whether the given string is a valid email address or not.
 */
const validateEmail = (str) => {
  if (str === '' || str === null) {
    throw new TypeError('Email Address String Null or Empty.')
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

export { validateEmail }
