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
  
    // Find the shortest string in the array
    const shortestStr = strs.reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    }, strs[0]);
  
    let prefix = "";
    for (let i = 0; i < shortestStr.length; i++) {
      const char = shortestStr[i];
      if (strs.every((str) => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    }
  
    return prefix;
  };
  
  export default longestCommonPrefix;
  