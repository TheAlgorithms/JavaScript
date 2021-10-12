/*
Convert Celsius to Fahrenheit 

Use this Formula:	
(0°C × 9/5) + 32 = 32°F

*/


function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(20);
