import splitIntoSentences from "../ParagraphToSentence";

describe('splitIntoSentences', () => {
  it('should split a paragraph into sentences', () => {
    const paragraph = 'This is the first sentence. This is the second sentence! This is the third sentence?';
    const expectedSentences = [
      'This is the first sentence',
      ' This is the second sentence',
      ' This is the third sentence',
    ];
    expect(splitIntoSentences(paragraph)).toEqual(expectedSentences);
  });

  it('should handle paragraphs with no punctuation marks', () => {
    const paragraph = 'This is a paragraph with no punctuation';
    expect(splitIntoSentences(paragraph)).toEqual([paragraph]);
  });

  it('should handle paragraphs with consecutive punctuation marks', () => {
    const paragraph = 'This is a test... with multiple dots... and exclamation marks!!!';
    const expectedSentences = [
      'This is a test',
      ' with multiple dots',
      ' and exclamation marks',
    ];
    expect(splitIntoSentences(paragraph)).toEqual(expectedSentences);
  });

  it('should handle paragraphs with whitespace-only sentences', () => {
    const paragraph = 'This is a test.    \n  \t   ';
    expect(splitIntoSentences(paragraph)).toEqual(['This is a test']);
  });
});