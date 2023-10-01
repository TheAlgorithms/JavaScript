import { binaryAgent } from '../BinaryToText';

describe('binaryAgent', () => {
  it('should convert binary to text', () => {
    const binaryInput = '01001000 01100101 01101100 01101100 01101111';
    const expectedOutput = 'Hello';

    const result = binaryAgent(binaryInput);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle other test cases', () => {
    const binaryInput = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
    const expectedOutput = "Aren't bonfires fun!?";

    const result = binaryAgent(binaryInput);

    expect(result).toEqual(expectedOutput);
    
  });
});
