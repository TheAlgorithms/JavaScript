/*
 Both pounds and kilograms are used to measure the mass/weight of the object. 
 Pounds is used as a US customary system for measurement of units and is denoted by the symbol “lbs”. 
 Also, the kilogram is a unit of mass which is used in the international system of units. 
 It is represented by the letter “kg”. One pound is approximately equal to 0.45359237 kilograms (kg). 
 The conversion of the pound to kilograms is done by multiplying the given pound value and 0.45359237.

 reference: https://www.metric-conversions.org/weight/pounds-to-kilograms.htm
 */

// Create a constant to represent the conversion factor
const POUNDS_TO_KILOGRAMS = 0.45359237;

// Function to convert pounds to kilograms
export function poundsToKilograms(pounds) {
  return pounds * POUNDS_TO_KILOGRAMS;
}
