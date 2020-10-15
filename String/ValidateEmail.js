/*
  function that takes a string input and return either it is true of false
  a valid email address
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/

const validateEmail = (str) => {
  if (str === '' || str === null) {
    throw new TypeError('Email Address String Null or Empty.')
  }
  if (str.startsWith('@') === true || !str.includes('@') || !str.endsWith('.com')) {
    return false
  }

  return true
}

export { validateEmail }
