/**
 * @file Provides solution for Project Euler Problem 18 - Maximum path sum I
 * @author Eric Lavault {@link https://github.com/lvlte}
 * @license MIT
 */

/**
 * Problem 18 - Maximum path sum I
 *
 * @see {@link https://projecteuler.net/problem=18}
 *
 * By starting at the top of the triangle below and moving to adjacent numbers
 * on the row below, the maximum total from top to bottom is 23 :
 *
 *                            3
 *                           7 4
 *                          2 4 6
 *                         8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below :
 *
 *                            75
 *                           95 64
 *                         17 47 82
 *                        18 35 87 10
 *                      20 04 82 47 65
 *                     19 01 23 75 03 34
 *                   88 02 77 73 07 63 67
 *                  99 65 04 28 06 16 70 92
 *                41 41 26 56 83 40 80 70 33
 *               41 48 72 33 47 32 37 16 94 29
 *             53 71 44 65 25 43 91 52 97 51 14
 *            70 11 33 28 77 73 17 78 39 68 17 57
 *          91 71 52 38 17 14 91 43 58 50 27 29 48
 *         63 66 04 68 89 53 67 30 73 16 69 87 40 31
 *       04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem
 * by trying every route. However, Problem 67, is the same challenge with a
 * triangle containing one-hundred rows; it cannot be solved by brute force,
 * and requires a clever method! ;o)
 */

const triangle = `
75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`

export const maxPathSum = function (grid = triangle) {
  /**
   * If we reduce the problem to its simplest form, considering :
   *
   *         7      -> The max sum depends on the two adjacent numbers below 7,
   *        2 4        not 7 itself.
   *
   *    obviously 4 > 2 therefore the max sum is 7 + 4 = 11
   *
   *                       6
   * Likewise, with :     4 6     6 > 4 therefore the max sum is 6 + 6 = 12
   *
   * Now, let's say we are given :
   *
   *         3
   *        7 6
   *       2 4 6
   *
   *    and we decompose it into sub-problems such that each one fits the simple
   *    case above, we got :
   *
   *         .           .           3
   *        7 .         . 6         ? ?
   *       2 4 .       . 4 6       . . .
   *
   *    Again, considering any number, the best path depends on the two adjacent
   *    numbers below it, not the number itself. That's why we have to compute
   *    the max sum from bottom to top, replacing each number with the sum of
   *    that number plus the greatest of the two adjacent numbers computed from
   *    the previous row.
   *
   *          .          .              3              15
   *        11 .        . 12    ->    11 12    ->    x   x
   *       x  x .      . x  x        x  x  x        x  x  x
   *
   * We are simplifying a complicated problem by breaking it down into simpler
   * sub-problems in a recursive manner, this is called Dynamic Programming.
   */

  grid = grid
    .split(/\r\n|\n/)
    .filter((l) => l)
    .map((r) => r.split(' ').map((n) => +n))

  for (let i = grid.length - 2; i >= 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] += Math.max(grid[i + 1][j], grid[i + 1][j + 1])
    }
  }

  return grid[0][0]
}
