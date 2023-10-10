/**
 * @function longestCommonPrefix
 * @description Finds the longest common prefix in an array of strings.
 * 
 * @param {string[]} strs - An array of strings to find the longest common prefix from.
 * @returns {string} - The longest common prefix of the input strings.
 */
const longestCommonPrefix = (strs) => {
    if (!strs || strs.length === 0) {
      return "";
    }
  
    // Sort the array to ensure that the shortest and longest strings are at the extremes.
    strs.sort((a, b) => a.length - b.length);
  
    const shortestStr = strs[0];
    const longestStr = strs[strs.length - 1];
  
    let prefix = "";
    for (let i = 0; i < shortestStr.length; i++) {
      if (shortestStr[i] === longestStr[i]) {
        prefix += shortestStr[i];
      } else {
        break;
      }
    }
  
    return prefix;
  };
  
  export default longestCommonPrefix;