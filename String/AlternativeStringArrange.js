// Alternative arrange the two given strings in one string in O(n) time complexity.

// Problem Source & Explanation: https://www.geeksforgeeks.org/alternatively-merge-two-strings-in-java/ 

/**
 * Alternative arrange the two given strings in one string in O(n) time complexity.
 * @param {String} str1 first input string
 * @param {String} str2 second input string
 * @returns `String` return one alternative arrange string.
 */
const AlternativeStringArrange = (str1, str2) => {

  // firstly, check that both inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Not string(s)'
  }

  // output string vlaue.
  let out_str = "";

  // get first string length.
  const firstStringLength = str1.length;
  // get second string length.
  const secondStringLength = str2.length;
  // absolute length for oparetion.
  let absLenght = firstStringLength > secondStringLength ? firstStringLength : secondStringLength;

  // Iterate the character count until the absolute count is reached.
  for (let charCount = 0; charCount < absLenght; charCount++) {
    // If firstStringLength is lesser than the charCount it means they are able to re-arange.
    if (charCount < firstStringLength) {
      out_str += str1[charCount];
    }

    // If secondStringLength is lesser than the charCount it means they are able to re-arange.
    if (charCount < secondStringLength) {
      out_str += str2[charCount];
    }
  }

  // return the output string.
  return out_str;
}

module.exports = AlternativeStringArrange;
