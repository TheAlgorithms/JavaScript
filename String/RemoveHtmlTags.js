/**
 * @function removeHTMLTags
 * @description Removes HTML tags from a given string.
 * @param {string} inputString - The string containing HTML tags to be removed.
 * @returns {string} - The string with HTML tags removed.
 */
const removeHTMLTags = (inputString) => {
    // Use a regular expression to match and remove HTML tags
    const regex = /<\/?[^>]+(>|$)/g;
    return inputString.replace(regex, '');
  };
  
  export default removeHTMLTags; // Export the function using ES6 export syntax