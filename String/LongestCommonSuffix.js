/**
 * Finds the longest common suffix in an array of strings.
 * @param {string[]} strings - An array of strings to find the common suffix from.
 * @returns {string} - The longest common suffix.
 */
export function findLongestCommonSuffix(strings) {
    if (strings.length === 0) return '';
  
    const sortedStrings = strings.slice().sort(); // Sort the strings lexicographically.
    const firstString = sortedStrings[0];
    const lastString = sortedStrings[sortedStrings.length - 1];
    let commonSuffix = '';
    
    for (let i = 0; i < firstString.length; i++) {
      if (firstString[i] === lastString[i]) {
        commonSuffix += firstString[i];
      } else {
        break;
      }
    }
  
    return commonSuffix;
  }
  