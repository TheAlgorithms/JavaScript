// @function findLongestCommonSuffix
// @description Finds the longest common suffix in an array of strings.
// @param {string[]} strings - An array of strings to find the common suffix from.
// @returns {string} - The longest common suffix.

export function findLongestCommonSuffix(strings) {
    if (strings.length === 0) return '';
  
    const firstString = strings[0];
    let commonSuffix = '';
  
    for (let i = 0; i < firstString.length; i++) {
      const char = firstString.charAt(i);
  
      for (let j = 1; j < strings.length; j++) {
        if (i >= strings[j].length || strings[j].charAt(i) !== char) {
          return commonSuffix;
        }
      }
  
      commonSuffix += char;
    }
  
    return commonSuffix;
  }
  