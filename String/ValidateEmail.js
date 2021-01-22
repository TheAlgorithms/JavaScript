/*
  Function that takes a string input and return either true or false
  If it is a valid email address
*/

/*
*  Doctests
*
* > validateEmail('mahfoudh.arous@gmail.com')
*  true
* > validateEmail('mahfoudh.arous@helsinki.edu')
*  true
* > validateEmail('mahfoudh.arous.com')
*  false
* > validateEmail('')
*  ! TypeError
* > validateEmail(null)
*  ! TypeError
*/
const validateEmail = (str) => {
  if (str === '' || str === null) {
    throw new TypeError('Email Address String Null or Empty.')
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

export { validateEmail }
