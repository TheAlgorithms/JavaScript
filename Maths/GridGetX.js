/*
    author: TangibleDream
    license: GPL-3.0 or later

    This script will find x given the element and columns for a 2 dimensional array.

    If your array is a perfect square, you can find columns by getting the square
    root of the length of the array.

*/

const gridGetX = (columns, index) => {
    while ((index + 1) > columns) {
        index = index - columns;
    }
    return (index + 1);
}

console.log(`If a square array has 400 elements, then the value of x for the 27th element is ${gridGetX(Math.sqrt(400),27)}`);
console.log(`If an array has 7 columns and 3 rows, then the value of x for the 11th element is ${gridGetX(7,11)}`);