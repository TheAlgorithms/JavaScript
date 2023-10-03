import { binaryToText } from './BinaryToText.js';

describe('binaryToText', () => {
  it('should convert binary to text', () => {
    expect(binaryToText('01001000 01100101 01101100 01101100 01101111')).toBe('Hello');
  });
});



