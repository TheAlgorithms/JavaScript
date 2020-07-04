/*
    author: TangibleDream
    license: GPL-3.0 or later

    This script will find y given the element and columns for a 2 dimensional array.

    If your array is a perfect square, you can find columns by getting the square
    root of the length of the array.

*/

const gridGetY = (columns, index) => {
  return (Math.floor(index / columns)) + 1
}

console.log(`If a square array has 400 elements,  then the value of y for the 27th element is ${gridGetY(Math.sqrt(400),27)}`);
console.log(`If an array has 7 columns and 3 rows,  then the value of y for the 11th element is ${gridGetY(7,11)}`);
