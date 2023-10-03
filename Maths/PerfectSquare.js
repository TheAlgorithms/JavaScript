/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * This uses `round` instead of `floor` or `trunc`, to guard against potential `sqrt` accuracy errors
 */

const perfectSquare = (num) =>
  Number.isFinite(num) && Math.round(Math.sqrt(num)) ** 2 === num

export { perfectSquare }
