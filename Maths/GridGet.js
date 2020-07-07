/*
    author: TangibleDream
    license: GPL-3.0 or later

    These methods will find x or y given the element and columns for a 2 dimensional array.

    If your array is a perfect square, you can find columns by getting the square
    root of the length of the array.

    Let's say for instance you had an array of 10 by 10 or 100, elements and you wanted to
    find the shortest distance between element 3, and element 49. In this case coding out
    a function to return the distance without finding x and y for both elements I found to
    be painful. If you first find x and y, where 3 becomes 4,1 and 49 becomes 10,5, you can
    find distance by first subtracting x from x and y from y this returns 6,4 or -6,-4.
    Next apply absolute value to assure the results are positive,
    last choose the maximum value of the set, or 6.

    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  | 3|  |  |  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  |  |  |49|
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  |  |  |  |

    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  | 3|  |  |  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  | 1|  |  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  | 2|  |  |  |  |
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  | 3| 4| 5|6!|
    +--+--+--+--+--+--+--+--+--+--+
    |  |  |  |  |  |  |  |  |  |  |

*/

const gridGetX = (columns, index) => {
  while ((index + 1) > columns) {
    index = index - columns
  }
  return (index + 1)
}

const gridGetY = (columns, index) => {
  return (Math.floor(index / columns)) + 1
}

console.log(`If a square array has 400 elements,  then the value of x for the 27th element is ${gridGetX(Math.sqrt(400), 27)}`)
console.log(`If an array has 7 columns and 3 rows,  then the value of x for the 11th element is ${gridGetX(7, 11)}`)
console.log(`If a square array has 400 elements,  then the value of y for the 27th element is ${gridGetY(Math.sqrt(400), 27)}`)
console.log(`If an array has 7 columns and 3 rows,  then the value of y for the 11th element is ${gridGetY(7, 11)}`)
