function ReverseString(string) {
  // check that input is a string
  if (typeof string !== 'string') {
    return 'Not a string'
  }
  //  store the value of input string to a variable
  const _string = string
  if (string.length === 0) {
    return 'Empty String'
  }
  /* 
  split the _string into array using Array.prototype.split(''), 
  reverse the array using the Array.prototype.reverse(),
  concatenate the elements of array using Array.prototype.join('') to make it string again
  then return the reversed version of inputed string
   */
  return _string.split('').reverse().join('')
}

// testing
console.log(ReverseString('koddi'))
