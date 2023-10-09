// Import the function we want to test
import { fahrenheitToCelsius } from "../FahrenheitToCelcius";

// Describe block to group related test cases
describe('Fahrenheit to Celsius conversion', () => {
  // Test case 1: 32°F should be 0°C
  it('should convert 32°F to 0°C', () => {
    // Arrange: Set up the input value
    const fahrenheit = 32;

    // Act: Call the function we want to test
    const celsius = fahrenheitToCelsius(fahrenheit);

    // Assert: Check if the result is as expected
    expect(celsius).toBe(0);
  });

  // Test case 2: 68°F should be 20°C
  it('should convert 68°F to 20°C', () => {
    const fahrenheit = 68;
    const celsius = fahrenheitToCelsius(fahrenheit);
    expect(celsius).toBe(20);
  });

});