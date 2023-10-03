import { binaryToText } from '../BinaryToText.js';

describe('binaryToText', () => {
  it('should convert binary to text', () => {
    const binaryInput = '01001000 01100101 01101100 01101100 01101111';
    const expectedOutput = 'Hello';

    const result = binaryToText(binaryInput);

    expect(result).toEqual(expectedOutput);
  });
});

