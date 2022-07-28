/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 * 
 * Infinity is an undefined cube, so return false for any sign.
 * This uses `round` instead of `floor` or `trunc`, to guard against rounding errors.
 */

const perfectCube = (num) => Number.isFinite(num) && Math.round(Math.cbrt(num)) ** 3 === num

export { perfectCube }
