/*
There's a simple rule to convert Fahrenheit to Celsius that should be good enough for general use. 
Simply take 30 off the Fahrenheit value, and then half that number.

Reference:
https://www.metric-conversions.org/temperature/fahrenheit-to-celsius.htm
*/

// Function to convert Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
    // Formula: (Fahrenheit - 32) * 5/9
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
  }