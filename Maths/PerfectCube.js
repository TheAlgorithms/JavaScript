/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * This uses `round` instead of `floor` or `trunc`, to guard against potential `cbrt` accuracy errors
 */

const perfectCube = (num) =>
  Number.isFinite(num) && Math.round(Math.cbrt(num)) ** 3 === num

export { perfectCube }
