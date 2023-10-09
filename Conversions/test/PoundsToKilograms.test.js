// Import the function to be tested
import { poundsToKilograms } from './poundsToKilograms';

// Describe the test suite
describe('poundsToKilograms', () => {
  // Test case 1: Check if 0 pounds is correctly converted to 0 kilograms
  it('converts 0 pounds to 0 kilograms', () => {
    expect(poundsToKilograms(0)).toBe(0);
  });

  // Test case 2: Check if 1 pound is correctly converted to approximately 0.45359237 kilograms
  it('converts 1 pound to approximately 0.45359237 kilograms', () => {
    expect(poundsToKilograms(1)).toBeCloseTo(0.45359237, 5); // Using toBeCloseTo to account for floating-point precision
  });

  // Test case 3: Check if a negative value correctly converts to a negative value in kilograms
  it('converts negative pounds to negative kilograms', () => {
    expect(poundsToKilograms(-5)).toBeCloseTo(-2.26796185, 5);
  });

  // Test case 4: Check if a large value correctly converts
  it('converts a large value in pounds to kilograms', () => {
    expect(poundsToKilograms(1000)).toBe(453.59237);
  });
});