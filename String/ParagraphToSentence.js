// @function: splitIntoSentences
// @description: Splits a paragraph into an array of sentences.
// @param {string} paragraph - The input paragraph to be split.
// @returns {string[]} - An array of sentences.
function splitIntoSentences(paragraph) {
    // Step 1: Define sentence delimiters (common punctuation marks).
    const sentenceDelimiters = /[.!?]/;
  
    // Step 2: Split the paragraph into sentences using the defined delimiters.
    const sentences = paragraph.split(sentenceDelimiters);
  
    // Step 3: Remove empty or whitespace-only sentences.
    const filteredSentences = sentences.filter((sentence) => sentence.trim() !== '');
  
    return filteredSentences;
  }
  
  export default splitIntoSentences;