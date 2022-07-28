/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * The integer check acts as a guard clause, and avoids calculating the root if the input is invalid,
 * it also ensures Infinity is treated as a non-cube.
 * This uses `round` instead of `floor` or `trunc`, to guard against potential `cbrt` accuracy errors.
 */

const perfectCube = (num) => Number.isInteger(num) && Math.round(Math.cbrt(num)) ** 3 === num

export { perfectCube }
