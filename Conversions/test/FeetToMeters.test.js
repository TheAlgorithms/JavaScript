// Import the function to be tested
import { feetToMeters } from "../FeetToMeters";

// Describe block to group related tests
describe('Feet to Meters Conversion', () => {
  // Individual test cases
  test('Convert 0 feet to meters', () => {
    // Arrange
    const feet = 0;

    // Act
    const meters = feetToMeters(feet);

    // Assert
    expect(meters).toBe(0);
  });

  test('Convert 1 foot to meters', () => {
    // Arrange
    const feet = 1;

    // Act
    const meters = feetToMeters(feet);

    // Assert
    expect(meters).toBeCloseTo(0.3048, 4); // Close enough within 4 decimal places
  });

  test('Convert 5 feet to meters', () => {
    // Arrange
    const feet = 5;

    // Act
    const meters = feetToMeters(feet);

    // Assert
    expect(meters).toBeCloseTo(1.524, 4);
  });

});
