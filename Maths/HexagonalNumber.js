/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Hexagonal Number: https://en.wikipedia.org/wiki/Hexagonal_number
 * The nth hexagonal number hn is the number of distinct dots in a pattern of dots
 * consisting of the outlines of regular hexagons with sides up to n dots, when the
 * hexagons are overlaid so that they share one vertex.
 */

/**
 * @function hexagonalNumber
 * @description -> returns nth hexagonal number
 * @param {Integer} number
 * @returns {Integer} nth hexagonal number
 */

export const hexagonalNumber = (number) => {
  if (number <= 0) {
    throw new Error('Number must be greater than zero.')
  }
  return number * (2 * number - 1)
}
