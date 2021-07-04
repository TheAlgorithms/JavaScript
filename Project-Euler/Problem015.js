// https://projecteuler.net/problem=15
/* Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

const latticePath = n => {

    for (var i = 1, c = 1; i <= n; i++)
        c = c * (n + i) / i;
    return c;
}
console.log(latticePath(20));
