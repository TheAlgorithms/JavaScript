/**
 * @author Nandan V
 * Saturday, 01 August 2020 3:24 PM
 * Function to check if two strings are anagrams.
 */
/**
 * @description Checks if two strings are anagrams.
 * @param string1 {string} A string to be checked.
 * @param string2 {string} Another string to be checked.
 * @return {boolean} True if they're anagrams, else false.
 */
function CheckAnagram (string1, string2) {
  // Passed values must be a string.
  if (typeof (string1) !== 'string') {
    throw new TypeError('Parameter string2 should be a string')
  }

  if (typeof (string2) !== 'string') {
    throw new TypeError('Parameter string2 should be a string')
  }

  // Strings are split into characters and sorted.
  string1 = string1.split('').sort().join('')
  string2 = string2.split('').sort().join('')

  // Compared.
  return (string1 === string2)
}

/**
 * Example usage
 */
console.log(CheckAnagram('dear', 'read'))
