import { checkEvenParity, checkOddParity } from '../BitwiseParityCheck';

// Test cases for checkEvenParity
describe('checkEvenParity', () => {
  it('should return true for a binary number with even parity', () => {
      const binaryNumber = parseInt('1101100', 2); // Even parity binary number
      const result = checkEvenParity(binaryNumber);
      expect(result).toBe(true);
  });

  it('should return false for a binary number with odd parity', () => {
      const binaryNumber = parseInt('1101101', 2); // Odd parity binary number
      const result = checkEvenParity(binaryNumber);
      expect(result).toBe(false);
  });

  it('should return true for a binary number with all bits set to 0', () => {
      const binaryNumber = 0; // All bits set to 0
      const result = checkEvenParity(binaryNumber);
      expect(result).toBe(true);
  });

  // Add more test cases as needed
});

// Test cases for checkOddParity
describe('checkOddParity', () => {
  it('should return true for a binary number with odd parity', () => {
      const binaryNumber = parseInt('1101101', 2); // Odd parity binary number
      const result = checkOddParity(binaryNumber);
      expect(result).toBe(true);
  });

  it('should return false for a binary number with even parity', () => {
      const binaryNumber = parseInt('1101100', 2); // Even parity binary number
      const result = checkOddParity(binaryNumber);
      expect(result).toBe(false);
  });

  it('should return true for a binary number with all bits set to 0', () => {
      const binaryNumber = 0; // All bits set to 0
      const result = checkEvenParity(binaryNumber);
      expect(result).toBe(true);
  });
});
