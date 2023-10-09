/*
The process to convert feet to meters is quite simple. To convert feet to meters, you must multiply the unit by 0.304.

Reference:
https://www.metric-conversions.org/length/feet-to-meters.htm
*/

// Constants for unit conversion
const FEET_TO_METERS_RATIO = 0.3048;

// Function to convert feet to meters
function feetToMeters(feet) {
  return feet * FEET_TO_METERS_RATIO;
}

// Export the function for use in other files
export { feetToMeters };