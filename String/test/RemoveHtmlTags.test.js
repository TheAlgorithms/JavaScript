import removeHTMLTags from "../RemoveHtmlTags"; // Import the function using ES6 import syntax

describe('removeHTMLTags', () => {
  it('should remove HTML tags from a string', () => {
    // Test cases
    expect(removeHTMLTags('<p>This is <strong>bold</strong> text.</p>')).toBe('This is bold text.');
    expect(removeHTMLTags('<div><h1>Title</h1></div>')).toBe('Title');
    expect(removeHTMLTags('No HTML tags here.')).toBe('No HTML tags here.');
  });

  it('should handle empty strings', () => {
    // Test empty string
    expect(removeHTMLTags('')).toBe('');
  });

  it('should handle strings with only HTML tags', () => {
    // Test strings with only HTML tags
    expect(removeHTMLTags('<div></div>')).toBe('');
    expect(removeHTMLTags('<p><br></p>')).toBe('');
  });
});