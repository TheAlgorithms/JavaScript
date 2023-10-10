// @function: sortStringByCharacterFrequency
// @description: Sorts a string based on the frequency of characters in descending order.
// @param {string} str - The input string to be sorted.
// @returns {string} - The sorted string.
function sortStringByCharacterFrequency(str) {
    // Step 1: Create a character frequency map.
    const charFrequency = new Map();
    for (const char of str) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  
    // Step 2: Sort the characters based on their frequencies.
    const sortedChars = Array.from(charFrequency.keys()).sort(
      (a, b) => charFrequency.get(b) - charFrequency.get(a)
    );
  
    // Step 3: Construct the sorted string.
    let sortedStr = '';
    for (const char of sortedChars) {
      sortedStr += char.repeat(charFrequency.get(char));
    }
  
    return sortedStr;
  }
  
  export default sortStringByCharacterFrequency;